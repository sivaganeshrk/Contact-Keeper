const express = require('express');
const router = express.Router();

// @route    GET /api/contacts
// @desc     Get all user contacts
// @access   Private
router.get('/',(req,res)=> {
    res.send('Get all user contacts')
});


// @route    POST /api/contacts
// @desc     Add a new contact
// @access   Private
router.post('/',(req,res)=> {
    res.send('Add a new contact')
});


// @route    PUT /api/contacts/:id
// @desc     Update contact
// @access   Private
router.put('/:id',(req,res)=> {
    res.send('Update contacts')
});


// @route    DELETE /api/contacts
// @desc     Delete contacts
// @access   Private
router.delete('/',(req,res)=> {
    res.send('Delete contacts')
});


module.exports = router;