const express=require('express')
const route=express.Router()
const {
  handlerGenerateNewShortURL,
  rediresctUrl,
  handlerGetAnalytics,
} = require("../controllers/url");

route.post("/url/generateNewShortid", handlerGenerateNewShortURL);
route.get("/url/:shortID", rediresctUrl);
route.get("/url/analytic/:shortID", handlerGetAnalytics);
module.exports = route;