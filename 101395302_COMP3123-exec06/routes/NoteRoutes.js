const express = require("express")
const noteModel = require('../models/NotesModel');
const routes = express.Router()

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
//http://localhost:8081/notes
routes.post('/notes', async (req, res) => {
    // Validate request
    try {
        if (!req.body) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        } else {
            //TODO - Write your code here to save the note
            const newNote = new noteModel({
                ...req.body
            })
            await newNote.save()
            res.status(201).send(newNote)
        }
    } catch (error) {
        res.status(500).send(error)
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
//http://localhost:8081/notes
routes.get('/notes', async (req, res) => {
    // Validate request
    try {
        const noteList = await noteModel.find({})     
        if (!noteList) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        } else {
            res.status(201).send(noteList) 
        }
    } catch (error) {
        res.status(500).send(error)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
//http://localhost:8081/notes/{noteid}
routes.get('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        //TODO - Write your code here to return onlt one note using noteid
        const noteDetails = await noteModel.findById(req.params.noteId)
        if (!noteDetails) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        } else {
            res.status(200).send(noteDetails)
        }
    } catch (error) {
        res.status(500).send(error)
    }    
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
//http://localhost:8081/notes/{noteid}
routes.put('/notes/:noteId',async (req, res) => {
    // Validate request
    try {
        //TODO - Write your code here to update the note using noteid
        const noteDetails = await noteModel.findByIdAndUpdate(req.params.noteId,
            req.body, { new: true })
        if (!noteDetails) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        } else {
            res.status(200).json(noteDetails)
        }
    } catch (error) {
        res.status(500).send(error)
    } 
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
//http://localhost:8081/notes/{noteid}
routes.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        //TODO - Write your code here to delete the note using noteid
        // const { noteId } = req.params
        const note = await noteModel.findOneAndDelete(req.params.noteId)
        if (!note) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        } else {
            res.status(204).send(note)
        }
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = routes