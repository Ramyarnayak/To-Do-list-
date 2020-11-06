import React,{useState} from "react";
import {ModalContainer,
    AddContainer,
    Title,
    AddInput,
    SaveBtn,
    CancelBtn,
    ModalActions,
    ModalTitle} from "./AddModal.styles";
import shortid from 'shortid'; // library for creating unique ID's

const AddModal=({
    tasks,
    setTasks,
    displayModal,
    setDisplayModal,
    defSection})=>{

    //useState hook for input task and set column type
    const[inputValue,setInputValue]=useState("");
    const[section,setSection]=useState(defSection);

    // Function to save added task 
    const handleSave=()=>{
        //lastindex holds taskcard depending on column
        const lastIndex=tasks.filter(task=>task.column===section);
                                    
        setTasks([...tasks,
                {id:shortid.generate(),
                task:inputValue,
                taskIndex:lastIndex.length+1, //increment lastindex each time when we add task in column
                column:section}
            ]);
        setDisplayModal(false); //To close AddModal once task is saved 
        setInputValue("");
    };
    const handleCancel=()=>{
        setDisplayModal(false);  //To close AddModal once task is canceled
        setInputValue("");
    };
    // To display whatever input user is giving
    const handleChange=(e)=>{
        setInputValue(e.target.value); 
    };

return(
  //  Condition to display AddModal only if display is true
    <ModalContainer display={displayModal?"flex":"none"}>
        <AddContainer>
            <ModalTitle >
                <Title>Add</Title>
            </ModalTitle>
            <AddInput 
                placeholder={"Add a task"}
               onChange={handleChange}
                value={inputValue} />
            <ModalActions >
                <CancelBtn type={'button'} onClick={handleCancel} >Cancel</CancelBtn>
                <SaveBtn type={'button'} onClick={handleSave} >Save</SaveBtn>
            </ModalActions>
        </AddContainer>
    </ModalContainer>
    );
};

export default AddModal;