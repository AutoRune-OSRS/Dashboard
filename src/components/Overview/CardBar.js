import React, {forwardRef} from "react";

import "stylesheets/Overview/CardBar.css";
import ComponentsOverviewCard from "./OverviewCard";
import {connect} from "react-redux";


function ComponentOverviewCardBar(props) {

    const { maxInstances, usedInstances, runningBots, maxAccounts, usedAccounts, userCredits } = props;

    return (
        <div className={"overview-card-bar"} ref={props.myForwardedRef}>

            <ComponentsOverviewCard overviewCardTitle={"Used Instances"} overviewCardStat={usedInstances+"/"+maxInstances}
                                    overviewCardFooterText={"Buy more instances"} overviewCardIcon={"description"} overviewCardRedirect={"http://autorune.io"} />

            <ComponentsOverviewCard overviewCardTitle={"Used Accounts"} overviewCardStat={usedAccounts+"/"+maxAccounts}
                                    overviewCardFooterText={"Buy more accounts"} overviewCardIcon={"account_box"} overviewCardRedirect={"http://autorune.io"} />

            <ComponentsOverviewCard overviewCardTitle={"Bots Running"} overviewCardStat={runningBots+"/"+usedInstances}
                                    overviewCardFooterText={"Bot help"} overviewCardIcon={"computer"} overviewCardRedirect={"http://autorune.io"} />

            <ComponentsOverviewCard overviewCardTitle={"Current Credits"} overviewCardStat={userCredits}
                                    overviewCardFooterText={"Buy more credits"} overviewCardIcon={"account_balance"} overviewCardRedirect={"http://autorune.io"} />

        </div>
    );

}

function mapState(state) {
    const { userCredits } = state.Overview;
    const { maxInstances, usedInstances, runningBots } = state.Instances;
    const { maxAccounts, usedAccounts } = state.Account;
    return { maxInstances, usedInstances, runningBots, maxAccounts, usedAccounts, userCredits };
}

const ComponentsOverviewCardBar = connect(mapState, null, null, { forwardRef: true })(ComponentOverviewCardBar);

export default forwardRef((props, ref) =>
    <ComponentsOverviewCardBar {...props} myForwardedRef={ref} />
);