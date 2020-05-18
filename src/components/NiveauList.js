import React, { useEffect, useState } from "react"
import axios from "axios"

const NiveauList = () => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    let res = [];
    useEffect(() => {
        axios.get('http://localhost:8080/rest/classes')
            .then((response) => {
                setData(response.data.result)
                setLoad(true)
            })
    }, [])

    return (
        <div className="App fadeIn">
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