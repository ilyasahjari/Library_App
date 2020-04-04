import ParentAdd from './ParentAdd'
import React , {useState} from 'react'

const ParentAddForm = (props) => {
    const [addParentClick, setAddParentClick] =useState(true)
    
    const isAdded=()=>{
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
