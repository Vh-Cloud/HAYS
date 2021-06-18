import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ContentNav from './Content';

export default function Nav() {
    const [size, setSize] = useState(window.innerWidth)

    window.addEventListener('resize', () => {
      setSize(window.innerWidth)
    })

    return (
        <div className="Nav-container">
        <span>
          <Link to="/">Hays</Link>
        </span>

        {
          size <= 460 
          ? (
            <>
              <div className="Nav-close-menu">
                <span>X</span>
              </div>

              <ContentNav navType="menu"/>
            </>
            
          )
          : (
            <ContentNav navType="nav"/>

          )
        }
      </div>
    )
}
