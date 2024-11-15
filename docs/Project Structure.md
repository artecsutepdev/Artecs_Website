# Project Structure
## index.html
Only members who're allowed to make changes here are officers and project leads (with content approved by officers). The structure that must be followed is:
```html
<article>
    <h2>Article name</h2>
    <div id="art_number">
        <img src="article_img" alt="article_img">
        <p>Article content</p>
    </div>
</article>
```
If you wish to copy an article number's style, just replace `art_number` for the article number you wish to have it styled as (eg. you want it styled like `art1`, you change your new article's `div` id to `art1`). If you want to create  your own style, inside `style.scss`, add it here:
```scss
main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70vw;
    article{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2{
            font-size: 1.6em;
            margin: 0;
        }

        #art1{
            /*Code for article type 1*/
        }

        /*Your article code*/
        #myarticle{
            /*Your custom article style*/
        }
    }
}
```
## Officers.html
You do not need to modify styling or scripts. Here we just need to update the `officers.json` file with any new officer information. Please follow the format for each entry:
```json
{
    "position":"President",
    "name": "Isaac Gabriel Alonso",
    "email": "sample@email.com",
    "picture":"imagelink"
}
```

## Events.html
Same as with [officers](#officershtml), just modify events.json in the following way for a new entry:
```json
{
    "eventname": "Event 1",
    "eventdate": "2021-01-01",
    "eventtime": "12:00",
    "eventlocation": "Location 1",
    "eventimage": "image1.jpg",
    "eventdescription": "Description 1"
}
```

### Projects.html
Similar to [officers](#officershtml), we just update the `projects.json` with an entry like this:
```json
[
    {
        "projectname": "Project 1",
        "projectdate": "2021-01-01",
        "projectimages": ["image1.jpg","image2.jpg"],
        "projectdescription": "Description 1",
        "projectupdates": [
            {
                "update": "Update 1",
                "updatedate": "2021-01-01",
                "udatedescription": "Update Description 1"
            }
        ]
    }
]
```
Notice that you can add multuple events. Just add to the `projectupdates` array an entry with the details:
```json
{
    "update": "Update 1",
    "updatedate": "2021-01-01",
    "udatedescription": "Update Description 1"
}
```
## Contact.html
**No modifications required**, see [scripts](#scripts).

## Styling
- All styling is to be done in SASS (.scss files), since it allows the nesting of html selectors for easier development.
- All styling files must be done in the [style](../style/) directory.
- If you're creating styling for a particular page, create  that page's `.scss` file.
- All element names and ID's must not conflict with [style.scss](../style/style.scss) or any other pages. Use nesting in divs if needed.

## Scripts
- All scripts must go under the [scripts](../scripts/) directory. Please don't forget to include your file in your HTML file as well
- For `events.js`, `officers.js`, and `projects.js` it just extracts information from their respective json files to render it on html, so there's no need for modification, just need for update in their respective file
- For `contact.js`, the only modification necessary might be the `API key`, but appart from that, nothing else. This just sends via `SMTP.js` an email to `contact@artecs.org` and the users email.
- General scripts are mainly for style purposes.

[Go to index](../README.md)

