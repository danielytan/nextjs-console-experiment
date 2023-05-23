"use client"

import { useState } from 'react';
import Link from 'next/link';

const ConsolePage = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Process the command and update the output state
    // You can implement your own logic here

    // Clear the input field
    setCommand('');
  };

  return (
    <div className="container">
      <h1>Console</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={command}
          onChange={handleInputChange}
          placeholder="Enter a command..."
        />
        <button type="submit">Submit</button>
      </form>
      <pre>{output}</pre>
      <Link href="/" passHref>
        Go to Home
      </Link>
    </div>
  );
};

export default ConsolePage;
