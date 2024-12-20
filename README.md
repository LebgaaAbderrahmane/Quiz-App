# Quiz App Backend

The backend service for the **Quiz App** project, built using **Java Spring Boot** with **PostgreSQL** as the database and JWT-based authentication.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This backend manages the core functionalities of the Quiz App, including user authentication, quiz creation, AI-powered quiz generation, and social interactions. It serves as the backend service powering the app's frontend.

## Features

- **Authentication:** Secure JWT-based authentication.
- **Quiz Management:** Create, update, delete, and share quizzes.
- **AI Quiz Generation:** Generate quizzes from PDF files (planned feature).
- **User Interactions:** Rate, like, comment, and explore quizzes.
- **Role Management:** Support for 'student' and 'teacher' roles with distinct permissions.

## Tech Stack

- **Programming Language:** Java
- **Framework:** Spring Boot
- **Database:** PostgreSQL
- **Authentication:** JSON Web Tokens (JWT)
- **Other Dependencies:**
  - Spring Data JPA
  - Lombok
  - Hibernate

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/quiz-app-backend.git
   cd quiz-app-backend
   
2. **Setup the database**
- Install and configure PostgreSQL.
- Create a database:
```bash
CREATE DATABASE quiz_app;

- Update the database settings in the application.properties file:

```bash
spring.datasource.url=jdbc:postgresql://localhost:5432/quiz_app
spring.datasource.username=your-username
spring.datasource.password=your-password
spring.jpa.hibernate.ddl-auto=update

