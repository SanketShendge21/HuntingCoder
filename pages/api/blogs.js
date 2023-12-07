// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';


export default async function handler(req, res) {

    let data = await fs.promises.readdir("blogdata");// it takes a path and callback function
    let allBlogs = [];
    let myFile;
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      console.log(item);
      myFile = await fs.promises.readFile(('blogdata/'+ item),'utf-8');
      console.log(myFile);
      allBlogs.push(JSON.parse(myFile)); // Myfile is a string we need to convert to JSON object
    }
    
    console.log(data);
    res.status(200).json(allBlogs);
  }

