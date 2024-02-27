import React from 'react';
import "../styles/Footer.css";

import {Instagram } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram />
            <Facebook />
            <LinkedIn />
        </div>
        <p> <a href="https://www.linkedin.com/in/jean-pierre-ayoub-962077236"> &copy; 2024 JP Ayoub </a></p>
    </div>
  )
}

export default Footer;