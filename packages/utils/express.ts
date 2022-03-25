/*
 * @Author: lzp
 * @Date: 2022-03-24 16:18:58
 * @Description: file content
 */

import axios from 'axios'
// import express from 'express'
const express = require("express");
const app = express();
// const axios = require('axios')

app.get('/api.getweatherlist',function(req,res) {
  const url = 'https://way.jd.com/he/freeweather/?city=' + returnCitySN["cip"] +'&appkey=da39dce4f8aa52155677ed8cd23a6470'
  axios.get(url,{
    headers: {
      referer:'https://way.jd.com',
      host:'way.jd.com'
    },
  }).then((response)=> {
    res.json(response.data)
  })
})