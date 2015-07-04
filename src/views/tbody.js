import React from 'react';

function renderTBody(rowHeight, visibleIndices) {
  let nodes = visibleIndices.map((index, i)=> {
    // hack to get tables to look nice by setting col width
    let tdStyle = {width: (window.innerWidth / 3) + 'px'};
    let top = index * rowHeight;
    let trStyle = {
      position: 'absolute',
      top: top + 'px',
      width: '100%',
      borderBottom: '1px solid grey'
    };

    return (
      <tr style={trStyle} key={i}>
        <td style={tdStyle}>{String(index)}</td>
        <td style={tdStyle}>{String(index * 10)}</td>
        <td style={tdStyle}>{String(Math.floor(Math.random() * 100))}</td>
      </tr>
    );
  });

  return (
    <tbody>
      {nodes}
    </tbody>
  );
};

export default renderTBody;
