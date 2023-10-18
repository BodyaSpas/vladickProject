import React from 'react';




const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 26,
    width: '100%',
    backgroundColor: "#fff",
    borderRadius: 10,
    boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.15)"
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: "#FE724C",
    borderRadius: '14px',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div className='pogressBar' style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
};

export default ProgressBar;