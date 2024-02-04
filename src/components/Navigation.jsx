import React from "react";

function Navigation(props){
    let navData = props.data;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(selectedCategory){
        setCategory(selectedCategory);
    }

    return(
        <div className = "w-11/12 max-w-max mx-auto flex justify-center items-center gap-4 py-4 flex-wrap ">{
            navData.map((filter) => (
                <button 
                className={`text-white text-xl font-medium bg-black py-[5px] px-[6px] rounded-md cursor-pointer border-2  hover:bg-opacity-50 transition-all duration-300 
                ${category === filter.title ? "bg-opacity-50 border-white" : "bg-opacity-40 border-transparent" }`}

                key={filter.id}
                onClick={() => filterHandler(filter.title)}
                > {filter.title} </button>
            ))}
        </div>
    );
}

export default Navigation;