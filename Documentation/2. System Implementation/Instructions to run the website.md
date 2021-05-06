# Instructions to run the site

1. From within the "Website" folder, run *docker-compose up --build*.
2. If errors occur such as a node 127 error, try changing the line endings of wait-for.sh, index.html and docker.compose.yml to *LF* instead of *CRLF*.
3. If this does not work still try running *ng add @angular/material* or *ng add @angular/cdk*.
4. When the website is running, if you are running it for the first time you will need to seed the database. This can be done by running *node seed.js* from within the node container CLI.
