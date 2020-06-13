import React from 'react'
import { Link } from 'gatsby'



const Menu = ({color}) => {

    return (
        <div style={{
            background: color,
            paddingTop: '10px'
        }}>

        <ul style={{
            listSytle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>

        </div>
    )
}



export default Menu;