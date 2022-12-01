const express = require('express')
const router = express.Router()
const {
  getJobs,
  getJob,
  createJobPost,
  deleteJobPost,
  updateJobPost,
} = require('../controllers/jobPostController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getJobs).post(protect, createJobPost)

router
  .route('/:id')
  .get(protect, getJob)
  .delete(protect, deleteJobPost)
  .put(protect, updateJobPost)

module.exports = router
