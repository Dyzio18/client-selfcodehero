
import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

/**
 * 
 * @param {Array} array 
 * {
 *  title: String,
 *  link: String,
 *  active: Boolean,
 * }
 * @returns 
 */
const breadcrumbs = (array) => {
    if (array && !array.length) {
        return '';
    }

    return (
        <div className="col">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {array.map((elem, index) => {
                        let liClass = (elem.active ? 'breadcrumb-item active' :  'breadcrumb-item');                        
                        return (
                            <li key={`bread-${index}`} className={liClass}>
                                {elem.link ? (<Link to={elem.link}>{elem.title}</Link>) : `${elem.title}`}
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </div>
    )
}

function PageTitle({ title, lead, breads = [] }) {
    return (
        <div className="row">
            <div className="col-10 col-md-8 col-sm-12">
                {title && (<h1 className="bold h1">{title}</h1>)}
                <p className='lead'> {lead}</p>
            </div>
            <div className="col col-md-4 col-sm-12 pt-2">
                {breadcrumbs(breads)}
            </div>
        </div>
    )
}

PageTitle.propTypes = {
    title: PropTypes.any,
    lead: PropTypes.any,
    breads: PropTypes.array,
}

export { PageTitle };