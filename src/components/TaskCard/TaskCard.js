import React,{useState} from "react";
import {CardActions,Card,Button,Task} from './TaskCard.styles';
import trash from 'assets/trash.svg';
import DeleteModal from "components/DeleteModal";

const TaskCard=({
    handleDrag,
    taskId,
    borderColor,
    task,
    tasks,
    setTasks})=>{

    // useState hook for keeping display delete
    const[displayDeleteModal,setDisplayDeleteModal]= useState(false);

    
    return(
        <Card borderColor={borderColor} 
        onDrag={e=>handleDrag(e,taskId)}
        draggable >
              
            <Task>{task}</Task>     
            <CardActions borderColor={borderColor}>
              
                <Button type={'button'} onClick={()=>setDisplayDeleteModal(true)}>
                    <img src={trash} alt={"trash"}/>
                </Button>
            </CardActions>
           
            <DeleteModal 
                tasks={tasks}
                setTasks={setTasks}
                taskId={taskId}
                displayDeleteModal={displayDeleteModal} 
                setDisplayDeleteModal={setDisplayDeleteModal}/>
        </Card>       
    );
};

export default TaskCard;