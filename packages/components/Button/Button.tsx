import React from 'react';

interface Props {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button = ({label, onClick, className}: Props): JSX.Element => {
  return (<button className={className} onClick={onClick}>{label}</button>)
}

export default Button;
