import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import './Fonts.css'
import { Tab, Tabs } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: "#2D2926",
    color: "#ED6F63",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { value, setValue } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue)    
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Tabs value={value} onChange={handleChange}>
        <Tab label="Last7" value={0} />
        <Tab label="Intro" value={1} />
        <Tab label="Role" value={2} />
        </Tabs>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};