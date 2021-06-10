# Welcome to Patient Zero's Cheeseria Coding Challenge

## Overview

The Coding Challenge is broken into parts for showcasing the developers abilities and methodology. 

1. Setup Project with React TS, Express Ts and implement Dockerfile and docker-compose.yml to containerize Front End and Back End
2. Create CRUD functionality for retrieving, updating and deleting cheese and purchases & Include Swagger to Document and visualize the API endpoints
3. Include SQL database into the project and create necessary tables
4. Implement Jest for unit testing
5. Finalize UI/UX of project 
#### Optional
6. Write Cypress tests for functionality
7. Dockerize Cypress
8. Setup CI with Github Actions and Docker
9. Set CD with Docker Hub

Some parts of the project are cloned from [PZ-Coding Junior Coding Challenge](https://github.com/PatientZero-AU/pz-cheeseria-juniors) as a boilerplate for the project, as the project requires React and NodeJS with a UI design for presenting cheeses and the Junior Coding Challenge encompasses majority of these parts. 

| "Work Smart not Hard!"


## Tools and Framework
Front End:
- React Typescript
- Cypress
- Docker

Back End:
- Express TS
- PostSQL
- Swagger UI
- Jest
- Docker

## Commands

up:dev ->
    docker-compose up --build

up:prod ->
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

down ->
    docker-compose down

test ->
    cd server & jest

# URL's

FrontEnd: http://localhost:3000/

BackEnd: http://localhost:9000/

Swagger-UI: http://localhost:9000/docs/#/