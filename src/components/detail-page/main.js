import React, {useState} from 'react';

const Main = () => {
    const [showButton, setShowButton] = useState(false);

    function handleClick() {
        setShowButton(true);
        setTimeout(() => {
            setShowButton(false);
        }, 1000);
    }
    return (
        <div>



            <button onClick={handleClick}>Show Another Button</button>
        {showButton && <button>My Button</button>}
            </div>

            );
        };



export default Main;