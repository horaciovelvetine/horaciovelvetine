## self.Documentation

This repository also contains a functioning Rails App that I use for both my web presence, and some applications that I am developing or have built and use every day as a part of my life as a developer. That being said, this repository is also my named repository and displays the ReadMe.md at the top of my GitHub profile page. In order to allow that to be brief and contain the relevant info for my github, the actual documentation for my own website will be living here.

## Usage

Fork and clone to run locally, this is currently in develop and not deployed. Though that is the future intention.

> > Local Deploy<<

1. Run (parent dir): Should create a PostgreSql database locally to use
   rails db:create
2. Run: To setup the necasary tables
   rails db:migrate
3. Run: To add seeded data where necasary
   rails db:seed
4. In a seperate terminal in the parent directory concurrently run: to compile the JS (works better than allowing rails s to compile).
   bin/webpack-dev-server
5. Run: To begin the developement server locally
   rails server <-or-> rails s

## Colors

Original Palette :: 

UI Component Grey Palette ::
[] #221D28 <-- main content bg >
[] #464348 <-- bg grey 1 (menu bg) >
[] #5B626A <-- primary light grey (accents) >
[] #69666B <-- bg grey 2 >
[] #545055 <-- Search bg grey >

UI Accent Palette ::
[] #0C84FF <-- primary blue >
[] #FF443A <-- primary red >
[] #FF9F0B <-- tertiary orange >
[] #FEBC2E <-- minimize yellow >
[] #3F8CE6 <-- tab highlighted blue >
[X] #FFFFFF <-- pure whirte svg outline/icon>

Fonts Palette::
[] #727E87 <-- header font grey >
[] #C1BFC4 <-- secondary header font grey>
[] #F0EFF0 <-- primary content font white >
[] #858388 <-- secondary content font grey >
[] #7D7C80 <-- greyed out text ("search...") >
[] #3E9AFC <-- link font blue>

