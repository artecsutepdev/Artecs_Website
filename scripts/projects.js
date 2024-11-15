const container = document.getElementById('container');

fetch("../data/projects.json").then(response => response.json()).then(data => {
  data.forEach(project => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');

    /*Project name*/
    const projectName = document.createElement('h3');
    projectName.textContent = project.projectname;
    projectContainer.appendChild(projectName);

    const projectImagesContainer = document.createElement('div');
    projectImagesContainer.classList.add('project-images');
    
    const images = project.projectimages;
    let currentIndex = 0;
    
    /* Display the first image */
    const currentImage = document.createElement('img');
    currentImage.src = images[currentIndex];
    
    /* Navigation buttons */
    const buttons = [document.createElement('button'), document.createElement('button')];
    buttons[0].id = project.projectname + 'Prev';
    buttons[0].textContent = '<';
    buttons[1].id = project.projectname + 'Next';
    buttons[1].textContent = '>';
    
    /* Button click event handlers */
    buttons[0].addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      currentImage.src = images[currentIndex];
    });
    
    buttons[1].addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      currentImage.src = images[currentIndex];
    });
    
    /* Append elements */
    projectImagesContainer.appendChild(buttons[0]);
    projectImagesContainer.appendChild(currentImage);
    projectImagesContainer.appendChild(buttons[1]);
    projectContainer.appendChild(projectImagesContainer);

    /*Project start date*/
    const projectStartDate = document.createElement('p');
    projectStartDate.classList.add('project-start-date');
    projectStartDate.innerHTML = '<strong>Start date:</strong> ' + project.projectdate;
    projectContainer.appendChild(projectStartDate);
    
    /*Project contact*/
    const projectContact = document.createElement('p');
    projectContact.classList.add('project-contact');
    projectContactLink = document.createElement('a');
    projectContact.innerHTML = '<strong>Contact:</strong>:';
    projectContactLink.href = 'mailto:' + project.projectcontact;
    projectContactLink.textContent = project.projectcontact;
    projectContact.appendChild(projectContactLink);
    projectContainer.appendChild(projectContact);

    /*Project description*/
    const projectDescription = document.createElement('p');
    projectDescription.classList.add('project-description');
    projectDescription.textContent = project.projectdescription;
    projectContainer.appendChild(projectDescription);

    /*Project updates*/
    const projectUpdates = document.createElement('div');
    projectUpdates.classList.add('project-updates');
    const updatesTitle = document.createElement('h4');
    updatesTitle.textContent = 'Updates';
    projectUpdates.appendChild(updatesTitle);
    const updates = project.projectupdates;
    const updatesList = document.createElement('ul');
    updates.forEach(update => {
      const updateItem = document.createElement('li');
      updateItem.innerHTML = `<strong>${update.updatename}</strong> <br /> <strong>${update.updatedate}</strong> <br /> ${update.updatedescription}`;
      updatesList.appendChild(updateItem);
    });
    projectUpdates.appendChild(updatesList);
    projectContainer.appendChild(projectUpdates);

    container.appendChild(projectContainer);
  });
}).catch(error => console.error('Error fetching the JSON data:', error));