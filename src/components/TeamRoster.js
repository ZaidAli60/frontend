import React, { useState } from 'react';
import './ProjectStyle.css';

function TeamRoster() {


  const [selectedTeam, setSelectedTeam] = useState('');

  const [selectedMember, setSelectedMember] = useState('');

  const teams = ['Ex', 'Next']; 
  const members = ['Marie', 'Hani']; 

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="project-container">



      <form onSubmit={handleSubmit}>
      <h2>Create TeamRoster</h2>
        <label htmlFor="team">Team:</label>
        
        <select
          id="team"
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
        
          <option value="">Select Team</option>
        
          {teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>

        <label htmlFor="member">Member:</label>
        <select
          id="member"
          value={selectedMember}
          onChange={(e) => setSelectedMember(e.target.value)}
        >
          <option value="">Select Member</option>
          {members.map((member) => (
            <option key={member} value={member}>
              {member}
            </option>
          ))}
        </select>
<br/>
        <button type="submit">Add to Roster</button>
      </form>
    </div>
  );
}

export default TeamRoster;
