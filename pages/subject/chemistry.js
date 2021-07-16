import useSWR from 'swr'
import CoursesGrid from '../components/CoursesGrid'
//import courses from '../api/psychology'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
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

    //console.log(data.output.[0])

    //loop addition
    i = i+1;
    //++i;
    
    //return <div><h1>{courseName}</h1></div>
  }
  

  return (
    <div>
        
    </div>
  )
}
