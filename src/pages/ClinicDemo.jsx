import { useState } from 'react';

function ClinicDemo() {
  const [response, setResponse] = useState("");

  const testChatbaseAPI = async () => {
    // This is where you'll practice your 'await fetch' logic
    console.log("Calling Chatbase...");
    // Future API code goes here
  };

  return (
    <div style={{ padding: '50px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <h1>Maple Leaf Health Clinic - AI Demo</h1>
      <p>This is a private development environment for testing the AI integration.</p>
      
      <button onClick={testChatbaseAPI} className="button-primary">
        Test AI Connection
      </button>
      
      <div style={{ marginTop: '20px', background: 'white', padding: '20px' }}>
        <strong>AI Says:</strong> {response || "Waiting for interaction..."}
      </div>
    </div>
  );
}

export default ClinicDemo;