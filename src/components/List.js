import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class List extends Component {

  render() {
    // if (!Array.isArray(this.props.items)) {
    //   console.warn('List component expects an array in prop named items');
    // }
    return (
      <div>
        <ul>
          {
            this.props.items.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
        </ul>
        {
          !this.props.items.length &&
          <h5>the list is empty</h5>
        }
      </div>
    )
  }
}

List.propTypes = {
  items: PropTypes.array
};

List.defaultProps = {
  items: []
};