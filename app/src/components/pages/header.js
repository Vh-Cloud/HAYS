import React from 'react';

//Imagens
import Menu from '../img/Menu.png'

export default function header(){
    return(
        <div id='header'>
            <span className='title'>HAYS</span>
            <span id='link'>
                <a href='/Home' className='link'>HOME </a> 
                <a href='/About' className='link'>ABOUT US </a> 
                <a href='/Contact' className='link'>CONTACT</a>
                <a href='./?menu=open'><img src={Menu} alt='Menu' id='menu'/></a>
            </span>
        </div>
    )
}