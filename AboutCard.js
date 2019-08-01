import React, { Component }  from 'react';

class AboutCard extends Component {
  render () {
    return (
      <div className="about-card">
        <h3>{this.props.name}</h3>
        <ul>
          <li>Age: {this.props.age}</li>
          <li>Hobbies: {this.props.hobbies}</li>
        </ul>
        <div className="likes-wrapper">
          <div className="likes">
            {this.props.likes}
          </div>
          <button className="btn" onClick={() => this.props.modifyLikes(this.props.id, 1)}>
            +
          </button>
          <button className="btn" onClick={() => this.props.modifyLikes(this.props.id, -1)}>
            -
          </button>
        </div>
      </div>
    )
  }
}

export default AboutCard