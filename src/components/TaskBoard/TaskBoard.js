import React,{useState,useEffect} from "react";
import TasksColumn from "../TasksColumn";
import './TaskBoard.css'




// Array of objects
const taskColumns=[
   
    {name:"To-do ",borderColor:"#1A82AF",background:"#E7F5FA",nameBackground:"#C0E7F8"},
    
    {name:"Done",borderColor:"#15950A",background:"#E9FFE8",nameBackground:"#C5FBC0"}];

//Function component "TaskBoard"
const TaskBoard=()=>{
    // useState Hooks fors adding task, for dragging tasks
    const [tasks,setTasks]=useState([]);
    const [draggedTaskId,setDraggedTaskId]=useState("");
    const [targetColumn,setTargetColumn]=useState("");

  
    
    //Function to handle drag task feature
    const handleDrag=(e,id)=>{
        e.preventDefault();
        e.stopPropagation();
        setDraggedTaskId(id);
    };
    //Function to drop dragged task to target element
    const handleDrop=(e,background)=>{
        e.preventDefault();
        e.stopPropagation();
        
        if(e.target.className.indexOf("drop-zone")!==-1){
            e.target.style.background=background;
        };
        const newsTasks=tasks.map(t=>{
            if(t.id===draggedTaskId){
                t.column=targetColumn;
            };
            return t;
        });
        setTasks([...newsTasks]);
    };
    
    //Function  to drop dragged task to target column
    const handleDragOver=(e,col)=>{
        e.preventDefault();
        e.stopPropagation();
        setTargetColumn(col);
    };

    const handleDragLeave=(e,background)=>{
        e.preventDefault();
        e.stopPropagation();
    };


return(
<div className="BoardContainer1">
    {taskColumns.map((column,index)=>
        <TasksColumn
            handleDragLeave={handleDragLeave}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            handleDrag={handleDrag}
            columnName={column.name} 
            borderColor={column.borderColor}
            background={column.background} 
            nameBackground={column.nameBackground}
            key={index}
            tasks={tasks||[]}
            setTasks={setTasks}
            />)}

</div>);
};

export default TaskBoard;