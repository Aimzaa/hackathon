// Select all elements with the 'toggle-heading' class
const toggleHeadings = document.querySelectorAll('.toggle-heading');

// Add a click event listener to each heading
toggleHeadings.forEach((heading) => {
    heading.addEventListener('click', () => {
        // Get the next sibling element (the content div)
        const content = (heading as HTMLElement).nextElementSibling as HTMLElement;
        // Toggle visibility by changing display style
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});