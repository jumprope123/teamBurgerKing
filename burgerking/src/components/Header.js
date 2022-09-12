import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
            <div class="list-group">
                <li class="list-group-item list-group-item-success"><Link to="/">Brand</Link></li>
                <li class="list-group-item list-group-item-success"><Link to="/Menu">Menu</Link></li>
                <li class="list-group-item list-group-item-success"><Link to="/Shop">Shop</Link></li>
            </div>
            <hr/>
        </React.Fragment>
    );
};

export default Header;