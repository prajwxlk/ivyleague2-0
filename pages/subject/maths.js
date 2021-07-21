import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Maths() {
  //Expirementing with the Psychology API data for temporary purpse
  const { data, error } = useSWR('/api/psychology', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  //console.log(data);
  //console.log(data.output.length)

  var i = 0;
  var courseName, collegeName, URL;

  while(i< data.output.length) {
      
    courseName = data.output.[i].[0];
    collegeName = data.output.[i].[1];
    URL = data.output.[i].[2]

    console.log(courseName);
    console.log(collegeName);
    console.log(URL);

    const items = [];
    var tempdata = "";
    for (tempdata of courseName) {
        items.push(<li>{tempdata}</li>)
    }

    console.log('-------')
    console.log(tempdata)

    //console.log(data.output.[0])

    //loop addition
    i = i+1;

  }

    return (
        <div className="">
            <h1>{tempdata}</h1>
        </div>
    )
}
