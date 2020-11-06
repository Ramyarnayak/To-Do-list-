import React ,{useState}from "react";
import {Container,ColumnNameSection,CardsSection} from './TasksColumn.styles';
import TaskCard from "components/TaskCard";
import AddModal from 'components/AddModal';



const TasksColumn=({
    handleDrop,
    handleDragOver,
    handleDrag,
    handleDragLeave,
    columnName,
    background,
    borderColor,
    nameBackground,
    tasks,
    setTasks})=>{

// useState hook to for setting display of added tasks
    const[displayAddModal,setDisplayAddModal]=useState(false);

return(
        <Container background={background} borderColor={borderColor}>
            <ColumnNameSection nameBackground={nameBackground} borderColor={borderColor} >
                {columnName}
                <button onClick={()=>setDisplayAddModal(true)} style={{cursor:"pointer"}}>+</button>
            </ColumnNameSection>
            <CardsSection 
            className={"drop-zone"}
            onDrop={e=>handleDrop(e,background)}
            onDragOver={e=>handleDragOver(e,columnName)}
            onDragLeave={e=>handleDragLeave(e,background)}>

{/* Filter the task based on column name and map it to put taskcard into respective column */}
                {tasks.filter(task=>task.column===columnName) 
                .map((t,index)=><TaskCard 
                                    draggable
                                    handleDrag={handleDrag}
                                    taskId={t.id}
                                    columnName={columnName}
                                    key={index}
                                    borderColor={borderColor} 
                                    task={t.task}
                                    setTasks={setTasks}
                                    tasks={tasks}
                                    />)}
            </CardsSection>
            <AddModal 
            defSection={columnName}
            tasks={tasks}
            setTasks={setTasks}
            setDisplayModal={setDisplayAddModal} 
            displayModal={displayAddModal}/>
        </Container>
    );
};

export default TasksColumn;