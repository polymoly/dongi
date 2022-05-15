import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  buddies: [
    {
      name: String,
      costs: [
        {
          description: {
            type: String,
            required: true,
          },
          amount: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
});

export default mongoose.model("Buddies", Schema);
