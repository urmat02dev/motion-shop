import React from 'react';
import './hover.css';
import {NavLink} from "react-router-dom";
import kids from "../../assets/img/kids__hover.png";
import children from "../../assets/img/children.png";
import hover from "../../assets/img/hover__1.png";
import {CgArrowLongRight} from "react-icons/cg";
import shoes from "../../assets/img/shoes__hover.png";

function MyComponent() {
    return (
        <div className="my-component">
            <h2>My Component</h2>
            <p>Some text...</p>
        </div>
    );
}


// <NavLink to={"/categories/kids"}>
//     <div className="menu--categories--kids" >
//         <img src={kids} alt="" className="menu--categories--kids--img" />
//         <img src={children} alt="" className="menu--categories--kids--photo"/>
//         <img src={hover} alt="" className="menu--categories--kids--fon"/>
//         <div className="menu--categories--kids--title">
//             <p>Детская</p>
//             <CgArrowLongRight className="menu--categories--kids--title--icon"/>
//         </div>
//     </div>
// </NavLink>
// <NavLink to={"/categories/shoes"} className="menu--categories--shoes" >
//     <img src={shoes} alt="" className="menu--categories--shoes--img"/>
//     <img src={hover} alt="" className="menu--categories--shoes--fon"/>
//     <div className="menu--categories--shoes--title">
//         <p>Обувь</p>
//         <CgArrowLongRight className="menu--categories--shoes--title--icon"/>
//     </div>
// </NavLink>


export default MyComponent;