const db = require('../db');

// create a new post
const createPost = (req, res) => {
  const { title, content, publish_time } = req.body;
  const query = 'INSERT INTO posts (title, content, publish_time) VALUES (?, ?, ?)';
  
  db.execute(query, [title, content, publish_time], (err, result) => {
    if (err) {
      console.error('Error scheduling post:', err);
      res.status(500).send({ message: 'Error scheduling post' });
    } else {
      res.status(200).send({ message: 'Post scheduled successfully' });
    }
  });
};

// get all posts
const getAllPosts = (req, res) => {
  const query = 'SELECT * FROM posts';
  
  db.execute(query, (err, results) => {
    if (err) {
      console.error('Error retrieving posts:', err);
      res.status(500).send({ message: 'Error retrieving posts' });
    } else {
      res.status(200).send(results);
    }
  });
};

// update a post
const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content, publish_time } = req.body;
  const query = 'UPDATE posts SET title = ?, content = ?, publish_time = ? WHERE id = ?';
  
  db.execute(query, [title, content, publish_time, id], (err, result) => {
    if (err) {
      console.error('Error updating post:', err);
      res.status(500).send({ message: 'Error updating post' });
    } else {
      res.status(200).send({ message: 'Post updated successfully' });
    }
  });
};

// delete a post
const deletePost = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM posts WHERE id = ?';
  
  db.execute(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting post:', err);
      res.status(500).send({ message: 'Error deleting post' });
    } else {
      res.status(200).send({ message: 'Post deleted successfully' });
    }
  });
};

module.exports = { createPost, getAllPosts, updatePost, deletePost };