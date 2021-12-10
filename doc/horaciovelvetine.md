## self.Documentation
This repository also contains a functioning Rails App that I use for both my web presence, and some applications that I am developing or have built and use every day as a part of my life as a developer. That being said, this repository is also my named repository and displays the ReadMe.md at the top of my GitHub profile page. In order to allow that to be brief and contain the relevant info for my github, the actual documentation for my own website will be living here. 

## Usage

Fork and clone to run locally, this is currently in develop and not deployed to heroke. Though that is the future intention. 
1) Run (parent dir): Should create a PostgreSql database locally to use
    rails db:create 
2) Run: To setup the necasary tables
    rails db:migrate
3) Run: To add seeded data where necasary
    rails db:seed 
4) Run: To begin the developement server locally
    rails server <-or-> rails s

## Notes Etc