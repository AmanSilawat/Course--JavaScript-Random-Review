class TableCSVExporter {
    constructor(table, includeHeaders = true) {
        this.table = table;
        this.rows = Array.from(table.querySelectorAll('tr'));

        if (!includeHeaders && this.rows[0].querySelectorAll('th').length) {
            this.rows.shift();
        }

    }
    // make CSV supported string content from table data
    converToCSV() {
        const lines = [];
        const numCols = this._findLongestLength();

        for (const row of this.rows) {
            let line = "";
            for (let i = 0; i < numCols; i++) {
                if (row.children[i] !== undefined) {
                    line += TableCSVExporter.parseCell(row.children[i]);
                }
                
                line += (i !== (numCols - 1)) ? ",": "";
            }
            lines.push(line);
        }

        return lines.join('\n');
    }

    // Find the maximum length of all rows
    _findLongestLength() {
        return this.rows.reduce( function(len, row) {
            return row.childElementCount > len ? row.childElementCount : len;
        }, 0)
    }

    // Parsing table column data to get CSV format supported
    static parseCell(tableCell) {
        let parsedValue = tableCell.textContent;

        // Replace all Double quotes with two Double quote
        parsedValue = parsedValue.replace(/"/g, `""`);
        
        // if value conatains comma, new-line or double-quote, enlose in double quotes
        parsedValue = /[",\n]/.test(parsedValue) ? `"${parsedValue}"` : parsedValue;

        return parsedValue;
    }
}