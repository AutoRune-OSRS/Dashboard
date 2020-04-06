import React from "react";

import CardHeader from "material-kit/components/Card/CardHeader";
import CardIcon from "material-kit/components/Card/CardIcon";
import Icon from "@material-ui/core/Icon";
import CardFooter from "material-kit/components/Card/CardFooter";
import Warning from "@material-ui/icons/Warning";
import Card from "material-kit/components/Card/Card";
import Danger from "material-kit/components/Typography/Danger";

import "stylesheets/Overview/CardBar.css"

import { makeStyles } from "@material-ui/core/styles";
import StylesOverview from "stylesheets/Overview/Overview";
const useCardStyles = makeStyles(StylesOverview);

function ComponentsOverviewCard(props) {

    const cardClasses = useCardStyles();

    const { overviewCardTitle, overviewCardStat, overviewCardFooterText, overviewCardIcon, overviewCardRedirect } = props;

    return (

        <Card className={"overview-card"}>
            <CardHeader color="warning" stats icon>
                <CardIcon color="autorune">
                    <Icon>{overviewCardIcon}</Icon>
                </CardIcon>
                <p className={cardClasses.cardTitle}>{overviewCardTitle}</p>
                <h1 className={cardClasses.cardStat}>
                    {overviewCardStat}
                </h1>
            </CardHeader>
            <CardFooter stats>
                <div className={cardClasses.cardFooter}>
                    <Danger>
                        <Warning />
                    </Danger>
                    <a target={"_"} href={overviewCardRedirect}>
                        <p className={"overview-card-footer-text"}>{overviewCardFooterText}</p>
                    </a>
                </div>
            </CardFooter>
        </Card>

    );

}

export default ComponentsOverviewCard;