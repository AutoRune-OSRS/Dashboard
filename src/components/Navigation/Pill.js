import React, {Component} from 'react';

import { Link } from "react-router-dom";

import "stylesheets/Navigation.css";

class ComponentsNavigationPill extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.pillClick(this.props.pillRoute);
    }

    render() {

        const classActive = this.props.isPillActive ? "navigation-pill-wrapper-active" : "navigation-pill-wrapper";

        return (

            <Link to={this.props.pillRoute} style={{ textDecoration: 'none' }}>

                <div className={classActive} onClick={this.handleClick}>
                    <div className={"navigation-pill-icon"}>
                        {this.props.pillIcon}
                    </div>
                    <p>{this.props.pillText}</p>

                </div>

            </Link>

        );

    }

}

export default ComponentsNavigationPill;