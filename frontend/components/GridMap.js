import React from "react";

function GridMap(props) {
  const { wheel } = props;
  const grid = [
    <div className="cog" style={{ "--i": 0 }}></div>,
    <div className="cog" style={{ "--i": 1 }}></div>,
    <div className="cog" style={{ "--i": 2 }}></div>,
    <div className="cog" style={{ "--i": 3 }}></div>,
    <div className="cog" style={{ "--i": 4 }}></div>,
    <div className="cog" style={{ "--i": 5 }}></div>,
  ];

  return grid.map((item, index) => {
    if (index === wheel) {
      return (
        <div className="cog active" style={{ "--i": index }}>
          B
        </div>
      );
    } else {
      return <div className="cog" style={{ "--i": index }}></div>;
    }
  });
}

export default GridMap;
