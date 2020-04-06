import {Component} from "react";
import {connect} from "react-redux";
import ActionsInstance from "actions/Instance";
import servicesConnection from "services/Connection";
import ActionsConnection from "actions/Connection";
import ConstantsEvent from "constants/Event";
import ConstantsEventCommand from "constants/EventCommand";

class ComponentSocket extends Component {

    constructor(props) {
        super(props);
        this.setSocketListeners = this.setSocketListeners.bind(this);
    }

    componentDidMount() {
        const socket = servicesConnection.createSocket();
        this.setSocketListeners(socket);
    }

    setSocketListeners(socket) {

        socket.on(ConstantsEvent.ACCOUNT_CONTROL, (data) => {

            const jsonResponse = JSON.parse(data);

            const command = jsonResponse["command"];
            const instanceId = jsonResponse["instance_id"];
            const email = jsonResponse["email"];

            switch (command) {

                case ConstantsEventCommand.ACCOUNT_SELECT:
                    this.props.accountSelected(instanceId, email);
                    break;

                case ConstantsEventCommand.ACCOUNT_LOGIN:
                    this.props.accountLoggedIn(instanceId, "Logged In");
                    break;

                case ConstantsEventCommand.ACCOUNT_LOGOUT:
                    this.props.accountLoggedOut(instanceId, "Logged Out");
                    break;

                default:
                    break

            }

        });

        socket.on(ConstantsEvent.INSTANCE_CONTROL, (data) => {

            const jsonResponse = JSON.parse(data);

            const command = jsonResponse["command"];
            const instanceId = jsonResponse["instance_id"];

            switch (command) {

                case ConstantsEventCommand.INSTANCE_SELECT:
                    this.props.instanceSelected(instanceId);
                    break;

                case ConstantsEventCommand.INSTANCE_ADD:
                    this.props.instanceAdded(instanceId);
                    break;

                case ConstantsEventCommand.INSTANCE_REMOVE:
                    this.props.instanceRemoved(instanceId);
                    break;

                default:
                    break

            }

        });

        socket.on(ConstantsEvent.SCRIPT_CONTROL, (data) => {

            const jsonResponse = JSON.parse(data);

            const command = jsonResponse["command"];
            const instanceId = jsonResponse["instance_id"];
            const scriptId = jsonResponse["script_id"];

            switch (command) {

                case ConstantsEventCommand.SCRIPT_SELECT:
                    this.props.scriptSelected(instanceId, scriptId);
                    break;

                case ConstantsEventCommand.SCRIPT_START:
                    this.props.scriptStarted(instanceId);
                    break;

                case ConstantsEventCommand.SCRIPT_PAUSE:
                    this.props.scriptPaused(instanceId);
                    break;

                case ConstantsEventCommand.SCRIPT_STOP:
                    this.props.scriptStopped(instanceId);
                    break;

                default:
                    break

            }

        });

        const { ipAddress, port } = this.props;

        socket.on('disconnect', () => {
            this.props.connectionReset(true, false);
            this.props.instanceReset();
            this.props.connectionConnect(ipAddress, port);
        });

    }

    render() {
        return null;
    }

}

function mapState(state) {
    const { ipAddress, port } = state.Connection;
    return { ipAddress, port };
}

const actionCreators = {

    instanceSelected: ActionsInstance.selected,
    instanceAdded: ActionsInstance.added,
    instanceRemoved: ActionsInstance.removed,
    instanceReset: ActionsInstance.reset,

    accountSelected: ActionsInstance.accountSelected,
    accountLoggedIn: ActionsInstance.accountLoggedIn,
    accountLoggedOut: ActionsInstance.accountLoggedOut,

    scriptSelected: ActionsInstance.scriptSelected,
    scriptStarted: ActionsInstance.scriptStarted,
    scriptPaused: ActionsInstance.scriptPaused,
    scriptStopped: ActionsInstance.scriptStopped,

    connectionReset: ActionsConnection.disconnect,
    connectionConnect: ActionsConnection.connect

};

const ComponentsSocket = connect(mapState, actionCreators)(ComponentSocket);

export default ComponentsSocket;