import React from 'react';

class JobIntro extends React.Component {
  render() {
    return (
      <section className='JobIntro'>
        <div className='JobIntro__logo'>
          <img 
            src={this.props.logo}
            alt={'logo of ' + this.props.company + '.'}
          />
        </div>
        <div className='JobIntro__detail'>
          <p className='JobIntro__detail__company'>
            {this.props.company}
            {this.props.new &&
              <span className='JobIntro__detail__new'>
                New!
              </span>
            }
            {this.props.featured &&
              <span className='JobIntro__detail__featured'>
                Featured
              </span>
            }
          </p>
          <p className='JobIntro__detail__position'>
            {this.props.position}
          </p>
          <ul className='JobIntro__detail__features'>
            <li>{this.props.postedAt}</li>
            <li>{this.props.contract}</li>
            <li>{this.props.location}</li>
          </ul>
        </div>
      </section>
    )
  }
}

export default JobIntro;