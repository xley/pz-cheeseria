# Welcome to Patient Zero's Cheeseria Coding Challenge

## Overview

The Coding Challenge is broken into parts for showcasing the developers abilities and methodology. 

1. Clone exisitng project as boilerplate
2. Implement DockerFile and docker-compose.yml to containerize Front End and Back End
3. Include MySQL into the project and create necessary tables
4. Create CRUD functionality for retrieving, updating and deleting cheese and purchases
5. Implement OpenAPI and Swagger to Document and visualize the API endpoints
6. Finalize UI/UX of project 
Optional
8. Write Cypress tests for functionality
9. Dockerize Cypress
10. Setup CI with Github Actions and Docker
11. Set CD with Docker Hub

Originally cloned from [PZ-Coding Junior Coding Challenge](https://github.com/PatientZero-AU/pz-cheeseria-juniors) as a boilerplate for the project, as the project requires React and NodeJS with a UI design for presenting cheeses and the Junior Coding Challenge encompasses majority of these parts. 

| "Work Smart not Hard!"


## Tools and Framework
Front End:
- React Typescript
- Cypress Unit Tests
- Docker

Back End:
- Express TS
- Open API Documentation
- Swagger UI
- Jest Unit Tests
- Docker

## Commands

up-dev:
    docker-compose up --build

up-prod:
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

down: 
    docker-compose down
