# blog-demo

A blog website made for SciAstra internship assignment.

# My Blog Project

This project is a full-stack application that features a backend server using Node.js and MySQL, and a frontend built with HTML, CSS, and JavaScript. 

## 🎥 Demo Video

Check out the app in action:
[![Demo Video](YTlink/maxresdefault.jpg)](YTlink)

## 📁 Project Structure

- **Backend**: Located in the `backend` folder (Node.js and MySQL)
- **Frontend**: Located in the `frontend` folder (HTML, CSS, JS)

## 🚀 How to Start

### Backend
1. Navigate to the `backend` folder:
   ```bash
   cd backend
2. Install modules/packages:
    ```bash
    npm i
3. Start the backend server using nodemon:
    ```bash
    nodemon
### Frontend
1. Navigate to the frontend folder:
    ```bash
    cd frontend
2. Open index.html in your browser to start the application.

## 🐞 Known Bugs & To-Do List

- No checking for admin access to the admin dashboard.
- JSON body token sending implemented instead of cookie token due to some code issues.
- There are many debugging console.log statements that need to be removed.
- Code refactoring is needed for better structure and readability.
- Errors are showing for courses and posts on the logout page.
- Automatic redirect to the admin page is not implemented.
- Payments table is not taking payments_course_id as foreign key to courses table.
- Some APIs are not being used and should be removed.
- Didn't put the localhost url in env for easy change.
- CORS (cross-origin resource sharing) causing error for unknown reason.

## 📬 Feedback

For any questions or feedback, please make a PR.
