import React from 'react';
import ButtonAppBar from '../ButtonAppBar/ButtonAppBar';
import Grid from '@material-ui/core/Grid';
import './header.scss';
import logo from '../../logo.png';

export default function Header() {
  return (
    <React.Fragment>
        <ButtonAppBar />
        <div className="header-bg-image">
            <Grid container spacing={3}>
                <Grid item xs>
                    <img className="logo-header" src={logo} />
                </Grid>
                <Grid item xs>
                    Texto
                </Grid>
            </Grid>
        </div>
    </React.Fragment>
  );
}
