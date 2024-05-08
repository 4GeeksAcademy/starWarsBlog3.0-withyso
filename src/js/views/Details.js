import React from "react";
import "../../styles/home.css";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


const Details = () => {
    const { store, actions } = useContext(Context)
    const params = useParams();

    useEffect(() => {
        actions.loadDetails(params.type, params.id)
    }, [])

    let details = store.dataDetails.properties
    if (!details) return <div>Loading...</div>
    //console.log(arr)
    //console.log(arrvalues)
    let newArr = Object.entries(details)
    let keyToExclude = ["name", "homeworld", "url", "pilots", "created", "edited", "people"]
    let newFilterArr = newArr.filter(([key, _]) => !keyToExclude.includes(key))
    console.log(newFilterArr)


    return (
        <React.Fragment>
            {/* Background image */}
            <div className="stars"></div>
            <div className="twinkling"></div>

            <div className="container">
                <div className="card mb-3 text-warning bg-dark">
                    <div className="row g-0">
                        <div className="col-sm-2 col-md-4">
                            <img className="card-img-left p-2" src={`https://starwars-visualguide.com/assets/img/${params.type == "people" ? "characters" : params.type}/${params.id}.jpg`} onError={(event) => {
                                event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                                event.onerror = null
                            }} />
                        </div>
                        <div className="col-sm-10 col-md-8">
                            <div className="card-body ps-4 d-flex flex-column gap-4">
                                <h2 className="card-title fs-1">{details?.name}</h2>
                                <ul className="card-text" style={{ listStyleType: "none" }}>
                                    {/* {arr.map((element) => {
                                        return <li>{element}</li>
                                    })} */
                                        newFilterArr.map(([key, value]) => <li className="p-0 m-0">{key} : {value} </li>)
                                    }
                                </ul>
                                <div className="group d-flex flex-row justify-content-between mt-5">
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    <Link to={`/${params.type}/`}>
                                        <button className="btn btn-warning"> All {params.type} </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Details




