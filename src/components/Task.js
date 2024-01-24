import React, { useState } from 'react';
import './ProjectStyle.css';

function Task() {
  const [task, setTask] = useState('');
  const [selectedUserStory, setSelectedUserStory] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [status, setStatus] = useState('');

  const userStories = ['User1', 'User2', 'User3']; // Static list of user stories
  const users = ['User A', 'User B', 'User C']; // Static list of users
  const statusOptions = ['Pending',  'In Progress', 'Done'];

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div >

      <form onSubmit={handleSubmit}>
      <h2>Create a Task</h2>
        <label htmlFor="task">Task:</label>
        
        <textarea
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></textarea>

        <label htmlFor="userStory">User Story:</label>
        <select
          id="userStory"
          value={selectedUserStory}
          onChange={(e) => setSelectedUserStory(e.target.value)}
        >
          <option value="">Select User Story</option>
          {userStories.map((userStory) => (
            <option key={userStory} value={userStory}>
              {userStory}
            </option>
          ))}
        </select>

        <label htmlFor="createdBy">Created by:</label>
        <select
          id="createdBy"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
        >
          <option value="">Select Created by</option>
          {users.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>

        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
          <br/>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default Task;
