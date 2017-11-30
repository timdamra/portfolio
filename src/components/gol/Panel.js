import React from 'react';

export default class Panel extends React.Component {
  handleSelect = evt => {
    this.props.gridSize(evt);
  };

  render() {
    return (
      <div className="center">
        <div>
          <button className="btn btn-default" onClick={this.props.playButton}>
            Start
          </button>
          <button className="btn btn-default" onClick={this.props.pauseButton}>
            Pause
          </button>
          <button className="btn btn-default" onClick={this.props.clear}>
            Clear
          </button>
          <button className="btn btn-default" onClick={this.props.slow}>
            Slow
          </button>
          <button className="btn btn-default" onClick={this.props.fast}>
            Fast
          </button>
          <button className="btn btn-default" onClick={this.props.seed}>
            ReGenerate
          </button>
        </div>
      </div>
    );
  }
}
