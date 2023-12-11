const shortid = require("shortid");

const urlModel= require("../models/url");
const handlerGenerateNewShortURL = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).send({ status: false, msg: "url is required" });
  const shortID = shortid(); 
  const savedata = {
    shortID: shortID,
    redirectUrl: body.url,
    visiteHistory: [],
  };
  const shortidCrated = await urlModel.create(savedata);
  if (shortidCrated) {
    return res.status(201).send({ status: true, id: shortID });
  }
};
const rediresctUrl=async (req,res)=>{
    const shortID=req.params.shortID;
    console.log(shortID)
    const data=await urlModel.findOneAndUpdate({shortID},{$push:{visiteHistory:{timestamp:Date.now()}}})
     console.log(data);
    if(data){
         return res.redirect( data.redirectUrl )
        }
}
const handlerGetAnalytics = async (req, res) => {
  const shortID = req.params.shortID;
  
  const result = await urlModel.findOne({ shortID });
  if (result) {
    return res.send({
      status: true,
      totalClick: result.visiteHistory.length,
      analytics: result.visiteHistory,
    });
  }

};

module.exports = {
  handlerGenerateNewShortURL,
  rediresctUrl,
  handlerGetAnalytics
};
