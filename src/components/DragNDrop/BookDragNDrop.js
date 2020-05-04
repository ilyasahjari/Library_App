import React, { useState, useEffect } from 'react'
import KanbanColumn from './BookDroppable'
import { connect } from 'react-redux'
import { startEditBook } from '../../actions/book';
const KanbanBoard = (props) => {

    const [projects, setProjects] = useState(props.books);
    const [draggedOverCol, setDraggedOverCol] = useState("disponible");

    const columns = [
        { name: 'Disponible', stage: "disponible" },
        { name: 'Préparé', stage: "préparé" },
        { name: 'Emprunté', stage: "emprunté" },
        { name: 'Rendu', stage: "Rendu" }
    ];

    useEffect(() => {
        setProjects(props.books);
    })

    //this is called when a Kanban card is dragged over a column (called by column)
    const handleOnDragEnter = (e, stageValue) => {
        setDraggedOverCol(stageValue)
    }

    //this is called when a Kanban card dropped over a column (called by card)
    const handleOnDragEnd = (e, project) => {
        const updatedProjects = projects.slice(0);
        updatedProjects.find((projectObject) => { return projectObject.titre === project.titre; }).status = draggedOverCol;
        const idBookEdit = updatedProjects.find((projectObject) => { return projectObject.titre === project.titre; }).id;
        setProjects(updatedProjects);
                   
        props.startEditBook(idBookEdit, {
            status: draggedOverCol,
            idStudent: (draggedOverCol == "préparé" || draggedOverCol == "emprunté") ? props.idStudent : ""
        })

    }

    return (
        <div>
            <div className="row">
            {columns.map((column, index) => {
                return (
                    <div className="col-lg-7 col-md-2 mb-6" key={index}>
 
                    <KanbanColumn
                        name={column.name}
                        stage={column.stage}
                        projects={projects.filter((project) => { return project.status === column.stage; })}
                        onDragEnter={handleOnDragEnter}
                        onDragEnd={handleOnDragEnd}
                        key={column.stage}
                    />
                    </div>
                );
            })}
            </div>
        </div>
    );

}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditBook: (id, book) => dispatch(startEditBook(id, book)),
    }
};

const mapToProps = (state, props) => {
    const expense= state.expenses.find((expense) => expense.id === props.idStudent);
    return {
        books: state.books.filter((book) => (book.status === "disponible" || book.status === "Rendu") && (book.niveau === expense.classe) || (book.idStudent === props.idStudent)),

    }
}

export default connect(mapToProps, mapDispatchToProps)(KanbanBoard);