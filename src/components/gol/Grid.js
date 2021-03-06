import React, { Component } from 'react';

import Box from './Box';

export default class Grid extends Component {
  render() {
    var xy = this.props.cols * 14;
    var rowsArr = [];
    var width = xy;
    var boxClass = '';

    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.cols; j++) {
        let boxId = i + '_' + j;

        boxClass = this.props.gridFull[i][j] ? 'box on' : 'box off';
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        );
      }
    }

    return (
      <div style={{ width }} className="grid" id="grid">
        {rowsArr}
      </div>
    );
  }
}
