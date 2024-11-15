/* Get div to append content */
const contentdiv = document.getElementById('content');

/* Get content from JSON file */
fetch("../data/events.json")
    .then(response => response.json())
    .then(data => {
        let content = data;

        /* Create and append elements for every JSON entry */
        content.forEach(event => {
            /* Title */
            const title = document.createElement('h2');
            title.textContent = event.eventname;
            title.classList.add('eventtitle');
            contentdiv.appendChild(title);

            /* Image */
            const image = document.createElement('img');
            image.src = event.eventimage;
            image.alt = event.eventname;
            image.classList.add('eventimage');
            contentdiv.appendChild(image);

            /* Date */
            const eventDate = document.createElement('p');
            eventDate.innerHTML = "<strong>Date:</strong>\t" + event.eventdate;
            eventDate.classList.add('eventdate');
            contentdiv.appendChild(eventDate);

            /* Time */
            const eventTime = document.createElement('p');
            eventTime.innerHTML = "<strong>Time:</strong>\t" + event.eventtime;
            eventTime.classList.add('eventtime');
            contentdiv.appendChild(eventTime);

            /* Location */
            const eventLocation = document.createElement('p');
            eventLocation.innerHTML = "<strong>Location:</strong>\t" + event.eventlocation;
            eventLocation.classList.add('eventlocation');
            contentdiv.appendChild(eventLocation);

            /* Description */
            const eventDescription = document.createElement('p');
            eventDescription.innerHTML = "<strong>Description:</strong>\t" + event.eventdescription;
            eventDescription.classList.add('eventdescription');
            contentdiv.appendChild(eventDescription);
        });
    })
    .catch(error => console.error('Error fetching the JSON data:', error));
