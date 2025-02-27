// Toggle the dropdown menu with fun animation
document.querySelector('.dropdown-btn').addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('show');
});

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dd => dd.classList.remove('show'));
    }
};
