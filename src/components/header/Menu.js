import React from 'react';

import "./Menu.scss"
const Menu = ({header,items,active,setActive}) => {
    return (
        <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
            <div className="blur"/>
            <div className="content" onClick={e => e.stopPropagation()}>
                <div className="header">{header}</div>
                    <ul>
                        {items.map(item =>
                         <li>
                             <a href={item.href}>{item.value}</a>
                         </li>
                        )}
                    </ul>

            </div>
        </div>
    );
};

export default Menu;