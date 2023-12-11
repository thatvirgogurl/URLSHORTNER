const mongoose=require('mongoose')
const urlSchema = new mongoose.Schema({
  shortID: {
    type: String,
    require: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    require: true,
  },
  visiteHistory: [
    {
      timestamps: {
        type:Number
      }
    },
  ],
},{
    timestamps:true
}
);
const URL = mongoose.model("url", urlSchema);
module.exports=URL;