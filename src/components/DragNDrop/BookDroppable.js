import React, { useState, useEffect } from 'react'
import KanbanCard from './BookCard'


const KanbanColumn = (props) => {


    const [mouseIsHovering, setMouseIsHovering] = useState(false);

    useEffect(() => {
        setMouseIsHovering(false)
    }, [mouseIsHovering])

    // componentWillReceiveProps(nextProps) {
    //     this.state = ({ mouseIsHovering: false });
    // }


    const generateKanbanCards = () => {
        return props.projects.slice(0).map((project) => {
            return (
                <div key={project.id}>
                    <KanbanCard
                        project={project}
                        key={project.name}
                        onDragEnd={props.onDragEnd}
                    />
                </div>
            );
        });
    }


    const columnStyle = {
        'display': 'block',
        'verticalAlign': 'top',
        'marginRight': '5px',
        'marginBottom': '5px',
        'paddingLeft': '5px',
        'paddingTop': '0px',
        'width': '560px',
        'textAlign': 'center',
        'backgroundColor': (mouseIsHovering) ? '#d3d3d3' : '#f0eeee'
    };
    return (
        <div
            style={columnStyle}
            onDragEnter={(e) => { setMouseIsHovering(true); props.onDragEnter(e, props.stage); }}
            onDragExit={(e) => { setMouseIsHovering(false) }}
        >
            <h4>{props.name} ({props.projects.length})</h4>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {generateKanbanCards()}
            </div>
            <br />
        </div>
    );

}

export default KanbanColumn;