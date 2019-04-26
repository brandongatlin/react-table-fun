import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import data from "./MOCK_DATA.json";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align='right'>eMail</TableCell>
            <TableCell align='right'>First Name</TableCell>
            <TableCell align='right'>Gender</TableCell>
            <TableCell align='right'>IP Address</TableCell>
            <TableCell align='right'>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell align='right'>{row.email}</TableCell>
              <TableCell align='right'>{row.first_name}</TableCell>
              <TableCell align='right'>{row.gender}</TableCell>
              <TableCell align='right'>{row.ip_address}</TableCell>
              <TableCell align='right'>{row.last_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
