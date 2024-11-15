/* Get container */
const container = document.getElementById('container');

/* Get content from JSON file */
fetch("../data/officers.json").then(response => response.json()).then(data => {
    data.forEach(officer => {
        /* Create and append elements for every JSON entry */
        
        /*Position */
        const position = document.createElement('h3');
        position.textContent = officer.position;
        position.classList.add('position');
        container.appendChild(position);

        /* Officer Name */
        const officerName = document.createElement('h4');
        officerName.textContent = officer.name;
        officerName.classList.add('officername');
        container.appendChild(officerName);
        
        /* Officer Image */
        const officerImage = document.createElement('img');
        officerImage.src = officer.picture;
        officerImage.classList.add('officerimage');
        container.appendChild(officerImage);

        /* Officer Email */
        const officerEmail = document.createElement('p');
        const officerEmailText = document.createElement('a');
        officerEmailText.textContent = officer.email;
        officerEmailText.href = 'mailto:' + officer.email;
        officerEmail.appendChild(officerEmailText);
        officerEmail.classList.add('officeremail');
        container.appendChild(officerEmail);

        /* Officer github */
        const officerGithub = document.createElement('p');
        const officerGithubText = document.createElement('a');
        officerGithubText.textContent = officer.github;
        officerGithubText.href = officer.github;
        officerGithub.appendChild(officerGithubText);
        officerGithub.classList.add('officergithub');
        container.appendChild(officerGithub);
    });
}).catch(error => console.error('Error fetching the JSON data:', error));