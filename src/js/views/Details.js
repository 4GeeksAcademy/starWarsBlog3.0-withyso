import React from "react";
import "../../styles/home.css";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const Details = () => {
    const { store, actions } = useContext(Context)
    const params = useParams();

    useEffect(() => {
        actions.loadDetails(params.type, params.id)
    }, [])

    let details = store.dataDetails.properties
    console.log(details)

    return (
        <React.Fragment>
            {/* Background image */}
            <div className="stars"></div>
            <div className="twinkling"></div>

            <div className="container">
                <div className="card mb-3 text-warning bg-dark">
                    <div className="row g-0">
                        <div className="col-sm-2 col-md-4">
                            <img className="card-img-left" src={`https://starwars-visualguide.com/assets/img/${params.type == "people" ? "characters" : params.type}/${params.id}.jpg`} />
                        </div>
                        <div className="col-sm-10 col-md-8">
                            <div className="card-body ps-4">
                                <h2 className="card-title fs-1 text-center">{details?.name}</h2>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Details




