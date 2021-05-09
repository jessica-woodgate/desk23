# Instructions to run the site

1. From within the "Website" folder, run *docker-compose up --build*.
2. Ensure your line endings for the following files are correct with respect to your system (LF for linux and CRLF for windows): *wait-for.sh*, *index.html* and *docker.compose.yml*.
3. Please install angular materials if you have not already through: *ng add @angular/material* or *ng add @angular/cdk*.
4. When the website is running, if you are running it for the first time you will need to seed the database. This can be done by running *node seed.js* from within the node container CLI.
