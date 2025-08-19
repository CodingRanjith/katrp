const mongoose = require("mongoose");



const VideoSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  description: String,
  public_id: String,
  freePreview: Boolean,
});

const QuizSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correct: Number,
});

const ResourceSchema = new mongoose.Schema({
  title: String,
  resourceUrl: String,
});

const AssessmentQuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correct: Number,
  time: Number,
});

const AssessmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructions: String,
  passPercent: Number,
  questions: [AssessmentQuestionSchema],
});

const ModuleSchema = new mongoose.Schema({
  name: String,
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
  quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
  resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
  assessments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assessment' }],
});


const CourseSchema = new mongoose.Schema({
  instructorId: String,
  instructorName: String,
  date: Date,
  title: String,
  category: String,
  level: String,
  primaryLanguage: String,
  subtitle: String,
  description: String,
  image: String,
  welcomeMessage: String,
  isFree: Boolean,
  pricing: Number,
  objectives: String,
  students: [
    {
      studentId: String,
      studentName: String,
      studentEmail: String,
      paidAmount: String,
    },
  ],
  curriculum: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
  isPublished: Boolean,
});

const Video = mongoose.model('Video', VideoSchema);
const Quiz = mongoose.model('Quiz', QuizSchema);
const Resource = mongoose.model('Resource', ResourceSchema);
const Assessment = mongoose.model('Assessment', AssessmentSchema);
const Module = mongoose.model('Module', ModuleSchema);

module.exports = {
  Course: mongoose.model('Course', CourseSchema),
  Video,
  Quiz,
  Resource,
  Assessment,
  Module,
};

module.exports = mongoose.model("Course", CourseSchema);
