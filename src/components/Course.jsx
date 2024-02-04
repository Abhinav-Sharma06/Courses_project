import React from "react";
import {FcLike, FcLikePlaceholder } from "react-icons/fc";
import {toast} from "react-toastify";

function Course(props){
    let courseData = props.course;
    let likedCourses = props.liked;
    let setLikedCourses = props.setLiked;

    function likeHandler(){
        if(likedCourses.includes(courseData.id)){
            //pehle se liked hai toh remove it from LikedCourses
            setLikedCourses((prev)=> prev.filter((cid) => courseData.id !==cid));
            toast.warning("Like Removed");
        }
        else{
            // Add course to likedCourses

            //if LikedCourses array is Empty
            if(likedCourses.length === 0){
                setLikedCourses([courseData.id]);
            }

            else{
                //LikedCourses array is non empty
                setLikedCourses((prev) => [...prev,courseData.id]);
    
            }
            toast.success("Like Added");
        }
    }

    return(
        <div className= "w-[300px] bg-bgDark rounded-md overflow-hidden min-h-[350px]">
            <div className = "relative ">
                <img src = {courseData.image.url}
                    className= "-z-1"/>

                <div className= "h-[30px] w-[30px] rounded-full bg-white absolute -bottom-3 right-3 z-30 grid place-items-center cursor-pointer" onClick={likeHandler} >{
                   likedCourses.includes(courseData.id) ? (<FcLike className= "text-2xl"/>) : (<FcLikePlaceholder className="text-2xl"/>) 
                }
                </div>
            </div>
        
            <div>
                <p className= "text-[1.3rem] text-white text-center font-medium mt-4 px-2">{courseData.title}</p>

                <p className= "text-[1.1rem] text-white text-center font-normal px-2 py-4">{  
                    courseData.description.length > 100 ? (courseData.description.substring(0,100) +'...') : (courseData.description)
                    }</p>
            </div>
        </div>
    )

}

export default Course;