import * as React from 'react';
import './Header.css';
import Pfp from '../../assets/Pfp.png'; 


function Header (){

    return(
        <div className="header-component">
            <h1>Oscar Altamirano Cerezo</h1>
            <p>No one knows what</p>
            <img src={Pfp} />
        </div>
    )
}

export default Header