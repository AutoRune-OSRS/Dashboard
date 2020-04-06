import {
  autoruneCardHeader,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  grayColor
} from "material-kit/assets/jss/material-dashboard-react.js";

const cardIconStyle = {
  cardIcon: {
    "&$autoruneCardHeader,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      borderRadius: "3px",
      backgroundColor: grayColor[0],
      padding: "5px",
      marginTop: "-20px",
      marginRight: "15px",
      float: "left",
      border: "1px solid white",
    }
  },
  autoruneCardHeader,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader
};

export default cardIconStyle;
