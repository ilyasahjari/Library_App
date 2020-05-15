import ParentAdd from './ParentAdd'
import React , {useState} from 'react'

const ParentAddForm = (props) => {
    const [addParentClick, setAddParentClick] =useState(true)


    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    const isAdded=()=>{
        scrollToTop();
        props.history.push('/ParentsList');
    }



    return (
        <div className="AppAdd">
            <form className="styleAdd form-group main-section">
                <ParentAdd handleClick={isAdded} isClicked={isAdded}/>
            </form>
        </div>
    )

}

export default ParentAddForm;
