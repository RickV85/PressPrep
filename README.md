# PrepPress

## Abstract

PrepPress consolidates the latest news articles from the New York Times in
an adaptive user interface that allows a user to browse the latest news
from wherever they may be. The user can quickly decide what type of
headlines that they would like to browse, view more details and then
be linked directly to the full article on New York Times.

## Deployed Application

[Click here to view the deployed PrepPress application on Vercel](https://press-prep-iheog3cfq-rickv85.vercel.app/)

## Installation

NOTE: API Key for New York Times is needed to operate. Please contact me for a key or view above deployed application.

In your terminal, run the following commands:

git clone git@github.com:RickV85/PressPrep.git

cd [directory you created it in]

npm install

npm run dev

## Build Objectives

The app must include the following for MVP:

- A list of articles
- A “detailed” view for each article (as opposed to summary/list view)
- Articles in the list must link to the detailed article view you create
- Some sort of search, filter, OR sort

## Wins

- Implemented Typescript to prevent bugs
- Added E2E testing for all user stories with Cypress
- Completed build to match Figma design
- Adaptive user interface allows a user to view on mobile devices
- Added user-facing error handling for server errors and bad data

## Challenges

- Using Vite for the first time presented challenges to using .env variables
- Typescript makes development more difficult and slower but avoided use of "any" types
