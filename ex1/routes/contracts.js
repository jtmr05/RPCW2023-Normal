const express = require('express');
const router = express.Router();
const Contract = require('../controllers/contract');

router.get('/', (req, res) => {
    if(req.query.year){
        Contract.getByYear(req.query.year)
            .then(
                u => res.jsonp(u)
            )
            .catch(
                err => res.jsonp({ error: err, message: 'Error obtaining list'})
            )
    }
    else if(req.query.inst) {
        Contract.getByInst(req.query.inst)
            .then(
                u => res.jsonp(u)
            )
            .catch(
                err => res.jsonp({ error: err, message: 'Error obtaining list'})
            )
    }
    else {
        Contract.list() 
            .then(
                u => res.jsonp(u)
            )
            .catch(
                err => res.jsonp({ error: err, message: 'Error obtaining list'})
            )
    }
});

router.get('/courses', (req, res) => {
    Contract.
        getCourses()
        .then(c => res.jsonp(c))
        .catch(
            err => res.jsonp({ error: err, message: 'Error obtaining courses list'})
        )
});

router.get('/institutions', (req, res) => {
    Contract.
        getInsts()
        .then(c => res.jsonp(c))
        .catch(
            err => res.jsonp({ error: err, message: 'Error obtaining courses list'})
        )
});

router.get('/:id', (req, res) => {
    Contract
        .getOne(req.params.id)
        .then(c => res.jsonp(c))
        .catch(
            err => res.jsonp({ error: err, message: 'Error obtaining contract'})
        )
});

router.post('/', (req, res) => {
    Contract.
        addOne(req.body)
        .then(c => res.status(201).jsonp(c))
        .catch(
            err => res.jsonp({ error: err, message: 'Error adding'})
        )
});

router.delete('/:id', (req, res) => {
    Contract.
        deleteOne(req.params.id)
        .then(c => res.status(204).jsonp(c))
        .catch(
            err => res.jsonp({ error: err, message: 'Error deleting'})
        )
});

module.exports = router;

