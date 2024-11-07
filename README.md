# blog-demo

A blog website made for SciAstra internship assignment.

# My Blog Project

This project is a full-stack application that features a backend server using Node.js and MySQL, and a frontend built with HTML, CSS, and JavaScript. 

## 🎥 Demo Video

Check out the app in action:
[![Demo Video](YTlink/maxresdefault.jpg)](YTlink)

## 📁 Project Structure

### Backend
- **Location**: `backend` folder
- **Technologies**: Node.js, MySQL
- **Description**: Handles the server-side logic and database management.

### Frontend
- **Location**: `frontend` folder
- **Technologies**: HTML, CSS, JS
- **Description**: Manages the client-side of the application, including user interface and interactions.


## ✨ Features

- A responsive user interface using HTML, CSS, and JavaScript.
- A dynamic homepage displaying real-time discounted courses.
- **Admin Dashboard**:
  - A blog section for the admin to upload and manage content.
  - A post section for the admin to upload and manage content.
  - A user section to check all users and delete them.
  - Admin dashboard has to be manually accessed by going to `<frontend_url>/Frontend/html/admin.html` (usually it is `http://127.0.0.1:5500/Frontend/html/admin.html`).
- Implemented a scheduling feature to set specific publish times for each post.
- Allowed users to browse and select courses (without login).
- Developed a flow that redirects to a dummy payment page after course selection (login required).
- Implemented a dummy two-step verification for payment security.
- Provided multiple dummy payment options, including credit card, debit card, and UPI.
- Used MySQL for database management, setting up tables for blog content, course details, user transactions, and scheduling.
- Ensured seamless frontend-backend connection for real-time data updates.
- The backend port must be 3000 as in HTML, CSS, JS frontend we can't use .env for variables.
- Using jwt (JsonWebToken) for user authorization.

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

| Bug/To-Do | Description |
|-----------|-------------|
| JSON body token sending | JSON body token sending implemented instead of cookie token due to some code issues. |
| Debugging statements | There are many debugging console.log statements that need to be removed. |
| Code refactoring | Code refactoring is needed for better structure and readability. |
| Errors on logout page | Errors are showing for courses and posts on the logout page. |
| Admin page redirect | Automatic redirect to the admin page is not implemented. |
| Foreign key issue | Payments table is not taking payments_course_id as foreign key to courses table. |
| Unused APIs | Some APIs are not being used and should be removed. |
| Localhost URL in env | Didn't put the localhost url in env for easy change. |
| CORS error | CORS (cross-origin resource sharing) causing error for unknown reason. |


## 📬 Feedback

For any questions or feedback, please make a PR.
