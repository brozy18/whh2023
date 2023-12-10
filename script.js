const codeSnippets = [
    "function greet() {\n",
    "    console.log('Hello, world!');\n",
    "}\n",
    "\n",
    "for (let i = 0; i < 5; i++) {\n",
    "    console.log('Line ' + i);\n",
    "}\n",
    "\n",
    "function add(a, b) {\n",
    "    return a + b;\n",
    "}\n",
    "\n",
    "let result = add(3, 7);\n",
    "console.log('Result:', result);\n",
];

const codeDisplay = document.getElementById('code-display');

function simulateTyping(code, index, callback) {
    if (index < code.length) {
        codeDisplay.textContent += code[index];
        setTimeout(() => simulateTyping(code, index + 1, callback), 13); // Adjust the typing speed
    } else {
        setTimeout(callback, 100); // Adjust the delay between snippets
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
