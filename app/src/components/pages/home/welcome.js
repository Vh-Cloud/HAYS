import React from 'react'

//Imagens
import Logo from '../../img/Logo.ico'

export default function wellcome() {
    return(
        <div id='welcome'>
            <img src={Logo} alt='logo' className='logo'/>
            <p>WELCOME TO HAYS</p>
        </div>
    )
}