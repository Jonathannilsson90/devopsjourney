# DevOps Docker and Test Experimentation

This repository is dedicated to experimenting with **DevOps**, **Docker**, and **testing** in the context of modern web development. The goal is to explore the integration of containerization, automation, and testing to improve development workflows, scalability, and reliability.

## Project Overview

In this project, we are experimenting with:
- **Docker**: Building and containerizing web applications to ensure consistency across development, staging, and production environments.
- **DevOps practices**: Setting up Continuous Integration (CI) and Continuous Deployment (CD) pipelines using modern tools and services.
- **Testing**: Implementing automated tests (unit for now) to ensure the stability and reliability of the application.

## Technologies Used

- **Docker**: Containerizing the application for a consistent development and production environment.
- **Vitest**: Using Vitest for unit and integration testing.
- **React**: A modern JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web applications.
- **Nginx**: Serving the built React application for production.

## Getting Started

To get started with this project, you'll need to have **Docker** installed on your local machine. Once you have Docker installed, you can build and run the application using the following commands:

### 1. Clone the Repository

```bash
git clone https://github.com/Jonathannilsson90/devopsjourney.git
cd devopsjourney
```

### 2. Build and run with Docker

```bash
docker build -t my-app .
docker run --rm -p 3000:3000 my-app
```

### 3. Running tests

```bash
npm run test
```

### CI/CD pipeline
This project includes a basic CI/CD pipeline setup with Docker. The pipeline automates testing, building, and deployment of the app to ensure consistent releases.
