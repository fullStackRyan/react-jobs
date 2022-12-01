const mongoose = require('mongoose')

const jobPostSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    jobTitle: {
      type: String,
      required: true,
      enum: ['React Developer'],
    },
    companyName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, 'Please enter a description of the issue'],
    },
    salary: {
      type: Number,
      required: [true, 'Please select a product'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Job', jobPostSchema)
