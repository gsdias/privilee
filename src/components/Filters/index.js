import React from 'react';
import { connect } from 'react-redux';
import { filterName, filterDiscount } from './actions';


function Filters({ updateNameFilter, updateDiscountFilter, nameFilter, discountFilter }) {
  return (<>
      <input type="text" value={nameFilter} onChange={updateNameFilter} />
      <select value={discountFilter} onChange={updateDiscountFilter} >
        <option></option>
        <option>25</option>
        <option>50</option>
        <option>75</option>
      </select>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    updateNameFilter: (evt) => dispatch(filterName(evt.target.value)),
    updateDiscountFilter: (evt) => dispatch(filterDiscount(evt.target.value)),
    dispatch,
  };
}

function mapStateToProps(state) {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);