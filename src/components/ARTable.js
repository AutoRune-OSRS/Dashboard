import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Icon from "@material-ui/core/Icon";
// core components
import styles from "material-kit/assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

function ARTable(props) {

    const classes = useStyles();

    const {tableHead, tableData, tableEditFunction, tableDeleteFunction, width} = props;

    return (
        <div className={classes.tableResponsive}>
            <Table className={classes.table}>
                {tableHead !== undefined ? (
                    <TableHead className={classes["autoruneTableHeader"]}>
                        <TableRow className={classes.tableHeadRow}>
                            {tableHead.map((prop, key) => {
                                if (width < 450 && prop === "Status")
                                    return null;
                                return (
                                    <TableCell
                                        className={classes.tableCell + " " + classes.tableHeadCell}
                                        align={"center"}
                                        key={key}
                                    >
                                        {prop}
                                    </TableCell>
                                );
                            })}
                            <TableCell className={classes.tableCell + " " + classes.tableHeadCell} key={3} align={"center"}>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                ) : null}
                <TableBody>
                    {tableData.map((prop, key) => {
                        return (
                            <TableRow key={key} className={classes.tableBodyRow}>
                                {prop.map((prop, key) => {
                                    if (width < 450 && key === 2)
                                        return null;
                                    return (
                                        <TableCell className={classes.tableCell} key={key} align={"center"}>
                                            {prop}
                                        </TableCell>
                                    );
                                })}
                                <TableCell className={classes.tableCell} key={3} align={"center"}>
                                    <div className={'account-form-action-wrapper'}>
                                        <Icon className={'account-form-action-edit'} onClick={() => tableEditFunction(key)}>edit</Icon>
                                        <Icon className={'account-form-action-delete'} onClick={() => tableDeleteFunction(key)}>delete</Icon>
                                    </div>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}

ARTable.propTypes = {
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    tableEditFunction: PropTypes.func,
    tableDeleteFunction: PropTypes.func
};

export default ARTable;