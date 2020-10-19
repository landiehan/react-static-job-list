import React from 'react';
import FilterableLabel from './FilterableLabel';

class JobLabel extends React.Component {
  render() {
    const labels = this.props.labels;
    const filterableLabels = [];

    labels.forEach(label => {
      filterableLabels.push(
        <FilterableLabel 
          key={label}
          label={label}
          onFilterLabelChange={this.props.onFilterLabelChange}
        />        
      )
    });

    return (
        <ul className='JobLabel'>
          {filterableLabels}   
        </ul> 
    );
  }    
}

export default JobLabel;