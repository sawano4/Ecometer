import React from 'react';

const Drop = ({ onClick }) => {
  return (
    <svg
      width="23"
      height="10"
      viewBox="0 0 23 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <path
        d="M1 1L6.14839 5L11.2968 9L16.6484 5L22 1"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Drop;
