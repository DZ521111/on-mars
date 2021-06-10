import React from "react";
import PropTypes from 'prop-types'


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {props.title}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Milky-Way
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                    </ul>
                    { props.searchBar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Find" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form> : "searchBar boolean is {false}"}
                </div>
            </div>
        </nav>
    );
}

// DefaultProps used for provide default value to component props
Header.defaultProps = {
    title: "Default-Title",
    searchBar: true
}

// for robustness of variables or objects props (not necessary but do it)
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired    // isRequired used for when you user didn't provide value from parent component or didn't mentioned
                                            // in defaultProps then it will shows the error.
}