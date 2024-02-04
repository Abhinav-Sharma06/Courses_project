import Course from "./Course";
import React,{useState} from "react";

function Courses(props){
    let courses = props.courseData;
    let category = props.category;

    const [liked , setLiked] = useState([]);

    function getCourses(){
        if(category === "All"){
        let allCourses = [];
        Object.values(courses).forEach(
            (courseArray) => {
                courseArray.forEach((course) => {
                    allCourses.push(course);
                })
            }
        )
        return allCourses;
        }

        else{
            // specific Category ka data
            return courses[category];
        }
    }
    return(
        <div className="w-11/12 max-w-[1200px] flex flex-wrap gap-3 mx-auto justify-center min-h-[50vh] my-4">
        {
            getCourses().map((course) => (
                <Course key={course.id}  course={course}
                    liked={liked} setLiked={setLiked}
                />
            ))
        }
            
        </div>
    );
}

export default Courses;