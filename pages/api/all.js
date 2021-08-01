const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(req, res) {

    let output = new Array();

    const databaseId = process.env.NOTION_DATABASE_ID;
    const response = await notion.databases.query({
      database_id: databaseId
    });

    var i = 0;
    var pageResponse = "";
    while(i< response.results.length) {
        const pageId = response.results[i].id;
        pageResponse = await notion.pages.retrieve({ page_id: pageId });

        const nameOfTheCourse = pageResponse.properties.Courses.title[0].plain_text;
        const collegeName = pageResponse.properties.College.select.name;
        const url = pageResponse.properties.Link.url;

        output.push({nameOfTheCourse,collegeName,url});

        //loop addition
        i = i+1;
    }

    res.status(200).json({output})
  }