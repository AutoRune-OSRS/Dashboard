import ConstantsConnection from "constants/Connection";
import React from "react";



/**
 * @return {null}
 */
function HelpersConnectionConnectResponseMessage(response) {
    switch (response) {
        case ConstantsConnection.CONNECTION_TEST_SUCCESSFUL:
            return <p className={"connection-response-text connection-green-text"}>Test Successful</p>;
        case ConstantsConnection.CONNECTION_TEST_FAILURE:
            return <p className={"connection-response-text connection-red-text"}>Test Failed</p>;
        case ConstantsConnection.CONNECTION_CONNECT_FAILURE:
            return <p className={"connection-response-text connection-red-text"}>Connection Failed</p>;
        default:
            return null;
    }
}

const HelpersConnection = {
    connectResponseMessage: HelpersConnectionConnectResponseMessage
};

export default HelpersConnection;