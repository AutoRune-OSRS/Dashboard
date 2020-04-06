import React, {Component} from 'react';

import "stylesheets/Navigation.css"

import Overview from "@material-ui/icons/Dashboard";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DescriptionIcon from '@material-ui/icons/Description';
import CodeIcon from '@material-ui/icons/Code';

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import IconButton from "@material-ui/core/IconButton";

import ComponentsNavigationPill from "./Pill";

import ActionsNavigation from "actions/Navigation";

import { connect } from "react-redux";

import ConstantsRoutes from "constants/Routes";

class ComponentNavigation extends Component {

    constructor(props) {
        super(props);

        this.renderFull = this.renderFull.bind(this);
        this.renderHidden = this.renderHidden.bind(this);
    }

    renderFull() {
        const { currentScreen } = this.props;
        return (
            <div className={"navigation-wrapper"}>
                <div className={"navigation-header"}>
                    <div className={"navigation-title"}> AUTORUNE</div>
                    <hr/>
                </div>
                <div className={"navigation-pill-container"}>
                    <ComponentsNavigationPill
                        pillClick={this.props.switchScreen}
                        pillRoute={ConstantsRoutes.OVERVIEW_SCREEN}
                        isPillActive={currentScreen === ConstantsRoutes.OVERVIEW_SCREEN}
                        pillIcon={<Overview className={"navigation-icon"} fontSize={'inherit'} color={'inherit'}/>}
                        pillText={"Overview"}/>
                    <ComponentsNavigationPill
                        pillClick={this.props.switchScreen}
                        pillRoute={ConstantsRoutes.ACCOUNT_SCREEN}
                        isPillActive={currentScreen === ConstantsRoutes.ACCOUNT_SCREEN}
                        pillIcon={<AccountBoxIcon className={"navigation-icon"} fontSize={'inherit'} color={'inherit'}/>}
                        pillText={"Accounts"}/>
                    <ComponentsNavigationPill
                        pillClick={this.props.switchScreen}
                        pillRoute={ConstantsRoutes.INSTANCE_SCREEN}
                        isPillActive={currentScreen === ConstantsRoutes.INSTANCE_SCREEN}
                        pillIcon={<DescriptionIcon className={"navigation-icon"} fontSize={'inherit'} color={'inherit'}/>}
                        pillText={"Instances"}/>
                    <ComponentsNavigationPill
                        pillClick={this.props.switchScreen}
                        pillRoute={ConstantsRoutes.SCRIPT_SCREEN}
                        isPillActive={currentScreen === ConstantsRoutes.SCRIPT_SCREEN}
                        pillIcon={<CodeIcon className={"navigation-icon"} fontSize={'inherit'} color={'inherit'}/>}
                        pillText={"Script Info"}/>
                </div>
                <div className={"collapse-container"} onClick={this.props.toggle}>
                    <IconButton color={'inherit'}>
                        <KeyboardArrowLeftIcon color={'inherit'}/>
                    </IconButton>
                </div>
            </div>
        );
    }

    renderHidden() {
        return (
            <div className={"navigation-wrapper-hidden"}>
                <div className={"navigation-title navigation-ninety-rotation-title"}>
                    AUTORUNE
                </div>
                <div className={"collapse-container-hidden"} onClick={this.props.toggle}>
                    <IconButton color={'inherit'}>
                        <KeyboardArrowRightIcon color={'inherit'}/>
                    </IconButton>
                </div>
            </div>
        );
    }

    render() {

        const { isOpen } = this.props;

        if (isOpen) {
            return this.renderFull();
        } else {
            return this.renderHidden();
        }

    }
}

function mapState(state) {
    const { isOpen, currentScreen } = state.Navigation;
    return { isOpen, currentScreen };
}

const actionCreators = {
    toggle: ActionsNavigation.toggle,
    switchScreen: ActionsNavigation.switchScreen
};

const ComponentsNavigation = connect(mapState, actionCreators)(ComponentNavigation);

export default ComponentsNavigation;