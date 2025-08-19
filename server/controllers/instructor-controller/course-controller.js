const {
  Course,
  Video,
  Quiz,
  Resource,
  Assessment,
  Module,
} = require("../../models/Course");
// Create Video
const createVideo = async (req, res) => {
  try {
    const video = new Video(req.body);
    const saved = await video.save();
    res.status(201).json({ success: true, data: saved });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: "Error creating video" });
  }
};

// Create Quiz
const createQuiz = async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    const saved = await quiz.save();
    res.status(201).json({ success: true, data: saved });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: "Error creating quiz" });
  }
};

// Create Resource
const createResource = async (req, res) => {
  try {
    const resource = new Resource(req.body);
    const saved = await resource.save();
    res.status(201).json({ success: true, data: saved });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: "Error creating resource" });
  }
};

// Create Assessment
const createAssessment = async (req, res) => {
  try {
    const assessment = new Assessment(req.body);
    const saved = await assessment.save();
    res.status(201).json({ success: true, data: saved });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: "Error creating assessment" });
  }
};

// Create Module
const createModule = async (req, res) => {
  try {
    const module = new Module(req.body);
    const saved = await module.save();
    res.status(201).json({ success: true, data: saved });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: "Error creating module" });
  }
};

const addNewCourse = async (req, res) => {
  try {
    const courseData = req.body;
    const newlyCreatedCourse = new Course(courseData);
    const saveCourse = await newlyCreatedCourse.save();

    if (saveCourse) {
      res.status(201).json({
        success: true,
        message: "Course saved successfully",
        data: saveCourse,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const coursesList = await Course.find({});

    res.status(200).json({
      success: true,
      data: coursesList,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getCourseDetailsByID = async (req, res) => {
  try {
    const { id } = req.params;
    const courseDetails = await Course.findById(id);

    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "Course not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: courseDetails,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const updateCourseByID = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCourseData = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      updatedCourseData,
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = {
  addNewCourse,
  getAllCourses,
  updateCourseByID,
  getCourseDetailsByID,
  createVideo,
  createQuiz,
  createResource,
  createAssessment,
  createModule,
};
