import React from 'react';

interface Props {
  label: string;
}

const Text = ({label}: Props): JSX.Element => {
  return (<p>{label}</p>)
}

export default Text;
