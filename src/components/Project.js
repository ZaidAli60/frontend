import React, { useState } from 'react';
import './ProjectStyle.css';

function Project() {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [productOwner, setProductOwner] = useState('');
  const [manager, setManager] = useState('');
  const [team, setTeam] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="project-container">

      <form onSubmit={handleSubmit}>

      <h2>Create a New Project</h2>

        <label htmlFor="projectName">Project Name:</label>
        <br/>

        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <label htmlFor="projectDescription">Project Description:</label>
        <textarea
          id="projectDescription"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        ></textarea>

        <label htmlFor="productOwner">Product Owner:</label>

        <select
          id="productOwner"
          value={productOwner}
          onChange={(e) => setProductOwner(e.target.value)}
        >
          <option value="">Select Product Owner</option>
          <option value="Harry">Harry</option>
          <option value="John">John</option>
         
        </select>

        <label htmlFor="mgr">Manager:</label>
        <select
          id="mgr"
          value={manager}
          onChange={(e) => setManager(e.target.value)}
        >
          <option value="">Select Manager</option>
          <option value="Ishaq">Ishaq</option>
          <option value="Jamal">Jamal</option>
          <option value="Arbab">Arbab</option>
        </select>

        <label htmlFor="team">Team:</label>

        <select
          id="team"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        >
          <option value="">Select Team</option>
          <option value="Team 1">E2E</option>
          <option value="Team 2">Ex</option>

        </select>
<br/>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default Project;
