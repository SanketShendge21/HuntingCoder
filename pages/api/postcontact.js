import * as fs from 'fs'

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      let data = await fs.promises.readdir('contactdata'); // Read the contact files from the directory
      fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body)) // writing the contact data to the file and we are incrementing the file counter by 1
      res.status(200).json(["sent post request"])
    } else {
      // Handle any other HTTP method
      res.status(200).json(["allblogs"])
    }
  }