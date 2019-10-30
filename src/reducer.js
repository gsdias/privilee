/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 */

import {
    UPDATE_NAME_FILTER,
    UPDATE_DISCOUNT_FILTER,
  } from './constants';
  import { fromJS } from 'immutable';
  
  // The initial state of the App
  const initialState = fromJS({
    discountFilter: '',
    nameFilter: ''
  });
  
  function appReducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_NAME_FILTER:
        return state
          .set('nameFilter', action.value);
      case UPDATE_DISCOUNT_FILTER:
        return state
          .set('discountFilter', action.value);
      default:
        return state;
    }
  }
  
  export default appReducer;
  