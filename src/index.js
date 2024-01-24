import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <RouterProvider router={router}> */}
      <App />
    {/* </RouterProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
);



// import RouterProvider from './RouterProvider'; // custom RouterProvider
// import {createBrowserRouter , Route, createRoutesFromElements, } from "react-router-dom";

// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import Login from './components/Login';
// import Signup from './components/Signup';
// import Project from './components/Project';
// import TeamName from './components/Team';
// import TeamRoster from './components/TeamRoster';
// import UserStory from './components/UserStory';
// import Task from './components/Task';


// const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path = "/projects" element={<Project />}/>
//       <Route path = "/teams" element={<TeamName />}/>
//       <Route path = "/teamRosters" element={<TeamRoster />}/>
//       <Route path = "/userStories" element={<UserStory />}/>
//       <Route path = "/tasks" element={<Task />}/>
//     </>
//   )
// );


// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       <App />
//     </RouterProvider>
//   </React.StrictMode>,
// );


reportWebVitals();
