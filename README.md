# Beamery Coding Exercise - Frontend Edition

The coding exercise is one of the stages in the Beamery interview process for engineering positions.

It is a 45-60 minute exercise where you and an engineer work as a pair writing code to solve a problem.

Similar to when you pair with a colleague, there will be a driver and a navigator. The driver will be the one at the keyboard, whilst the navigator will be making suggestions and asking questions.

You will typically play the role of driver and the Beamery engineer will be the navigator.

## Connect 4

### Introduction

Connect 4 is a grid-based game, where two players take it in turns to add tokens. The winner is whoever manages to line up 4 pieces, in any direction, first. Diagonals are allowed.

https://en.wikipedia.org/wiki/Connect_Four

An online version can be found [here](https://www.mathsisfun.com/games/connect4.html).

### Tasks

The aim is to develop an interactive version of the game which the candidate and interviewer can play together.

A minimal version of the game should support:

- a 6 x 7 grid
- players play pieces sequentially
- the game identifies winning turns and ends at that point

#### Top tips

- Don't worry, we don't expect you to complete all of the tasks within the allotted time. We're much more interested to see how you approach and break down the problem.
- Focus on creating the logic to play the game rather than UX or styling.

## Getting started

We've scaffolded a React 18 + Vite app with a simple UI to help get you started. This monorepo includes both a TypeScript and JavaScript version of the app. Feel free to choose which one you prefer.

- The JavaScript app is in the `/apps/js` folder
- The TypeScript app is in the `/apps/ts` folder

### Pre-requisites

- Node 18+

### Scripts

Run `npm install` or `yarn` in the root folder to install or dependencies

#### JavaScript Workspace

- Run `npm run test --workspace=js` or `yarn workspace js test` to run the Jest unit tests in watch mode
- Run `npm run start --workspace=js` or `yarn workspace js start` to start the application

#### TypeScript Workspace

- Run `npm run test --workspace=ts` or `yarn workspace ts test` to run the Jest unit tests in watch mode
- Run `npm run start --workspace=ts` or `yarn workspace ts start` to start the application
