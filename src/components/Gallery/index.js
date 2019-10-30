import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Item from '../Item';

class Gallery extends Component {
  state = { list: [] };
  componentDidMount = () => {
    this.applyFilter();
  };
  componentDidUpdate = (newProps) => {
    if (newProps.filters.nameFilter !== this.props.filters.nameFilter
     || newProps.filters.discountFilter !== this.props.filters.discountFilter) {
      this.applyFilter();
    }
  };
  applyFilter = () => {
    const { nameFilter, discountFilter } = this.props.filters;
    axios.get('/api', {
      params: {
        name: nameFilter,
        discount_percentage: discountFilter
      }
    }).then(({ data }) => {
      this.setState({ list: data });
    });
  };
  
  render = () => {
    const { list } = this.state;

    return (
        <ul>
          {list.map(({ id, image, name }) => <Item key={id} src={image} name={name} />)}
        </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    filters: {
      nameFilter: state.get('global').get('nameFilter'),
      discountFilter: state.get('global').get('discountFilter')
    }
  };
};

export default connect(mapStateToProps)(Gallery);