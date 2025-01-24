# Library Management System

A **Library Management System** built with **Spring Boot** for the backend, **MongoDB** for the database, and **React** with **Material UI** for the frontend. This system allows users to manage and interact with a library's book collection, providing features such as adding, updating, deleting, and viewing books.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Add a Book**: Allows users to add a new book to the library database.
- **View Books**: Displays all books in the library with pagination.
- **Update Book**: Edit the details of an existing book.
- **Delete Book**: Removes a book from the library.
- **CORS Handling**: Ensures that the frontend and backend can communicate even when served from different origins.

---

## Technologies Used
- **Backend**:
  - Java
  - Spring Boot
  - MongoDB (NoSQL database)
  - Spring Data MongoDB
  - Spring Web
  - CORS Configuration

- **Frontend**:
  - React
  - Material UI (for UI components)
  - Axios (for making API requests)
  - Vite (for faster development build)

- **Other**:
  - GitHub for version control
  - Postman (for testing API requests)

---

## Getting Started

To run the project locally, you will need to set up both the backend (Spring Boot) and frontend (React) applications.

### Prerequisites

- [Java 17 or higher](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use MongoDB Atlas)
- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

---

### Backend Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/edigapavankumar/Library_Management_System.git
   cd Library_Management_System
   cd backend
