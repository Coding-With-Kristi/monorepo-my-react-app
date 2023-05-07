import React from 'react';
import './App.css';
import Button from "@coding-with-kristi/components/Button";
import Text from "@coding-with-kristi/components/Text";
import Input from "@coding-with-kristi/components/Input/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          onClick={() => console.log('Button clicked')}
          label={'Click me!'}
        />
        <Text label={'This is a text'}/>
        <Input onValueChange={(value) => console.log(value)} />
      </header>
    </div>
  );
}

export default App;
