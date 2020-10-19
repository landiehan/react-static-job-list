import React from 'react';
import '../sass/FilterBar.scss';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    this.props.onFilterLabelRemove(e.target.innerHTML);
  }

  render() {
    const filterLabels = [];
    this.props.filterLabels.forEach(label => {
      filterLabels.push(
        <li className='FilterBar__label'
          onClick={this.handleOnClick}
        >
          <span>{label}</span> 
        </li>
      )
    })

    let className = 'FilterBar';
    if (this.props.hidden) {
      className = 'FilterBar FilterBar--hidden';
    };

    return (
      <div className={className}>
        <ul className='FilterBar__label--wrapper'>
          {filterLabels}
        </ul>
        <div className='FilterBar__clear'>
          <span onClick={this.handleOnClick}>
            Clear
          </span>
        </div>
      </div>
    )
  }
}

export default FilterBar;