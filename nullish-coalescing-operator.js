function testing() {
    return {
        type: 'easy',
        cash: 2000
    };
}

const result = testing().cash ?? 500;
console.log(result); // 2000

// some outputs
// ?? only when is truthy than undefined or null
null || 500;   // 500
null ?? 500;   // 500

undefined || 500;   // 500
undefined ?? 500;   // 500

0 || 500;   // 500
0 ?? 500;   // 0

'' || 500;   // 500
'' ?? 500;   // ''

// ! Browser compatibility
/*

NodeJs: version 14
IE: Not supported
Edge*: Supported
Firefox: Supported
Chrome: Supported
Safari: Supported
Opera: Supported
iOS Safari*: Supported
Opera Mini*: Unknown support
Android Browser*: Supported
Opera Mobile*: Not supported

*/