import React, { useEffect, useState } from "react"
import axios from "axios"

const NiveauList = () => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    const [classeName, setClasseName] = useState("")

    let res = [];
    useEffect(() => {
        axios.get('http://localhost:8080/rest/classes')
            .then((response) => {
                setData(response.data.result)
                setLoad(true)
            })
    }, [])


    const handleAddNiveau =()=>{
        window.location.reload(false)
            axios.post('http://localhost:8080/rest/classes', { "nom": classeName})
                 .then(response => {
                    console.log(response.data);
            })
                .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="App fadeIn">
            <input onChange={(e)=>setClasseName(e.target.value)}/>
            <button onClick={handleAddNiveau}>Ajouter</button>
            <table cellSpacing="0">
                <thead>
                    <tr >
                        <th style={{ textAlign: "center" }}>ID Niveau</th>
                        <th>Nom Niveau</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((niveau) => {
                        return (
                            <tr key={niveau.id}>
                                <td>{niveau.id}</td>
                                <td>{niveau.nom}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default NiveauList;