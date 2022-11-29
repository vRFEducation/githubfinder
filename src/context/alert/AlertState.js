import React, { useReducer } from 'react';

import AlertReducer from './AlertReducer';
import AlertContext from './alertContext';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = null;

  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { message, type }
    });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 3000);
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
