import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../LeftSideNav/LeftSideNav.css'

const LeftSideNav = () => {

    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
  return (
    <div>
        {
            courses?.map(course =><p key={course.id}>
                <Link className="text-decoration-none course-link fw-semibold" to={`/courses/${course.id}`}>{course.name}</Link>
            </p>)
        }
    </div>
  )
}

export default LeftSideNav