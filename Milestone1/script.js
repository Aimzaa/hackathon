// Select all elements with the 'toggle-heading' class
var toggleHeadings = document.querySelectorAll('.toggle-heading');
// Add a click event listener to each heading
toggleHeadings.forEach(function (heading) {
    heading.addEventListener('click', function () {
        // Get the next sibling element (the content div)
        var content = heading.nextElementSibling;
        // Toggle visibility by changing display style
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        }
        else {
            content.style.display = 'none';
        }
    });
});
