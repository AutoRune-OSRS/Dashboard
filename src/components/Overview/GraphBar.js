import React from "react";

import "stylesheets/Overview/GraphBar.css";

import ComponentsOverviewGraph from "components/Overview/OverviewGraph";
import {connect} from "react-redux";

function ComponentOverviewGraphBar(props) {

    const { lastGraphsUpdateTime, profitGraph, projectedProfitGraph } = props;

    const currentTime = new Date();

    const timePassed = currentTime.getMinutes() - lastGraphsUpdateTime.getMinutes();

    return (
        <div className={"overview-graph-bar"} style={{height: props.realHeight}}>

            <ComponentsOverviewGraph overviewGraphTitle={"GP Profits"} overviewGraphStat={profitGraph["stat"]}
                                     overviewGraphFooterText={"Updated "+timePassed+" minutes ago"} chartData={profitGraph["data"]}/>

            <ComponentsOverviewGraph overviewGraphTitle={"Projected GP Profits"} overviewGraphStat={projectedProfitGraph["stat"]}
                                     overviewGraphFooterText={"Updated "+timePassed+" minutes ago"} chartData={projectedProfitGraph["data"]}/>

        </div>
    );

}

function mapState(state) {
    const { lastGraphsUpdateTime, profitGraph, projectedProfitGraph } = state.Overview;
    return { lastGraphsUpdateTime, profitGraph, projectedProfitGraph };
}

const ComponentsOverviewGraphBar = connect(mapState)(ComponentOverviewGraphBar);

export default ComponentsOverviewGraphBar;