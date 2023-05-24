import React, {useState} from 'react';
// import myLogo from '../assets/my-portfolio-logo.png'

const Header = () =>{

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <header className="header">
        <div className="brand">
          <p className='rest'>K U B I</p>
          <p></p>
        </div>
        <nav className="nav">
          <div className="desktop-brand-and-nav-links-div">
            <ul className={`nav-links-ul ${isActive ? 'active' : ''}`}>
              <li className="nav-links"><a href="https://www.google.com/">Projects</a></li>
              <li className="nav-links"><a href="https://www.google.com/">Resume</a></li>
              <li className="nav-links"><a href="https://www.google.com/">Contacts</a></li>
            </ul>
          </div>
          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <div>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
            <div>
              <span className="fourthbar" />
            </div>
          </div>
        </nav>
      </header>
    </div>
 );

}
  // <a href="/path/to/your/file.pdf" download>Download PDF</a>;

export default Header;
