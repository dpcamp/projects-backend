const express = require('express'),
    router = express.Router(),
    models = require('../models/')
    ;
Op = models.Sequelize.Op
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
// Single Job Get Route By ID

router.route('/id/:id')
.get((req, res) => {
    job.find({
        where: {
        id: { [Op.eq]: req.params.id }
        },
        include: [
            {model: reqs},
            {model: inv}
        ]
    })
        .then((job) => {
            if (job == null) {
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
// Single Job Get Route By proj_id

router.route('proj_id/:id')
    .get((req, res) => {
        job.findAll({
            where: {
            proj_id: { [Op.eq]: req.params.id }
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
// Jobs By job_num 
// RE-EVALUATE AFTER 2019 DATA

    router.route('/job_num/:id')
    .get((req, res) => {
        job.findAll({
            where: {
            job_num: { [Op.eq]: req.params.id }
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

// Job PUT Route by Project ID
router.route('/proj_id/:id')
  .put((req, res) => {
    const id = req.params.id;

    job.update(req.body, {
      where: {
        proj_id: { [Op.eq]: id }
      }
    })

      .then(function (pJob) {

        res.status(200).json({ 
            message: `Project ID: ${id} updated!`,
            data: job 
        });
      })
      .catch(function (err) {
        res.status(500).json({
            message: err
        });
      });
  });

// Job PUT Route by ID
router.route('/id/:id')
  .put((req, res) => {
    const id = req.params.id;

    job.update(req.body, {
      where: {
        id: { [Op.eq]: id }
      }
    })

      .then(function (pJob) {

        res.status(200).json({ 
            message: `Job ID: ${id} updated!`,
            data: pJob 
        });
      })
      .catch(function (err) {
        res.status(500).json({
            message: err
        });
      });
  });
    module.exports = router;

