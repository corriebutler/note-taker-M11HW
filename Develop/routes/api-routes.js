const path = require('path');
const db = require('../db/db.json');
const router = require('express').Router();
const fs = require('fs');

// Get request to pull the notes from the database
router.get('/notes', (req, res) => {
    res.json(db);
});

// Post request to post notes
router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    const newNote = { title, text, id:Math.floor(Math.random()* 1000) };

    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});

// Delete request to delete notes
router.delete('/notes/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const updatedDb = db.filter(note => note.id !== id);
    
    fs.writeFileSync('db/db.json', JSON.stringify(updatedDb));
    res.json(updatedDb);
});

module.exports = router;