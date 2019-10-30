import {
    UPDATE_NAME_FILTER,
    UPDATE_DISCOUNT_FILTER,
  } from '../../constants';
  
  export function filterName(value) {
    return {
      type: UPDATE_NAME_FILTER,
      value,
    };
  }
  
  export function filterDiscount(value) {
    return {
      type: UPDATE_DISCOUNT_FILTER,
      value,
    };
  }
  