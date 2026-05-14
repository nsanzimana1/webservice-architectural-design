@echo off
echo.
echo =============================================
echo    Web Services & SOA - Assignment 2
echo    Starting All Services...
echo =============================================
echo.

cd backend-one
echo Starting Backend-One (Excel Service)...
start cmd /k "node server.js"

cd ../backend-two
echo Starting Backend-Two (Email Service)...
start cmd /k "node server.js"

cd ../frontend
echo Starting Frontend...
start cmd /k "node server.js"



echo Open your browser and go to:
echo http://localhost:3000
echo.
echo =============================================
pause