// App.js
import { Route , Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import Project from './components/Project';
import TeamName from './components/Team';
import TeamRoster from './components/TeamRoster';
import UserStory from './components/UserStory';
import Task from './components/Task';
import { useState } from 'react';

function App() {

  const [showLogin, setShowLogin] = useState(true);

  function toggleForm() {
    setShowLogin(!showLogin);
  }
  
  return( 
    <div className="App">
      {showLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
    
  <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path = "/projects" element={<Project />}/>
      <Route path = "/teams" element={<TeamName />}/>
      <Route path = "/teamRosters" element={<TeamRoster />}/>
      <Route path = "/userStories" element={<UserStory />}/>
      <Route path = "/tasks" element={<Task />}/>
  </Routes>
  </div>
);
}

export default App;




// import './App.css';

// import Login from './components/Login';
// import Signup from './components/Signup';
// import { useState } from 'react';

// function App() {
//   const [showLogin, setShowLogin] = useState(true);

//   function toggleForm() {
//     setShowLogin(!showLogin);
//   }

//   return (
//     <div className="App">
//       {showLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
//     </div>
//   );
// }

// export default App;