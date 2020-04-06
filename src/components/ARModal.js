import React, {Component} from "react";
import Card from "material-kit/components/Card/Card";
import CardHeader from "material-kit/components/Card/CardHeader";
import CardBody from "material-kit/components/Card/CardBody";

import "stylesheets/Global/Modal.css"
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

import StylesModal from "stylesheets/Global/Modal";
import CardFooter from "material-kit/components/Card/CardFooter";


class ARModalComp extends Component {

    constructor(props) {

        super(props);

        this.closeModal = this.closeModal.bind(this);

    }

    closeModal() {
        this.props.onClose();
    }

    render() {

        if (!this.props.show)
            return null;

        return (
            <div className={"ar-modal"}>
                <Card className={"ar-modal-card"}>
                    <CardHeader color="autorune" className={"ar-modal-header"}>
                        <h4 className={this.props.classes.cardTitleWhite}>{this.props.title}</h4>
                    </CardHeader>
                    <CardBody className={"ar-modal-body"}>
                        {this.props.children}
                    </CardBody>
                    <CardFooter>
                        <button className={"ar-modal-cancel"} onClick={this.closeModal}>Cancel</button>
                    </CardFooter>
                </Card>
            </div>
        );

    }

}

ARModalComp.propTypes = {
    onClose: PropTypes.func,
    show: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node
};

const ARModal = withStyles(StylesModal)(ARModalComp);

export default ARModal