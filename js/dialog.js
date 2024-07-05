// Show dialog box on page load
window.onload = function() {
    document.getElementById('dialog-box').style.display = 'flex';
};

// Close dialog box
function closeDialog() {
    document.getElementById('dialog-box').style.display = 'none';
}
