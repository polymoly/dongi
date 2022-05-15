import Buddies from "../models/Buddies.js";
import { statusCodes } from "../constants/statusCodes.js";

export const createBuddy = async (req, res) => {
  const existsBuddy = await Buddies.findOne().where({ id: req.params.id });

  if (existsBuddy) {
    try {
      const updatedBuddy = await Buddies.findByIdAndUpdate(
        existsBuddy._id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(statusCodes.SUCCESS).json(updatedBuddy);
    } catch (error) {
      res.status(statusCodes.SERVER_ERROR).json(error);
    }
    return;
  }

  const buddies = new Buddies({ ...req.body, id: req.params.id });
  try {
    const savedBuddies = await buddies.save();
    res.status(statusCodes.SUCCESS).json(savedBuddies);
  } catch (error) {
    res.status(statusCodes.SERVER_ERROR).json(error);
  }
};

export const getBuddy = async (req, res) => {
  try {
    const buddy = await Buddies.findOne().where({ id: req.params.id });
    if (buddy) {
      res.status(statusCodes.SUCCESS).json(buddy);
    } else {
      res.status(statusCodes.NOT_FOUND).json(`no buddies found.`);
    }
  } catch (error) {
    res.status(statusCodes.SERVER_ERROR).json(error);
  }
};
