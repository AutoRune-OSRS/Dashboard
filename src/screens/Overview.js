import React, {Component} from 'react';

import { connect } from "react-redux";

import { withSize } from "react-sizeme";

import "stylesheets/global.css";
import "stylesheets/Overview/Overview.css"

import ComponentsOverviewCardBar from "components/Overview/CardBar";
import ComponentsOverviewConnectionBar from "components/Overview/ConnectionBar";
import ComponentsOverviewGraphBar from "components/Overview/GraphBar";



class ScreenOverview extends Component {

    _isMounted = false;

    constructor(props) {

        super(props);

        this.state = {
            connectionBarHeight: 0,
            cardBarHeight: 0
        };

        this.connectionBar = React.createRef();
        this.cardBar = React.createRef();

    }

    updateHeight() {
        const self = this;
        setTimeout(function () {
            if (self._isMounted) {
                self.setState({
                    connectionBarHeight: self.getConnectionBarHeight(),
                    cardBarHeight: self.getCardBarHeight()
                });
            }
        }, 10);
    }

    componentDidMount() {
        this._isMounted = true;
        this.updateHeight();
        window.addEventListener("resize", this.updateHeight.bind(this));
    }

    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener("resize", this.updateHeight.bind(this));
    }

    getConnectionBarHeight() {
        if (this.connectionBar && this.connectionBar.current)
            return this.connectionBar.current.clientHeight;
    }

    getCardBarHeight() {
        if (this.cardBar && this.cardBar.current)
            return this.cardBar.current.clientHeight;
    }

    render() {

        const {width, height} = this.props.size;

        const { connectionBarHeight, cardBarHeight } = this.state;

        const newHeight = (height && connectionBarHeight) ?  (height - connectionBarHeight) : height;

        let screenClass;
        if (this.props.isOpen)
            screenClass = "screen screen-nav-open";
        else
            screenClass = "screen screen-nav-collapsed";

        return (
            <div className={screenClass} style={{visibility: width && width < 270 ? 'hidden' : 'visible'}}>
                <div className={"overview-screen-content"} style={{height: newHeight}}>
                    <ComponentsOverviewCardBar ref={this.cardBar}/>
                    <ComponentsOverviewGraphBar realHeight={height-cardBarHeight-connectionBarHeight}/>
                </div>
                <ComponentsOverviewConnectionBar width={width} ref={this.connectionBar}/>
            </div>
        );

    }

}

function mapState(state) {
    const { isOpen } = state.Navigation;
    return { isOpen };
}

const ScreensOverview = connect(mapState)(withSize({monitorHeight: true})(ScreenOverview));

export default ScreensOverview;