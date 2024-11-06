const db = require('../db');

// create a new course
const createCourse = (req, res) => {
    const { name, description, discount } = req.body;
    const query = 'INSERT INTO courses (name, description, discount) VALUES (?, ?, ?)';

    db.execute(query, [name, description, discount || 0], (err, result) => {
        if (err) {
            console.error('Error adding course:', err);
            res.status(500).send({ message: 'Error adding course' });
        } else {
            res.status(200).send({ message: 'Course added successfully' });
        }
    });
};

// get all courses
const getAllCourses = (req, res) => {
    const query = 'SELECT * FROM courses';

    db.execute(query, (err, results) => {
        if (err) {
            console.error('Error retrieving courses:', err);
            res.status(500).send({ message: 'Error retrieving courses' });
        } else {
            res.status(200).send(results);
        }
    });
};

// get course details
const getCourseDetails = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM courses WHERE id = ?';

    db.execute(query, [id], (err, result) => {
        if (err) {
            console.error('Error retrieving course details:', err);
            res.status(500).send({ message: 'Error retrieving course details' });
        } else {
            res.status(200).send(result);
        }
    });
};

// update a course
const updateCourse = (req, res) => {
    const { id } = req.params;
    const { name, description, discount } = req.body;
    const query = 'UPDATE courses SET name = ?, description = ?, discount = ? WHERE id = ?';

    db.execute(query, [name, description, discount || 0, id], (err, result) => {
        if (err) {
            console.error('Error updating course:', err);
            res.status(500).send({ message: 'Error updating course' });
        } else {
            res.status(200).send({ message: 'Course updated successfully' });
        }
    });
};

// delete a course
const deleteCourse = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM courses WHERE id = ?';

    db.execute(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting course:', err);
            res.status(500).send({ message: 'Error deleting course' });
        } else {
            res.status(200).send({ message: 'Course deleted successfully' });
        }
    });
};

module.exports = { createCourse, getAllCourses, getCourseDetails, updateCourse, deleteCourse };
