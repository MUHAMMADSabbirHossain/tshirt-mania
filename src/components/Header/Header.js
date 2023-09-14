import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to TShirt Mania!!!</h1>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/orderreview">Order Review</CustomLink>
                <CustomLink to="/grandpa">Grandpa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;