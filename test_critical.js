let resultElement = {
    value: '[{"url":"https://example.com/style.css","text":"body { color: red; }","ranges":[{"start":0,"end":20}]},{"url":"https://example.com/script.js","text":"console.log();","ranges":[{"start":0,"end":14}]}]'
};
let criticalElement = {
    value: ''
};

function critical() {
    if (!resultElement.value) return;

    let files;
    try {
        files = JSON.parse(resultElement.value);
    } catch (e) {
        return;
    }

    let usedCode = '';

    for (const file in files) {
        usedCode += '/* FILENAME '+ files[file].url+' */\n';
        if (files[file].url.endsWith('.css')) {
            const ranges = files[file];
            let text = ranges.text;
            for (let i = 0; i < ranges.ranges.length; i++) {
                const range = ranges.ranges[i];
                usedCode += text.substring(range.start, range.end);
            }
        }
        usedCode += '\n/* END FILE '+ files[file].url+ ' */\n\n';
    }

    criticalElement.value = usedCode;
}
critical();
console.log(criticalElement.value);
