# Backend-Two - Email Service

## Description
This is the second backend service responsible for sending emails with all assignment files attached.

## Technologies Used
- Node.js
- Express.js
- Nodemailer
- CORS

## Features
- POST `/api/send-email` → Sends email with 4 attachments
- Handles file renaming programmatically
- Uses Gmail with App Password for authentication

## How to Run
1. Open terminal in this folder
2. Run `npm install`
3. Run `node server.js`
4. Service runs on **http://localhost:3002**

## Important Notes
- Requires Gmail App Password (2-Step Verification must be enabled)
- Reads files from different directories (shared, frontend, backend-one)



