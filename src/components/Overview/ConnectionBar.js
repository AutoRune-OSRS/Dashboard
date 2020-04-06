import React, {Component, forwardRef} from "react";

import "stylesheets/Overview/ConnectionBar.css";

import ActionsConnection from "actions/Connection";
import {connect} from "react-redux";
import ConstantsConnection from "constants/Connection";
import {PulseLoader} from "react-spinners";
import HelpersConnection from "helpers/Connection";


class ComponentOverviewConnectionBar extends Component {

    constructor(props) {

        super(props);

        this.state = {
            ip: this.props.ipAddress,
            port: this.props.port
        };

        this.handleChange = this.handleChange.bind(this);

        this.handleConnect = this.handleConnect.bind(this);
        this.handleDisconnect = this.handleDisconnect.bind(this);
        this.handleTest = this.handleTest.bind(this);

        this.renderDisconnected = this.renderDisconnected.bind(this);
        this.renderConnected = this.renderConnected.bind(this);
        this.renderWaiting = this.renderWaiting.bind(this);

    }

    componentDidMount() {



    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleConnect(e) {

        e.preventDefault();

        const { ip, port } = this.state;

        if (ip && port)
            this.props.connect(ip, port);


    }

    handleDisconnect() {

        this.props.disconnect(true, true);

    }

    handleTest() {

        const { ip, port } = this.state;

        if (ip && port)
            this.props.test(ip, port);

    }

    renderDisconnected() {

        const { ip, port } = this.state;

        const { connectionResponse } = this.props;

        let responseMessage = HelpersConnection.connectResponseMessage(connectionResponse);

        return (
            <form className="connection-form" id="connection-form" autoComplete="on" onSubmit={this.handleConnect}>
                <h2 className={"connection-item connection-title"}>Client Connection</h2>

                <div className={"connection-input-wrapper"}>
                    <input className={"connection-item connection-input connection-ip"} type="text" name="ip" placeholder="Ip Address" value={ip} autoComplete="ip" onChange={this.handleChange} required />
                    <input className={"connection-item connection-input connection-port"} type="text" name="port" placeholder="Port" value={port} autoComplete="port" onChange={this.handleChange} required />
                </div>


                <div className={"connection-item connection-buttons-wrapper"}>

                    <input type="submit" value={"Connect"} className="connection-button connection-connect"/>

                    <button type="button" className="connection-button connection-test" onClick={this.handleTest}>
                        Test
                    </button>

                </div>

                {responseMessage}
            </form>
        );
    }

    renderConnected() {
        return <p className={"connection-centered-text connection-green-text"}>Connected</p>;
    }

    renderWaiting() {
        return (
            <div className={"connection-loader-wrapper"}>
                <PulseLoader
                    css={'override'}
                    sizeUnit={"px"}
                    size={20}
                    margin={'8px'}
                    color={'#979797'}
                />
            </div>
        );
    }

    render() {

        const { connectionState } = this.props;

        let connectionBody;

        if (connectionState === ConstantsConnection.CONNECTION_CONNECT
            || connectionState === ConstantsConnection.CONNECTION_TEST
            || connectionState === ConstantsConnection.CONNECTION_DISCONNECT)
            connectionBody = this.renderWaiting();

        else if (connectionState === ConstantsConnection.CONNECTION_CONNECTED)
            connectionBody = this.renderConnected();

        else
            connectionBody = this.renderDisconnected();

        return (
            <div className={"overview-connection-footer"} style={{width: this.props.width}} ref={this.props.myForwardedRef}>
                {connectionBody}
            </div>
        );

    }

}

function mapState(state) {
    const { ipAddress, port, connectionState, connectionResponse } = state.Connection;
    return { ipAddress, port, connectionState, connectionResponse };
}

const actionCreators = {
    connect: ActionsConnection.connect,
    disconnect: ActionsConnection.disconnect,
    test: ActionsConnection.test
};

const ComponentsOverviewConnectionBar = connect(mapState, actionCreators, null, { forwardRef: true })(ComponentOverviewConnectionBar);

export default forwardRef((props, ref) =>
    <ComponentsOverviewConnectionBar {...props} myForwardedRef={ref} />
);