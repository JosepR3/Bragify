const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const TrackSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Track title required"],
      trim: true,
    },
    url: {
      type: String,
      required: false,
    },
    thumbnail: {
      type: String,
      trim: true,
      required: false,
    },
    duration: {
      type: String,
      required: false,
    },
    rating: {
      type: Number,
      required: false,
      default: 0.0,
    },
    color: {
      type: String,
    },
    artists: {
      type: String,
    },

    genre: {
      // type: Schema.Types.ObjectId,
      // ref: "genre",
    },
    authorId: {
      // type: Schema.Types.ObjectId,
      // ref: "user",
    },
    playlists: {
      type: [
        {
          // type: Schema.Types.ObjectId,
          // ref: "playlist",
        },
      ],
      default: [],
    },
    likedBy: {
      type: [
        {
          // type: Schema.Types.ObjectId,
          // ref: "user",
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

const Track = mongoose.model("track", TrackSchema);

module.exports = Track;
