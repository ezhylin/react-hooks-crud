import React from "react";

export const UserInfo = ({ email, onLogout }) => (
  <div>
    <div>{ email }</div>
    <button type="button" onClick={onLogout}>log out</button>
  </div>
);