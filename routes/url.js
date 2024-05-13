const express = require('express');
const router = express.Router();
const Url = require('../models/urlSchema');
const validurl = require('valid-url');
const shortid = require('shortid');

//  "postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"

router.post('/shortner', async (req, res) => {
  const { longUrl } = req.body;
  const baseurl = process.env.BASE_URL;
  // Create url code
  const urlCode = shortid.generate();
  try {
    let url = await Url.findOne({ longUrl });

    if (url) {
      res.json(url);
    } else {
      const shortUrl = baseurl + '/' + urlCode;

      url = new Url({
        longUrl,
        shortUrl,
        urlCode,
        date: new Date(),
      });

      await url.save();

      res.json(url);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;
