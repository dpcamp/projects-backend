const express = require('express'),
    router = express.Router(),
    models = require('../models/')
    ;
sq = models.sequelize
Sq = models.Sequelize
Op = models.Sequelize.Op
job = models.job
reqs = models.requisition
inv = models.invoice

// Get all jobs with Budget Data
    router.route('/')
    .get((req, res) => {
        sq.query(`SELECT * FROM dbo.jobs AS A join dbo.all_budget as B on A.id = B.job_id`, {type: sq.QueryTypes.SELECT})
            .then((data) => {
                res.status(200).json({
                    data: data
                })
            })
            .catch((err) => {
                res.status(500).json({message: `${err}`});
            })
    });
// Get all jobs with Budget Data filtered by current User
    router.route('/')
    .get((req, res) => {
        sq.query(
            `SELECT * FROM dbo.jobs AS A join dbo.all_budget as B on A.proj_id = B.proj_id where A.assigned_to = :username`,
        { 
            replacements: {username: req.body.username }, 
            type: sq.QueryTypes.SELECT
        }
        )
            .then((data) => {
                res.status(200).json({
                    data: data
                })
            })
            .catch((err) => {
                res.status(500).json({message: `${err}`});
            })
    });

// All Jobs GET Route
router.route('/old')
    .get((req, res) => {
        job.findAll({
            //order: ['proj_id'],
            //include: [
            //    {model:reqs, attributes:[]},
            //{model:inv, attributes:[]}
            //            ],
            //raw:true
             }
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
        //group: ['job.id', 'job.proj_id'],
        where: {
        id: { [Op.eq]: req.params.id }
        },
        
        attributes:  [ 'proj_id'
                
            ],
        

     
        include: [
            {model: reqs},
                //where: {budget_year: 'null' || 'job.year'},
            //group: ['job.id', 'job.proj_id'],
            //attributes: [[Sq.fn('SUM', (Sq.fn('COALESCE', (Sq.col('requisitions.amount')), 0))), 'live_uncommitted']]},
            {model: inv}
        ],
        raw: true,
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

router.route('/proj_id/:id')
    .get((req, res) => {
        console.log(req.query.year)
        job.find({
            where: {
            proj_id: { [Op.eq]: req.params.id}, 
            year: {[Op.eq]: req.query.year}
            },
            include: [
                {model: reqs,
                    
                    where: {
                    [Op.or]: [
                        {budget_year: req.query.year},
                        {budget_year: null}
                        ]
                     },
                     required: false,
             },
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
    // Get All Project Budget Data
    router.route('/proj_budget/')
    .get((req, res) => {
        const projID = req.params.id
        sq.query(`getAllBudget`, {type: sq.QueryTypes.SELECT})
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
// Get Project Budget Data
    router.route('/proj_budget/:id')
    .get((req, res) => {
        const projID = req.params.id
        const projYear = req.query.year
        sq.query(`getBudget @projID = :projID, @projYear = :projYear`, { replacements: { projID: projID, projYear: projYear }, type: sq.QueryTypes.SELECT})
            .then((job) => {
                if (!job) {
                    res.status(404).json({message: `Job ID: ${id} not found!` })
                }
                res.status(200).json({
                    data: job[0]
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
// Job POST Route
router.route('/')
  .post((req, res) => {


    job.create(req.body)

      .then(function (newJob) {

        res.status(200).json({ 
            message: `Job ID: ${newJob.id} created!`,
            data: newJob 
        });
      })
      .catch(function (err) {
        res.status(500).json({
            message: err
        });
      });
  });
// Job DELETE Route by ID
router.route('/id/:id')
  .delete((req, res) => {
    const id = req.params.id;

    job.destroy(req.body, {
      where: {
        id: { [Op.eq]: id }
      }
    })

      .then(function (Job) {

        res.status(200).json({ 
            message: `${Job.job_num} deleted!`
        });
      })
      .catch(function (err) {
        res.status(500).json({
            message: err
        });
      });
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

