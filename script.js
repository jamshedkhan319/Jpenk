const menuIcon = document.querySelector('.menu-icon');
const dialog = document.querySelector('.dialog');
const dialogContent = document.querySelector('.dialog-content');

// Show dialog on menu icon click
menuIcon.addEventListener('click', () => {
    dialog.style.display = 'flex';
});

// Hide dialog on clicking outside of the dialog content
dialog.addEventListener('click', (event) => {
    if (!dialogContent.contains(event.target)) {
        dialog.style.display = 'none';
    }
});
