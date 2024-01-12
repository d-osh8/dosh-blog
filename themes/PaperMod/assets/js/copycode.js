document.getElementById('copyButton').addEventListener('click', function() {
    // Select the text in the code container
    const codeContainer = document.getElementById('codeContainer');
    const codeText = codeContainer.querySelector('code');
    const range = document.createRange();
    range.selectNode(codeText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Deselect the text
    window.getSelection().removeAllRanges();
});
