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

//Element Listing
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    //Type Assertion
    //Ger refrences to from elements using their IDs
    

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;



    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    //Check if all form elements are present
if(profilePictureInput && nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement) {
    const name = nameElement.value;
    const email = emailElement.value;
    const contact = contactElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;


    // profile picture elements
    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile? URL.createObjectURL(profilePictureFile) : '';





    //Create Resume Output
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
    <p><strong>Full Name:</strong> <span id = "edit-name" class="editable"> ${name} </span> </p>
    <p><strong>Email Address:</strong> <span id = "edit-email" class="editable"> ${email} </span> </p>
    <p><strong>Contact Number:</strong> <span id = "edit-contact" class="editable"> ${contact} </span> </p>

    <h3>Education</h3>
    <p id = "edit-education" class="editable">${education}</p>

     <h3>Experience</h3>
    <p id = "edit-experience" class="editable">${experience}</p>

     <h3>Skills</h3>
    <p id = "edit-skills" class="editable">${skills}</p>
    `;




    //Display the resume output
    const resumeOutputElement = document.getElementById('resumeOutput')
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;
    
    }makeEditable();
    } else {
        console.error('one or more output elements are missing');
  }  
});

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable'); 
    editableElements.forEach(element =>{
        element.addEventListener('click' , function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "" ;

            //replace content
            if(currentElement.tagName ==="P" || currentElement.tagName === 'SPAN'){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing-input')

                

                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove() 
                })


                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
}