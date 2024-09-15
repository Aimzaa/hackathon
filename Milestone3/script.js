var _a;
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
//Element Listing
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //Type Assertion
    //Ger refrences to from elements using their IDs
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //Check if all form elements are present
    if (profilePictureInput && nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // profile picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //Create Resume Output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n    <p><strong>Full Name:</strong> ").concat(name_1, " </p>\n    <p><strong>Email Address:</strong> ").concat(email, " </p>\n    <p><strong>Contact Number:</strong> ").concat(contact, " </p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n     <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n     <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
        //Display the resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
