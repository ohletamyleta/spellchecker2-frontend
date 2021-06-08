# Spell Checker
Welcome to SpellChecker, a single page application designed for players of 5th Edition Dungeons and Dragons. This project has a Rails API for the backend, and the front end is built on React JS with Redux middleware. The backend for this project can be found here: https://github.com/ohletamyleta/spellchecker2

VIDEO DEMO: https://youtu.be/9JTTu9kHhIo

BLOG LINK: https://ohletamyleta.medium.com/burnedout-readthis-stillreadthis-a01c1221f5b1?sk=e0df239d5402b5cbf1ce6789390c0109


### Installation
Clone this repository and execute:

$npm install

To install all of the necessary react packages

In the backend, execute:

$rails db:migrate 
Then:

$rails db:seed 

This is necessary to begin using the app. The app is open-sourced but uses the data provided at https://api.open5e.com/ to populate the database with the official spell information used in game (users can add their own creations to the app as well).

### Usage
This application is designed to provide information on the use of magic in the game, as well as allow the user to add their own "homebrew" creations to the database.

### Contributing
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

### License
The app is available as open source under the terms of the MIT License.
