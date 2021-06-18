import React from 'react';
import '../styles/home/home.css'
import logo from '../../assets/logo.png'

export default function Home() {
    return (
        <div className="Home-page">
            <div className="Home-page-welcome">
                <img src={logo} alt="Logo" width="85px"/>
                <span>Bem vindo ao HAYS</span>

                <div className="Home-page-btn-container">
                    <a href="https://github.com/Vh-Cloud/HAYS" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://github.com/Vh-Cloud" target="_blank" rel="noreferrer">VH'Cloud</a>
                </div>
            </div>  
        </div>
    )
}
