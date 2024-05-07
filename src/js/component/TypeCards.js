import React from 'react'
import { Link } from 'react-router-dom';

const TypeCards = ({ uid, name, type }) => {
    return (
        <React.Fragment>
            <div className="col-6 col-md-4 col-lg-3 px-3" key={uid}>
                <div className="card border-0" key={uid}>
                    <img src={`https://starwars-visualguide.com/assets/img/${type == "people" ? "characters" : type}/${uid}.jpg`} className="card-img-top" alt="..." onError={(event) => {
                        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        event.onerror = null
                    }} />
                    <Link to={`/details/${type}/${uid}`}>
                        <div className="card-body home-text d-flex flex-column justify-content-center align-item-center">
                            <h2 className="card-text text-h2 text-center">{name}</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </React.Fragment >
    )
}

export default TypeCards