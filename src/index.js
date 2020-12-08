import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import {blueGrey} from '@material-ui/core/colors';
/* hello */

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#b92b27'
        },
        secondary: {
            main: '#0F0C00'
        },

    },
    typography: {
        fontFamily: "'Montserrat', ",
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700
    }
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App id="product-sans"/>
    </ThemeProvider>,


    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
