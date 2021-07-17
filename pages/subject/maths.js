import React from 'react'
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });

function Maths({ pageResponse }) {
    
    return (
        <div>
            HI
        </div>
    )
}

export async function getStaticProps() {
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
        console.log(i)
        //Name of the Course
        const nameOfTheCourse = pageResponse.properties.Courses.title[0].plain_text;
        console.log('Name of the Course : ' + nameOfTheCourse);
        //Name of the College
        const collegeName = pageResponse.properties.College.select.name;
        console.log('College Name : ' + collegeName)
        //URL to the Course
        const url = pageResponse.properties.Link.url;
        console.log('Url : ' + url);

        //loop addition
        i = i+1;
    }
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        pageResponse,
      },
    }
  }

export default Maths
