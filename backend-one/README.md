# Backend-One - Excel Service

## Description
This backend service is responsible for reading and writing data to the Excel file (.xlsx).

## Technologies Used
- Node.js
- Express.js
- xlsx package
- CORS

## Features
- GET `/api/assignment1` → Returns Excel data as JSON
- POST `/api/assignment1/update` → Updates specific cells in Excel (Answer & Resources columns)


## How to Run
1. Open terminal in this folder
2. Run `npm install`
3. Run `node server.js`
4. Service runs on **http://localhost:3001**

## Purpose
Demonstrates communication between Frontend and Backend using REST APIs, and reading/writing Excel files.

