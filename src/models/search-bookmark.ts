import mongoose from 'mongoose';

const SearchBookmark = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true },
  log: [
    {
      saved: { type: Boolean },
      timestampClient: { type: Number },
      timestampServer: { type: Number },
      dateClient: { type: Date },
      dateServer: { type: Date },
    }], // to keep track of the changes of this user/website bookmark
  website: { type: String }, // saved webpage
  websiteUrl: { type: String }, 
  saved: { type: Boolean } // current saved state
})

export default mongoose.model('search-bookmark', SearchBookmark);