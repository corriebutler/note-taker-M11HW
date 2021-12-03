const path = require('path');
const router = require('express').Router();

// Get the Index page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html'));
});

// Get the Notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/notes.html'));
});


// Catch all just in case
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html'));
});

module.exports = router;