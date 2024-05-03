import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Elements = () => {
    const { store, actions } = useContext(Context);
    const { type } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        actions.loadType(type, currentPage)
    }, [currentPage])

    useEffect(() => {
        setPageCount(store.data.total_pages)
    }, [store.data])

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1)
    }

    return (
        <React.Fragment>
            <div className="stars"></div>
            <div className="twinkling"></div>
            <p className="text-white">
                Elements
            </p>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
        </React.Fragment>
    )
}

export default Elements