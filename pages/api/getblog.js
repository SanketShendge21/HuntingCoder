// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=how-to-learn-javascript

import * as fs from "fs";

export default function handler(req, res) {
	const slug = req.query.slug;
	fs.readFile(`blogdata/${slug}.json`, "utf-8", (err, data) => {
		// it takes a path and callback function
        if (err) {
            return res.status(500).json({error : "No such blog found"});
        }
		
        res.status(200).json(JSON.parse(data));
	});
}
