import React from 'react';
import JobIntro from './JobIntro';
import JobLabel from './JobLabel';
import '../sass/JobCard.scss'

class JobCard extends React.Component {
  render() {
    const jobCard = []; // A complete singe job card collection
    const job = this.props.job;
    
    jobCard.push(
      <JobIntro
        key={job.company}
        logo={job.logo}
        company={job.company}
        position={job.position}
        postedAt={job.postedAt}
        contract={job.contract}
        location={job.location}
        new={job.new}
        featured={job.featured}
      />,
      <JobLabel 
        key={job.id}
        labels={this.props.labels}
        onFilterLabelChange={this.props.onFilterLabelChange}
      />
    );
    
    let className = 'Job';
    if (job.featured) {
      className = 'Job Job--featured';
    }

    return (
      <div className={className}>
        {jobCard}
      </div>
    )
  }
}

export default JobCard;