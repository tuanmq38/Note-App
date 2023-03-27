const express = require('express');
const router = express.Router();
const noteCtrl = require('../controllers/noteCtrl');

router.route('/')
    .get(noteCtrl.getNotes)
    .post(noteCtrl.createNotes)

router.route('/:id')
    .get(noteCtrl.getNote)
    .delete(noteCtrl.deleteNote)
    .put(noteCtrl.updateNote)

module.exports = router;