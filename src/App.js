import React, { Component } from 'react';
import ButtonAppBar from './TopAppBar';
import Paper from '@material-ui/core/Paper';
import Hello from './Hello';
import './style.css';
import { render } from 'react-dom';
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";



export default function App(props) {
    const name = "React";

  
    return (
      <>
      <CssBaseline />
      <ButtonAppBar/>
      <Box m={10}>
        <div>
            <Hello name="react"/>
            <p>
            Start editing to see some magic happen :)
            </p>
        </div>
      </Box>
      </>
    );
  
}
