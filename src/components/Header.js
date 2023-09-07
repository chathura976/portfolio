import React from 'react';

import Logo from '../assets/CJ.png'


const Header = () => {
  return(
     <header className='py-8'> 
    <div className='container mx-auto'>
     
     <div className='flex justify-between items-center' > 
      <a href='#'>
    <img style={{ width: "150px", height: "70px" }} src={Logo}alt=""/>
      </a>
      <button className='btn btn-sm'>Work with me</button>
       </div>
       </div>
  </header>
  );
};

export default Header;
