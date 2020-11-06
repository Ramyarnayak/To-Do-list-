import React from "react";
import {
    ModalContainer,
    DeleteContainer,
    Title,
    DeleteBtn,
    CancelBtn,
    ModalActions,
    DeleteStatement,
    ModalTitle} from "./DeleteModal.styles";


const DeleteModal=({
    taskId,
    tasks,
    setTasks,
    displayDeleteModal,
    setDisplayDeleteModal,
    })=>{

    const handleSave=()=>{
        const newTasks=tasks.filter(el=>el.id!==taskId);
        setTasks([...newTasks]);
        setDisplayDeleteModal(false);  //To close DeleteModal once task is saved 
    };
    const handleCancel=()=>{
        setDisplayDeleteModal(false);   //To close DeleteModal once task is canceled
    };
    

return(
    // Condition to display  DeleteModal only if display is true
    <ModalContainer display={displayDeleteModal?"flex":"none"}>
        <DeleteContainer>
            <ModalTitle >
                <Title>Delete</Title>
            </ModalTitle>
            <DeleteStatement>
                Are you sure you want to <strong>delete</strong> this task ?
            </DeleteStatement>
            <ModalActions >
                <CancelBtn type={'button'} onClick={handleCancel} >Cancel</CancelBtn>
                <DeleteBtn type={'button'} onClick={handleSave} >Delete</DeleteBtn>
            </ModalActions>
        </DeleteContainer>
    </ModalContainer>
    );
};

export default DeleteModal;