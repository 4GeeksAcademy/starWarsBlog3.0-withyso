import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import TypeCards from '../component/TypeCards';

const Types = () => {
    const { store, actions } = useContext(Context);
    const { type } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [arrayOfElements, setArrayOfElements] = useState([])

    useEffect(() => {
        actions.loadType(type, currentPage)
    }, [currentPage])

    useEffect(() => {
        setPageCount(store.data.total_pages)
        setArrayOfElements(store.data.results)
    }, [store.data])

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1)
    }

    return (
        <React.Fragment>
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="container">
                <div className="d-flex flex-row justify-content-center">
                    <ReactPaginate
                        previousLabel={'Back'}
                        nextLabel={'Next'}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        marginPagesDisplayed={2}
                        pageClassName="page-item"
                        pageLinkClassName="page-link text-warning bg-dark border-0"
                        previousClassName="page-item"
                        previousLinkClassName="page-link text-warning bg-dark border-0"
                        nextClassName="page-item"
                        nextLinkClassName="page-link text-warning bg-dark border-0"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link text-warning bg-dark border-0"
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                </div>
                <div className="container d-flex flex-column mt-4">
                    <div className="row gx-2 gy-2 justify-content-center">
                        {arrayOfElements?.map((element) => {
                            return <TypeCards uid={element.uid} name={element.name} type={type} />
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Types