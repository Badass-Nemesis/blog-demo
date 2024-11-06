const db = require('../db');

// create a new user
const createUser = (req, res) => {
  const { username, email, password } = req.body;
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  
  db.execute(query, [username, email, password], (err, result) => {
    if (err) {
      console.error('Error adding user:', err);
      res.status(500).send({ message: 'Error adding user' });
    } else {
      res.status(200).send({ message: 'User added successfully' });
    }
  });
};

// get all users
const getAllUsers = (req, res) => {
  const query = 'SELECT * FROM users';
  
  db.execute(query, (err, results) => {
    if (err) {
      console.error('Error retrieving users:', err);
      res.status(500).send({ message: 'Error retrieving users' });
    } else {
      res.status(200).send(results);
    }
  });
};

// get user details
const getUserDetails = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM users WHERE id = ?';
  
  db.execute(query, [id], (err, result) => {
    if (err) {
      console.error('Error retrieving user details:', err);
      res.status(500).send({ message: 'Error retrieving user details' });
    } else {
      res.status(200).send(result);
    }
  });
};

// update a user
const updateUser = (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  const query = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';
  
  db.execute(query, [username, email, password, id], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).send({ message: 'Error updating user' });
    } else {
      res.status(200).send({ message: 'User updated successfully' });
    }
  });
};

// delete a user
const deleteUser = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  
  db.execute(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.status(500).send({ message: 'Error deleting user' });
    } else {
      res.status(200).send({ message: 'User deleted successfully' });
    }
  });
};

module.exports = { createUser, getAllUsers, getUserDetails, updateUser, deleteUser };
