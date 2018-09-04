const express = require('express'),
    router = express.Router(),
    models = require('../models/')
    ;
job = models.job
reqs = models.requisition
inv = models.invoice
// All Jobs GET Route
router.route('/')
    .get((req, res) => {
        job.findAll({}
        )
            .then((job) => {
                res.status(200).json({
                    data: job
                })
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    });
// Single Job Get Route

router.route('/:id')
    .get((req, res) => {
        job.find({
            where: {
            proj_id: req.params.id
            },
            include: [
                {model: reqs},
                {model: inv}
            ]
        })
            .then((job) => {
                if (!job) {
                    res.status(404).json({message: `Job ID: ${id} not found!` })
                }
                res.status(200).json({
                    data: job
                })
            })
            .catch((err) => {
                res.status(500).json({message: `${err}`});
            })
    });

    router.route('/number/:id')
    .get((req, res) => {
        job.findAll({
            where: {
            job_num: req.params.id
            }
        })
            .then((job) => {
                if (!job) {
                    res.status(404).json({message: `Job Number: ${id} not found!` })
                }
                res.status(200).json({
                    data: job
                })
            })
            .catch((err) => {
                res.status(500).json({message: `${err}`});
            })
    });
    module.exports = router;