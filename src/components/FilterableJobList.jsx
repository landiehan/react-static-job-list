import React from 'react';
import FilterBar from './FilterBar';
import JobList from './JobList';

class FilterableJobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterLabels: [],
      searchBarHidden: true
    };

    this.handleFilterLabelChange = this.handleFilterLabelChange.bind(this);
    this.handleFilterLabelRemove = this.handleFilterLabelRemove.bind(this);
  }

  handleFilterLabelChange(filterLabel) {
    let newFilterLabels = this.state.filterLabels;
    if (this.state.filterLabels.indexOf(filterLabel) === -1) {
      newFilterLabels.push(filterLabel);
      this.setState({
        filterLabels: newFilterLabels,
        searchBarHidden: false
      })
    };  
  }

  handleFilterLabelRemove(filterLabel) {
    if (filterLabel === 'Clear') {
      this.setState({
        filterLabels: []
      });
      return;
    }
    let newFilterLabels = this.state.filterLabels;
    newFilterLabels.pop(filterLabel);
    this.setState({
      filterLabels: newFilterLabels
    })
  }
  
  render() {
    return (
      <div className='FilterableJobList'>
        <FilterBar
          filterLabels={this.state.filterLabels}
          hidden={this.state.searchBarHidden}
          onFilterLabelRemove={this.handleFilterLabelRemove}
        />
        <JobList 
          data={this.props.data}
          filterLabels={this.state.filterLabels}
          onFilterLabelChange={this.handleFilterLabelChange}
        />
      </div>
    )
  }
}

export default FilterableJobList;