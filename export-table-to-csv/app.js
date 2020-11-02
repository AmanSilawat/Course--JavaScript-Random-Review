const dataTable = document.getElementById('dataTable');
const btnExporterToCsv = document.getElementById("btnExporterToCsv");

btnExporterToCsv.addEventListener('click', () => {

    // TableCSVExporter: accept two argument (1st table element, 2nd true/false - true: allow table heading)
    const exporter = new TableCSVExporter(dataTable, false);

    // make CSV supported string content from table data
    const csvOutput = exporter.converToCSV();

    // The File interface is based on Blob
    const csvBlob = new Blob([csvOutput], { type: "text/csv" });

    // make a url based on csvBlob content
    const blobUrl = URL.createObjectURL(csvBlob);

    // create a anchore tag
    const anchorElement = document.createElement('a');
    anchorElement.href = blobUrl;

    // When the user downloads this file, a filename will be created which is table-export.csv
    anchorElement.download = "table-export.csv";

    // auto triger this anchor tag
    anchorElement.click();

    // previously created by calling URL.createObjectURL().
    // finished using no longer use then
    // lose the URL
    setTimeout(() => {
        URL.revokeObjectURL(blobUrl)
    }, 500);
})