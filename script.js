const codeSnippets = [
    "function greet() {\n",
    "    console.log('Hello, world!');\n",
    "}\n",
];

const codeDisplay = document.getElementById('code-display');

function simulateTyping(code, index, callback) {
    if (index < code.length) {
        codeDisplay.textContent += code[index];
        setTimeout(() => simulateTyping(code, index + 1, callback), 50); // Adjust the typing speed
    } else {
        setTimeout(callback, 1000); // Adjust the delay between snippets
    }
}

function simulateCode() {
    codeDisplay.textContent = '';
    let snippetIndex = 0;

    function nextSnippet() {
        snippetIndex = (snippetIndex + 1) % codeSnippets.length;
        simulateTyping(codeSnippets[snippetIndex], 0, nextSnippet);
    }

    simulateTyping(codeSnippets[snippetIndex], 0, nextSnippet);
}

simulateCode();
