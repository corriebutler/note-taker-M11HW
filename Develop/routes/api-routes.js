const path = require('path');
const router = require('express').Router();

// Get request to pull the notes from the database
router.get('/notes', (req, res) => {

    res.json(notes);
});

// Post request to post notes
router.post('/notes', (req, res) => {
    
});

module.exports = router;