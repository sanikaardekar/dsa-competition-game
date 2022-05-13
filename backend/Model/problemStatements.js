import pkg from 'mongoose';
const { Schema, model } = pkg;

const problemStatementSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  inputs: [
    {
      type: String,
      required: true,
    },
  ],
  outputs: [
    {
      type: String,
      required: true,
    },
  ],
  testcases: [
    {
      type: String,
      required: true,
    },
  ],
  difficulty: {
    type: String,
    required: true,
    enum: ['easy', 'hard', 'medium'],
  },
});

const problemStatement = model('ProblemStatement', problemStatementSchema);
export default problemStatement;
