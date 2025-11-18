const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

//ROUTE-1 Get all the notes using GET:http://Localhost:5000/api/notes/fetchallnotes Login Required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.send(notes);
});

//ROUTE-2 Add a new note using POST:http://Localhost:5000/api/notes/addnote Login Required
router.post('/addnote',
    [body('title', 'Please enter a valid title').isLength({ min: 3 }),
    body('description', 'Please enter a valid description').isLength({ min: 5 }),
    body('tag', 'Please enter a valid tag').isLength({ min: 3 })
    ], fetchuser, async (req, res) => {
        let { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        await note.save();
        res.send(note);
    });

//ROUTE-3 Updating the existing note using PUT:http://Localhost:5000/api/notes/updatenote Login Required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    let { title, description, tag } = req.body;

    //create a new note object
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };

    //find the note that to be updated and update it
    let note = await Notes.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") };

    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.send(note);
});

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Find note by ID
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }

        // Allow only owner to delete
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        // Delete the note
        await Notes.findByIdAndDelete(req.params.id);

        res.send("Success: Note has been deleted");

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error occurred");
    }
});

module.exports = router;