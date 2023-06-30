import React from 'react';
import { Link } from 'react-router-dom';

const Everest = () => (
  <div className="each-project-page">
    <Link to="/projects" className="close-current-project">Close</Link>
  </div>
);

export default Everest;
