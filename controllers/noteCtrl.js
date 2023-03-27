const Notes = require('../models/nodeModel');
const ObjectID = require('mongodb').ObjectId;


const noteCtrl = {
  getNotes: async (req, res) => {
    try {
      Notes.find()
        .then(foundNotes => res.json(foundNotes));
    }
    catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createNotes: async (req, res) => {
    try {
      const { title, content, date } = req.body;
      const newNote = new Notes({
        title,
        content,
        date
      });
      await newNote.save();
      res.json('Created a Note');
    } 
    catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteNote: async (req, res) => {
    try {
      await Notes.findByIdAndDelete(req.params.id);
      res.json({msg: "Deleted a Note"});
    }
    catch (err) {
      return res.status(500).json({msg: err.message});
    }
  },
  updateNote: async (req, res) => {
    try {
      const {title, content, date} = req.body;
      await Notes.findByIdAndUpdate({_id: new ObjectID(req.params.id)}, {
        title,
        content,
        date
      });
      res.json({msg: "Updated a Note"});
    }
    catch (err) {
      return res.status(500).json({msg: err.message});
    }
  },
  getNote: async (req, res) => {
    try {
      const note = await Notes.findById(req.params.id);
      res.json(note);
    }
    catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = noteCtrl;
