import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { isElement } from 'react-dom/test-utils';
import module_exists from 'module-exists'
const KanbanCard = (props) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    //add image to each book 

    const imagePath =
    {
        'francais1': 'francais1.jpg',
        'francais2': 'francais2.jpg',
        'geopolitique': 'geopolitique.jpg',
        'math-Term': 'math-Term.jpg',
        'physique-Term': 'physique-Term.jpg'
    }


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
            key={props.project.id}
            style={cardStyle}
            draggable={true}
            onDragEnd={(e) => { props.onDragEnd(e, props.project); }}
        >
            <div title={`Auteur : ${props.project.auteur}\nNiveau : ${props.project.niveau}`}>
                <Link to={`/BookEdit/${props.project.id}`} onClick={scrollToTop}>
                    {props.project.titre}
                </Link><br />
                     <img src={require('./../../images/francais1.jpg')} style={{ height: "60px" }} alt="livre" />
               

            </div>
            {/* {(collapsed)
                    ? null
                    : (<div><strong>Description: </strong>{props.project.description}<br /></div>)
                } */}
        </div>
    );
}

export default KanbanCard;
