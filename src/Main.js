import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default function Main(props) {
  const { title } = props;
  
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom style={{paddingLeft:"10px"}}>
        {title}
      </Typography>
      <Divider />
      <img src='./images/fire2.gif' alt="" style={{width:"100%"}}/>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};