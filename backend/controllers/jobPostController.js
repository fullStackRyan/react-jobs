const asyncHandler = require('express-async-handler')

const JobPost = require('../models/JobPostModel')

// @desc    Get user jobs
// @route   GET /api/jobs
// @access  Private
const getJobs = asyncHandler(async (req, res) => {
  const jobs = await JobPost.find({ user: req.user.id })

  res.status(200).json(jobs)
})

// @desc    Get user jobs
// @route   GET /api/jobs/:id
// @access  Private
const getJob = asyncHandler(async (req, res) => {
  const job = await JobPost.findById(req.params.id)

  if (!job) {
    res.status(404)
    throw new Error('Job not found')
  }

  if (job.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  res.status(200).json(job)
})

// @desc    Create new job post
// @route   POST /api/jobs
// @access  Private
const createJobPost = asyncHandler(async (req, res) => {
  const { companyName, description, salary } = req.body

  if (!companyName || !description || !salary) {
    res.status(400)
    throw new Error('Please add a companyName, description and salary')
  }

  const jobPost = await JobPost.create({
    user: req.user.id,
    jobTitle: 'React Developer',
    companyName,
    description,
    salary,
  })

  res.status(201).json(jobPost)
})

// @desc    Delete job post
// @route   DELETE /api/jobs/:id
// @access  Private
const deleteJobPost = asyncHandler(async (req, res) => {
  const jobPost = await JobPost.findById(req.params.id)

  if (!jobPost) {
    res.status(404)
    throw new Error('Job Post not found')
  }

  if (jobPost.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  await jobPost.remove()

  res.status(200).json({ success: true })
})

// @desc    Update job post
// @route   PUT /api/jobs/:id
// @access  Private
const updateJobPost = asyncHandler(async (req, res) => {
  const jobPost = await JobPost.findById(req.params.id)

  if (!jobPost) {
    res.status(404)
    throw new Error('jobPost not found')
  }

  if (jobPost.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  const updatedjobPost = await JobPost.findByIdAndUpdate(
    req.params.id,
    req.body
  )

  res.status(200).json(updatedjobPost)
})

module.exports = {
  getJobs,
  getJob,
  createJobPost,
  deleteJobPost,
  updateJobPost,
}
