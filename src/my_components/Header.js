import React from "react";
import PropTypes from "prop-types";
// import React from "react";
// for routing purpose
import {
    //   BrowserRouter as Router,
    //   Switch,
    Route,
    Link
} from "react-router-dom";

export default function Header(props) {
    // add style to header
    // let headerStyle = {
    //     position: "fixed",
    //     top: "0px",
    //     width: "100%",
    //     border: "1px solid red"
    // }

    return (
        <Route>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {props.title}
                    </Link>
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
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Milky-Way
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                        {props.searchBar ? (
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                        ) : (
                            "searchBar boolean is {false}"
                        )}
                    </div>
                </div>
            </nav>
        </Route>
    );
}

// DefaultProps used for provide default value to component props
Header.defaultProps = {
    title: "Default-Title",
    searchBar: true,
};

// for robustness of variables or objects props (not necessary but do it)
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired, // isRequired used for when you user didn't provide value from parent component or didn't mentioned
    // in defaultProps then it will shows the error.
};
