import React from "react";

import CardHeader from "material-kit/components/Card/CardHeader";
import CardFooter from "material-kit/components/Card/CardFooter";
import Card from "material-kit/components/Card/Card";

import "stylesheets/Overview/GraphBar.css"

import ChartistGraph from "react-chartist";
import profitChart from "components/Overview/ChartData";
import CardBody from "material-kit/components/Card/CardBody";

import StylesOverview from "stylesheets/Overview/Overview";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(StylesOverview);

function ComponentsOverviewGraph(props) {

    const classes = useStyles();

    const { overviewGraphTitle, overviewGraphStat, overviewGraphFooterText, chartData } = props;

    return (

        <Card chart className={"overview-graph"}>
            <CardHeader color="autorune" className={"overview-graph-header"}>
                <ChartistGraph
                    className="ct-chart"
                    data={chartData}
                    type="Line"
                    options={profitChart.options}
                    listener={profitChart.animation}
                />
            </CardHeader>
            <CardBody>
                <h4 className={classes.cardGraphTitle}>{overviewGraphTitle}</h4>
                <p className={classes.cardGraphStat}>
                    {overviewGraphStat}
                </p>
            </CardBody>
            <CardFooter chart>
                <div className={classes.cardFooter+" overview-graph-footer-text"}>
                    <p className={"overview-card-footer-text"}>{overviewGraphFooterText}</p>
                    {/*<AccessTime /><p> Updated 4 minutes ago </p>*/}
                </div>
            </CardFooter>
        </Card>

    );

}

export default ComponentsOverviewGraph;