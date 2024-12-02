const menuIcon = document.querySelector('.menu-icon');
const dialog = document.querySelector('.dialog');
const dialogContent = document.querySelector('.dialog-content');

// Show Dialog
menuIcon.addEventListener('click', () => {
    dialog.style.display = 'flex';
});

// Close Dialog on outside click
dialog.addEventListener('click', (e) => {
    if (!dialogContent.contains(e.target)) {
        dialog.style.display = 'none';
    }
});
