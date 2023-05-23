"use client"

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const ConsolePage = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');
  const consoleRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Process the command and update the output state

    setOutput(prevOutput => prevOutput + '> ' + command + '\n');

    // Clear the input field
    setCommand('');
  };

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="container">
      <h1>Console</h1>
      <div className="console-window" ref={consoleRef}>
        <pre>{output}</pre>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={command}
          onChange={handleInputChange}
          placeholder="Enter a command..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ConsolePage;