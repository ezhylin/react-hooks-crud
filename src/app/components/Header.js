import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import {UserInfo} from "../user";
import {authActions} from "../auth/state/auth.actions";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(({auth}) => auth.user);

  const handleLogout = () => {
    dispatch(authActions.logout());
    push('/sign-in');
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" style={{ color: 'inherit' }}>Courses</Link>
        </Typography>
        {
          !!user
            ? (
              <UserInfo {...user} onLogout={handleLogout}/>
            )
            : (
              <Button color="inherit" onClick={() => {
                push('/sign-in')
              }}>Login</Button>
            )
        }
      </Toolbar>
    </AppBar>
  );
}
