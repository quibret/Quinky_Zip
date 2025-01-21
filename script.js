window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const nextText = document.getElementById('nextText');

    // Check if the header is no longer in the viewport
    if (header.getBoundingClientRect().bottom <= 0) {
        nextText.style.opacity = 1; // Make the second text visible
    } else {
        nextText.style.opacity = 0; // Keep the second text hidden
    }
});
