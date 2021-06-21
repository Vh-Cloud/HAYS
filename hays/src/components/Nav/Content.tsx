import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Types {
    navType: string;
}

const ContentNav: FC<Types> = ({ navType }) => {

    return (
        <>
            <div className={navType === "menu" ? "Nav-menu" : "Nav"}>
                <span>
                  <Link to="/">Home</Link>
                </span>

                <span>
                  <Link to="/about">About us</Link>
                </span>

                <span>
                  <Link to="/contact">Contact</Link>
                </span>
            </div>
        </>
    )
}

export default ContentNav
