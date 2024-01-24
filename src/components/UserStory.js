import React, { useState } from 'react';

import './ProjectStyle.css';

function UserStory() {
  const [userStory, setUserStory] = useState('');
  const [Project, setProject] = useState('');
  const [priority, setPriority] = useState('0');

  const projects = ['MRI Diagnosis', '5G Packet Loss', 'Project A']; 
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="project-container">
      

      <form onSubmit={handleSubmit}>
      <h2>Create a User Story</h2>

        <label htmlFor="userStory">User Story:</label>

        <textarea
          id="userStory"
          value={userStory}
          onChange={(e) => setUserStory(e.target.value)}
        ></textarea>

        <label htmlFor="project">Project:</label>
        <select
          id="project"
          value={Project}
          onChange={(e) => setProject(e.target.value)}
        >
          <option value="">Select Project</option>
          {projects.map((project) => (
            <option key={project} value={project}>
              {project}
            </option>
          ))}
        </select>

        <label htmlFor="priority">Priority:</label>
        <input
          type="number"
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
<br/>
        <button type="submit">Create User Story</button>
      </form>
    </div>
  );
}

export default UserStory;
