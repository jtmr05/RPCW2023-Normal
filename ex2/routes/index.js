var express = require('express');
var router = express.Router();
const Contract = require('../controllers/contract');

/* GET home page. */
router.get('/', function(req, res, next) {
    const d = new Date().toISOString().substring(0, 16)

    Contract
        .contractsList()
        .then(
            cs => res.render('index', { contracts: cs, d: d })
        )
        .catch(
            err => res.render('error', { error: err })
        )
});

router.get('/:id', function(req, res, next) {
    const d = new Date().toISOString().substring(0, 16)

    Contract
        .getContract(req.params.id)
        .then(
            c => res.render('contract', { c: c, d: d })
        )
        .catch(
            err => res.render('error', { error: err })
        )
});

router.get('/inst/:id', function(req, res, next) {
    const d = new Date().toISOString().substring(0, 16)

    Contract
        .getInst(req.params.id)
        .then(
            cs => {
                console.dir(cs[0]);
                const name = cs[0].NomeInstituicao;
                const nipc = cs[0].NIPCInstituicao;
                res.render('inst', { contracts: cs, d: d, nipc: nipc, name: name })
            }
        )
        .catch(
            err => res.render('error', { error: err })
        )
});

module.exports = router;
