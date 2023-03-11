# Front End Development With JavaScript Presentation

This repository was made as part of a presentation going over a basic roadmap and entry guide to getting started in front end development. [This event](https://www.meetup.com/franklindevs/events/291671064/) occured on March 14, 2023, in Franklin, Tennessee as part of the [Franklin Developer Lunch & Learn](https://www.meetup.com/franklindevs/) group.

This is meant to serve as various examples of the same site built using various technologies to incrementally add more on top of the previous version. All the sites are detailed below.

## Examples Included

- HTML: This is just a barebones site with only HTML, which is used to lay out the structure of a webpage. There's no styling or functionality, so it's essentially just the "skeleton" of a site.
- CSS: This adds in CSS to the HTML site, which is a language used to add "styles" to a site and make it look pretty. This adds "muscles" to our site, but it still lacks functionality we could get from something like JavaScript. The newsletter sign-up portion is a good example of this, as it does nothing in the CSS site.
- SASS: Functionality, this is the exact same as the CSS site. Instead of CSS, this uses SASS for styling, which is essentially just CSS with more functionality.
- JavaScript: This add in JavaScript to the SASS site, which is a programming languages used to add more functionality to a website. A good way to describe it is that it adds the "brain" to a site. In this case, it adds error validation into our newsletter sign-up form, and opens up a dialog to confirm that a user has signed up. It's not actually signing up users for anything, just presenting a simple example of how JavaScript could be used.
- Vue: This takes the JavaScript site and converts it into a site built with Vue. With HTML, CSS (or SASS), and JavaScript, you'll building with raw materials. With Vue, you're building with legos. This is a more modern approach to developing a modern website.

## How To Use

In order to run this site locally on your machine, you'll need to first install [Node.js/NPM](https://nodejs.org/en/). I recommend you install the LTS version. After that, you'll need to use a terminal on your machine to run a development server, which allows you to see your project in a browser and update it as you change your code.

To do this, you have to open up a terminal and move into the project folder. In this terminal, you'll need to type `cd PROJECT_FOLDER_PATH` to move into the project folder.

- If you're on a Mac, you can open up the `Terminal` application to do this.
- For Windows, you can open the `Command Prompt` application.

From there, make sure you install all third party packages by running `npm install` or `npm i`. This will install all libraries listed in `package.json` under `dependencies` and `devDependencies`

Once this is done, you can then run various scripts to start a dev server. Each site has a corresponding command. All of these scripts are defined in `package.json` under `scripts`.

- HTML: `npm run html`
- CSS: `npm run css`
- SASS: `npm run sass`
- JavaScript: `npm run js`
- Vue: `npm run vue`

## Event Details

How do you make an interactive website? We'll be discussing front-end development and how to get started using JavaScript. Topics included are technologies, concepts, and a roadmap of how to start and where to go once you've learned the fundamentals. Additionally, we'll provide the resources you need to learn more after this talk.

## Presenter

Kaleb Dykema is a former musician and audio engineer turned front-end engineer. He specializes in technologies such as Vue, React, Webpack, and more. In his free time, he enjoys playing video games with his fiancé and building servers for personal use. Kaleb is a front-end engineer at QOMPLX, a cybersecurity SaaS company. Reach Kaleb on LinkedIn at https://www.linkedin.com/in/kalebdykema/.
