function copyToClipboard(id) {
    var text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
 }