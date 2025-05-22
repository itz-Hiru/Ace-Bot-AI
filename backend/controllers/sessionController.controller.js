const Session = require("../models/session.model");
const Questions = require("../models/questions.model");

// Description = Create a new session and linked questions
// Route       = POST /api/session/create
// Access      = Private
const createSession = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, description, questions } =
      req.body;
    const userId = req.user._id; // Asssuming you have a middleware setting req.user

    const session = await Session.create({
      user: userId,
      role,
      experience,
      topicsToFocus,
      description,
    });

    const questionDocuments = await Promise.all(
      questions.map(async (q) => {
        const question = await Questions.create({
          session: session._id,
          question: q.question,
          answer: q.answer,
        });
        return question._id;
      })
    );
    session.questions = questionDocuments;

    await session.save();
    res.status(200).json({ success: true, session });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Description = Get all sessions for logged-in user
// Route       = GET /api/sessions/my/sessions
// Access      = Private
const getMySessions = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .populate("questions");
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Description = Get a session by session id with populated questions
// Route       = GET /api/session/:id
// Access      = Private
const getSessionById = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Description = Delete an existing Session with its questions
// Route       = DELETE /api/session/delete/:id
// Access      = Private
const deleteSession = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  createSession,
  getMySessions,
  getSessionById,
  deleteSession,
};
