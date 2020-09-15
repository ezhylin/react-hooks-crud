import React, {useEffect, useRef, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

export const LoginForm = ({ onSubmit }) => {
  const initialState = { email: '', password: '' };
  const [credentials, setCredentials] = useState(initialState);
  const emailInputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(credentials);
    setCredentials(initialState);
  };

  const handleChange = ({ target }) => {
    const nextCredentials = {
      ...credentials,
      [target.name]: target.value,
    };

    setCredentials(nextCredentials);
  }

  useEffect(() => {
    emailInputRef.current.focus();
  }, [])


  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ padding: '2rem 0' }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
      >
        <form noValidate onSubmit={handleSubmit}>
          <Typography component="h2" variant="h5" align="center">
            Sign in
          </Typography>
          <div>
            <TextField
              type="email"
              id="credentials-email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              onChange={handleChange}
              value={credentials.email}
              inputRef={emailInputRef}
              required
            />
          </div>
          <div>
            <TextField
              type="password"
              id="credentials-password"
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              onChange={handleChange}
              value={credentials.password}
              required
            />
          </div>
          <Button type="submit" style={{ marginBottom: '2rem' }}>Sing in</Button>
          <Grid container justify="space-between">
            <Grid item>
              <Link to="/reset-password">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/sing-up">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}