const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/api/psychology');
    const data = await res.json();

    return {
        props: { courses: data }
    }
}

const Courses = ({ courses }) => {
    return (
        <div>
            <h1>All the courses</h1>
            {/* courses.map(course => (
                <div key={course.[0]}>
                    <a>
                        <h2>{ course.[0] }</h2>
                    </a>
                </div>
            )) */}
        </div>
    )
}

export default getStaticProps;