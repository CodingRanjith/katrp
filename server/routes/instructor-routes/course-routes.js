const express = require("express");
const {
  addNewCourse,
  getAllCourses,
  getCourseDetailsByID,
  updateCourseByID,
  createVideo,
  createQuiz,
  createResource,
  createAssessment,
  createModule,
} = require("../../controllers/instructor-controller/course-controller");
const router = express.Router();


// Course CRUD
router.post("/add", addNewCourse);
router.get("/get", getAllCourses);
router.get("/get/details/:id", getCourseDetailsByID);
router.put("/update/:id", updateCourseByID);

// Curriculum item creation
router.post("/video", createVideo);
router.post("/quiz", createQuiz);
router.post("/resource", createResource);
router.post("/assessment", createAssessment);
router.post("/module", createModule);

module.exports = router;
