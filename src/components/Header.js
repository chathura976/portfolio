import React from 'react';

import Logo from '../assets/CJS.png'


const Header = () => {
  return(
     <header className='py-8'> 
    <div className='container mx-auto'>
     
     <div className='flex justify-between items-center' > 
      <a href='#'>
      <img align="left" alt="Coding" width="150"  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/06f21a161921919.63cd7887d0a70.gif"/>

    <img className="mt-5" style={{ width: "170px", height: "100px",  }} src={Logo}alt=""/>
      </a>
      <button className='btn btn-sm'>Work with me</button>
       </div>
       </div>
  </header>
  );
};

export default Header;
