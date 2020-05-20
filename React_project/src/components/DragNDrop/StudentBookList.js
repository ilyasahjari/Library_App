import React from 'react'
import KanbanBoard from './BookDragNDrop'



const Kanban = (props) => {
 

    return (
        <div>
            <h1>Liste Livres</h1>
            <KanbanBoard idStudent={props.idStudent} />
        </div>
    );

}

export default Kanban;