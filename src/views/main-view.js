import React from 'react';

import {handleOnScroll} from '../intents/user-scroll';

import renderTHead from './thead';
import renderTBody from './tbody';

function view(state$) {
  let react$ = state$.map(({
    tableHeight,
    rowHeight,
    columns,
    rowCount,
    visibleIndices
  }) => {
    let staticHeaderTableStyle = {
      overflowX: 'hidden',
      borderBottom: '1px solid black'
    };

    let scrollTableContainerStyle = {
      position: 'relative',
      overflowX: 'hidden',
      borderBottom: '1px solid black',
      height: tableHeight + 'px',
    };

    return (
      <div id="app-container">
        <div className="static-header-table-container">
          <table
            className="static-header-table" style={staticHeaderTableStyle}>
            {renderTHead(columns)}
          </table>
        </div>
        <div className="scroll-table-container" style={scrollTableContainerStyle} onScroll={handleOnScroll}>
          <table className="scroll-table" style={{height: rowCount * rowHeight + 'px'}}>
            {renderTBody(rowHeight, visibleIndices)}
          </table>
        </div>
      </div>
    );
  });

  return react$;
}

export default view;
