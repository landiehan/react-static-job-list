import React from 'react';
import JobCard from './JobCard';

class JobList extends React.Component {
  render() {
    const jobs = [];

    this.props.data.forEach(job => {
      const labels = [];
      labels.push(
        job.role,         
        job.level,
      );
      job.languages.forEach(lang => {
        labels.push(lang);      
      })

      let hidden = false;
      this.props.filterLabels.forEach(filterLabel => {
        if (labels.indexOf(filterLabel) === -1) {
          hidden = true;
          return;
        }
      });

      !hidden && jobs.push(
          <JobCard
            key={job.id}
            job={job}
            labels={labels}
            onFilterLabelChange={this.props.onFilterLabelChange}
          />
        )        
      }
    );

    return (
      <div className='JobList'>
        {jobs}
      </div>
    )
  }
}

export default JobList;