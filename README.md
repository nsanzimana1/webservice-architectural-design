# Web Services and Service-Oriented Architecture - Assignment 2

## Project Overview
This project demonstrates the concepts of **Service-Oriented Architecture (SOA)** by building a web application with **three separate services**:

- **Frontend** (Port 3000)
- **Backend-One** (Port 3001) - Excel Management Service
- **Backend-Two** (Port 3002) - Email Service

---

## Features

### ✅ Home Page
- Personal information and course reflection
- Navigation to all assignment pages

### ✅ Assignment 1
- Reads and displays data from Excel file
- Editable **Answer** and **Resources** columns using textarea
- Updates changes back to Excel file via Backend-One

### ✅ Assignment 2
- Demonstrates use of separate backend services

### ✅ Combined Page
- Sends all assignment files via email with proper renaming
- Uses Nodemailer with Gmail App Password

---

## Project Structure
WebServices-Assignment2/
├── frontend/              # Main website (EJS + Express)
├── backend-one/           # Excel Read/Write Service
├── backend-two/           # Email Service
├── shared/                # Excel file location
├── start.bat              # Easy start script
└── README.md

---

## How to Run

1. Double-click **`start.bat`** (recommended)
2. Or manually run:
   ```bash
   cd backend-one && node server.js
   cd backend-two && node server.js
   cd frontend && node server.js
   Open browser: http://localhost:3000
   Technologies Used

Backend: Node.js, Express.js
Frontend: EJS, Axios
Excel: xlsx package
Email: Nodemailer
Architecture: Service-Oriented Architecture (SOA)
Author
Nsanzimana Didier