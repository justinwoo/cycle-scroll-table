import React from 'react';

function renderTHead(columns) {
  let thStyle = {width: (window.innerWidth / 3) + 'px'};
  let nodes = columns.map((value, i) => <th key={i} style={thStyle}>{value}</th>);
  return (
    <thead>
      {nodes}
    </thead>
  );
}

export default renderTHead;
