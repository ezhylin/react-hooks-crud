import React from "react";
import Typography from "@material-ui/core/Typography";
import {Copyright} from "@material-ui/icons";

export const Footer = () => {
  return (
    <footer style={{
      background: '#ccc',
      textAlign: 'center',
    }}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </footer>
  )
}