/*
 * The Kanban React component
 */
import React from 'react'

class Kanban extends React.Component {
    render() {
        const style = {
            'padding': '30px',
            'paddingTop': '5px',
        };

        return (
            <div style={style}>
                <h1>Liste Livre</h1>
                <KanbanBoard />
            </div>
        );
    }
}

/*
 * The Kanban Board React component
 */
class KanbanBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            isLoading: true,
            projects: [],
            draggedOverCol: 0,
        });
        this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
        this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
        this.columns = [
            { name: 'disponible', stage: 1 },
            { name: 'préparé', stage: 2 },
            { name: 'emprunté', stage: 3 },
            { name: 'Rendu', stage: 4 }
        ];
    }

    componentDidMount() {
        this.setState({ projects: projectList, isLoading: false });
    }

    //this is called when a Kanban card is dragged over a column (called by column)
    handleOnDragEnter(e, stageValue) {
        this.setState({ draggedOverCol: stageValue });
    }

    //this is called when a Kanban card dropped over a column (called by card)
    handleOnDragEnd(e, project) {
        const updatedProjects = this.state.projects.slice(0);
        updatedProjects.find((projectObject) => { return projectObject.name === project.name; }).project_stage = this.state.draggedOverCol;
        this.setState({ projects: updatedProjects });
    }

    render() {
        if (this.state.isLoading) {
            return (<h3>Loading...</h3>);
        }

        return (
            <div>
                {this.columns.map((column) => {
                    return (
                        <KanbanColumn
                            name={column.name}
                            stage={column.stage}
                            projects={this.state.projects.filter((project) => { return parseInt(project.project_stage, 10) === column.stage; })}
                            onDragEnter={this.handleOnDragEnter}
                            onDragEnd={this.handleOnDragEnd}
                            key={column.stage}
                        />
                    );
                })}
            </div>
        );
    }
}

/*
 * The Kanban Board Column React component
 */
class KanbanColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ mouseIsHovering: false });
    }

    componentWillReceiveProps(nextProps) {
        this.state = ({ mouseIsHovering: false });
    }

    generateKanbanCards() {
        return this.props.projects.slice(0).map((project) => {
            return (
                <KanbanCard
                    project={project}
                    key={project.name}
                    onDragEnd={this.props.onDragEnd}
                />
            );
        });
    }

    render() {
        const columnStyle = {
            'display': 'block',
            'verticalAlign': 'top',
            'marginRight': '5px',
            'marginBottom': '5px',
            'paddingLeft': '5px',
            'paddingTop': '0px',
            'width': '560px',
            'textAlign': 'center',
            'backgroundColor': (this.state.mouseIsHovering) ? '#d3d3d3' : '#f0eeee'
        };
        return (
            <div
                style={columnStyle}
                onDragEnter={(e) => { this.setState({ mouseIsHovering: true }); this.props.onDragEnter(e, this.props.stage); }}
                onDragExit={(e) => { this.setState({ mouseIsHovering: false }); }}
            >
                <h4>{this.props.name} ({this.props.projects.length})</h4>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    {this.generateKanbanCards()}
                </div>
                <br />
            </div>);
    }
}

/*
 * The Kanban Board Card component
 */
class KanbanCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
    }

    render() {
        const cardStyle = {
            'backgroundColor': '#f9f7f7',
            'paddingLeft': '0px',
            'paddingTop': '5px',
            'paddingBottom': '5px',
            'marginLeft': '0px',
            'marginRight': '10px',
            'marginBottom': '5px',
            'cursor': 'all-scroll'
        };

        return (
            <div
                style={cardStyle}
                onClick={(e) => e.target.cursor = "all-scroll"}
                draggable={true}
                onDragEnd={(e) => { this.props.onDragEnd(e, this.props.project); }}
            >
                <div>
                    <h4>{this.props.project.name}</h4>
                    <img src='https://static.fnac-static.com/multimedia/Images/FR/NR/ba/d8/1d/1956026/1540-1/tsp20200301071729/Harry-Potter-I-Harry-Potter-a-l-ecole-des-sorciers.jpg' style={{ height: "50px" }} alt="calculatrice" />

                </div>
                {(this.state.collapsed)
                    ? null
                    : (<div><strong>Description: </strong>{this.props.project.description}<br /></div>)
                }
            </div>
        );
    }
}

/*
 * Projects to be displayed on Kanban Board
 */
let projectList = [
    {
        name: 'Livre 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
        project_stage: 1
    },
    {
        name: 'Livre 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
        project_stage: 1
    },
    {
        name: 'Livre 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
        project_stage: 1
    },
    {
        name: 'Livre 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
        project_stage: 2
    },
    {
        name: 'Livre 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
        project_stage: 3
    },
    {
        name: 'Livre 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
        project_stage: 3
    },
    {
        name: 'Livre 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
        project_stage: 4
    },
];

/*
 * Render the Kanban Board in the "app" div
 */
export default Kanban;