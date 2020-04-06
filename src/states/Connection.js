import ConstantsConnection from "constants/Connection";

let StatesConnection = {
    ipAddress: 'localhost',
    port: '5150',
    connectionState: ConstantsConnection.CONNECTION_DISCONNECTED,
    connectionResponse: ConstantsConnection.CONNECTION_NO_RESPONSE,
};

export default StatesConnection;