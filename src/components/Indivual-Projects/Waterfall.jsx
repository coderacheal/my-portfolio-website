import React from 'react';
import { Link } from 'react-router-dom';

const Waterfall = () => (
  <div className="each-project-page">
    <Link to="/projects" className="close-current-project">Close</Link>
    Waterfall
  </div>
);

export default Waterfall;
