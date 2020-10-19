import React from 'react';

class FilterableLabel extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    /** lift up the filter label */
    this.props.onFilterLabelChange(e.target.innerHTML);
  }

  render() {
    return (
      <li className='JobLabel__label'
        onClick={this.handleOnClick}
      >
        {this.props.label}
      </li>
    )
  }
}

export default FilterableLabel;