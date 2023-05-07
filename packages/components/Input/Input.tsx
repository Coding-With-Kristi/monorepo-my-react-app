import React, {useState, ChangeEventHandler} from 'react';

interface Props {
  placeholder?: string;
  onValueChange: (value: string) => void;
}

const Input = ({placeholder = '', onValueChange}: Props): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const onChange = (e:  React.ChangeEvent<HTMLInputElement>): void => {
    const v = e.target.value;
    setValue(v)
    onValueChange(v)
  }


  return (<input type={"text"} placeholder={placeholder} onChange={onChange} value={value}/>)
}

export default Input;
