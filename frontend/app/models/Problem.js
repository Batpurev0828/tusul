// app/models/Problem.js
import mongoose from "mongoose";

const ProblemSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  part: {
    type: Number,
    required: true,
  },
  no: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
});

// Avoid model overwrite in dev (Next.js HMR)
export default mongoose.models.Problem ||
  mongoose.model("Problem", ProblemSchema);
