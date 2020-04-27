import React from 'react'
import KanbanBoard from './BookDragNDrop'



const Kanban = (props) => {
    const style = {
        'padding': '30px',
        'paddingTop': '5px',
    };

    return (
        <div style={style}>
            <h1>Liste Livres</h1>
            <KanbanBoard idStudent={props.idStudent}/>
        </div>
    );

}

export default Kanban;