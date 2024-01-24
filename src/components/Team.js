import React, { useState } from 'react';
import './ProjectStyle.css';

function Team() {
  const [teamName, setTeamName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="project-container">

      <form onSubmit={handleSubmit}>
      <h2>Create Team for the Project</h2>
        <label htmlFor="Name">Team Name:</label>
        <input
          type="text"
          id="Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
<br/>
        <button type="submit">Create Team</button>
      </form>
    </div>
  );
}

export default Team;
