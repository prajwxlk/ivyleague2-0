const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(req, res) {

    let output = new Array();

    const databaseId = process.env.NOTION_DATABASE_ID;
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [
        {
            property: 'Subject',
            select: {
                equals: "Psychology",
            },
        },
        ],
      },
    });

    var i = 0;
    var pageResponse = "";
    while(i< response.results.length) {
        const pageId = response.results[i].id;
        pageResponse = await notion.pages.retrieve({ page_id: pageId });

        
        //Position in Array
        //console.log(i)
        //Name of the Course
        const nameOfTheCourse = pageResponse.properties.Courses.title[0].plain_text;
        //output[i].courses = nameOfTheCourse;
        //console.log('Name of the Course : ' + nameOfTheCourse);
        //Name of the College
        const collegeName = pageResponse.properties.College.select.name;
        //output[i].college = collegeName;
        //console.log('College Name : ' + collegeName)
        //URL to the Course
        const url = pageResponse.properties.Link.url;
        //output[i].Link = url;
        //console.log('Url : ' + url); 

        output.push([nameOfTheCourse,collegeName,url]);

        //loop addition
        i = i+1;
    }

    //console.log(response.results);
    //console.log(output)
    res.status(200).json({output})
  }

/*
(async ( res ) => {
    const databaseId = 'a1b7e3b5be0b41b3946062c5afef31b3';
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [
        {
            property: 'Subject',
            select: {
                equals: "Psychology",
            },
        },
        ],
      },
    });

    console.log(response);

    res.status(200).json({ name: `${response}` })
    //response.json({text: `${response.data.choices[0].text}`})
  })();*/