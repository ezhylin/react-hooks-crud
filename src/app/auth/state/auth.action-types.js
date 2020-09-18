const actionPrefix = actionType => `Auth: ${actionType}`;

export const LOG_IN = actionPrefix`LOG_IN`;
export const LOG_OUT = actionPrefix`LOG_OUT`;

export const authActionTypes = {
  LOG_IN,
  LOG_OUT,
}