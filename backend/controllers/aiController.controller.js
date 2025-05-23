import { GoogleGenAI } from "@google/genai";
import {
  questionAnswerPrompt,
  conceptExplanationPrompt,
} from "../utils/prompts.utils.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Description = Generate interview questions and answers using GeminiAI
// Route       = POST /api/ai/generate/questions
// Access      = Private
export const generatedInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

    if (!role) {
      return res.status(400).json({ message: "Role is required." });
    }
    if (!experience) {
      return res
        .status(400)
        .json({ message: "Years of experience is required." });
    }
    if (!topicsToFocus) {
      return res
        .status(400)
        .json({ message: "At least one topic is required." });
    }
    if (!numberOfQuestions) {
      return res
        .status(400)
        .json({ message: "Number of questions is required." });
    }

    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions
    );

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });

    let rawText = response.text;

    // Clean JSON(Remove ```json and ``` from the begining and the end)
    const cleanedText = rawText
      .replace(/^```json\s*/, "") // Remove starting ```json
      .replace(/```$/, "") // Remove ending ```
      .trim(); // Remove extra spaces

    // Parse
    const data = JSON.parse(cleanedText);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Description = Generate explains an interview question using GeminiAI
// Route       = POST /api/ai/generate/explanations
// Access      = Private
export const generatedConceptExplanations = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
