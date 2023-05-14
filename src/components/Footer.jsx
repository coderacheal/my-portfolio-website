import React from 'react';
import Socials from './Socials';

const Footer = () => {
  return (
    <div>
      <footer className="portfolio-footer">
        <div className='footer-socials'>
          <a href="https://www.linkedin.com/in/racheal-appiah-kubi/" target='blank'><i class="fa-brands fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/racheal-appiah-kubi/" target='blank'><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/coderacheal" target='blank'><i class="fa-brands fa-github"></i></a>
          <a href="https://medium.com/@coderachealcheal-appiah-kubi/" target='blank'><i class="fa-brands fa-medium"></i></a>
          <a href="https://wellfound.com/u/racheal-appiah-kubi" target='blank'><i class="fa-brands fa-angellist"></i></a>
        </div>
        <p className='reserved-footer'>&copy; 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
