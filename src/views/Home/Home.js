import React from "react";
import TaskBoard from "components/TaskBoard";



const Home=()=>{
return(
    <>
        
        <center> <h1>To-do List</h1></center>
        {/* For displaying both to-do and done taskboards */}
         <TaskBoard/> 

        </>
    
);
};

export default Home;