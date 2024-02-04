import React, { useEffect, useState }from "react";
import Navigation from "./components/Navigation";
import Courses from "./components/Courses";
import Loader from "./components/Loader";
import { apiUrl , filterData } from "./data";
import {toast} from "react-toastify";


const App = () => {
  const [courseData, setCourseData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [liked , setLiked] = useState([]);
  const [category , setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourseData(output.data);
      
    }
    catch(error){
      alert("404 Network Error");
      toast.error("Network Error, Data Fetch Failed")
    }
    setLoading(false);
    
  }

  useEffect(() =>{
    fetchData();
  },[]);


  return (
  <div className="min-h-[100vh] bg-bgDark2 flex flex-col">
      <h1 className="text-center text-[1.8rem] font-bold text-white bg-bgDark py-[5px]">Top Courses</h1>

    <div>
      <Navigation data={filterData} 
        category={category} setCategory = {setCategory}
      />
    </div>
    <div>
    {
      loading ? (<Loader/>) : (<Courses courseData = {courseData}  category={category}
        liked={liked} setLiked={setLiked}
      />)
    }
    </div>
  </div>
  );
};

export default App;
