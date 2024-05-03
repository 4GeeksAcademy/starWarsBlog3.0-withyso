import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const HomeCards = ({ imageURL, title, type }) => {
    return (
        <React.Fragment>
            <div className="image-wrapper" style={{ position: "relative", width: "25rem" }}>
                <div className="image-body" style={{ width: "100%" }}>
                    <img src={imageURL} className="card-img-top" alt="..." />
                </div>
                <Link to={`/${type}/`}>
                    <div className="text-image d-flex flex-column justify-content-center align-items-center home-text">
                        <h2 className='text-warning text-h2'> {title} </h2>
                    </div>
                </Link>
            </div>

        </React.Fragment >
    )
}

export default HomeCards