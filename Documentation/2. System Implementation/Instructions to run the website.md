<div align = center>
  
  [<-- Back](https://github.com/jess-mw/desk23/blob/main/README.md#introduction)
  </div>

# Instructions to run the site

1. Go into the Website directory: `cd Website`.
2. Create a file called `.env` and store the following information: 
    * Hi 
4. From within the "Website" folder, run *docker-compose up --build*.
5. Ensure your line endings for the following files are correct with respect to your system (LF for linux and CRLF for windows): *wait-for.sh*, *index.html*, *Dockerfile* and *docker.compose.yml*.
6. Please install angular materials if you have not already through: *ng add @angular/material* or *ng add @angular/cdk*.
7. When the website is running, if you are running it for the first time you will need to seed the database. This can be done by running *node seed.js* from within the node container CLI.
8. Please note that the website's current version does **NOT** function as intended on Chrome browsers. This is due to videos being unable to autoplay on Chrome browsers.  
