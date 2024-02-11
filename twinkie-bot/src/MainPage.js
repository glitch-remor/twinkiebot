import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const Navigate = useNavigate();
    const [spritePosition, setSpritePosition] = useState({ x: 0, y: 0});

    useEffect(() => {
        const handleKeyDown = (e) => {
            //update sprite position based on arrow keys
            //check for collision w/ images.
        }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };

    }, [spritePosition]);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh',
    backgroundImage: 'https://cdn.discordapp.com/attachments/1205989573411209226/1206079545501949982/dabMfwhw.jpg?ex=65dab41b&is=65c83f1b&hm=c9b8eec64d712320c205de38a808ef007784d5c6437653d5c2e3c36755bc638a&'}}>
        {/*Render sprite based on spritePosition */}
        {/*Render small images as links*/}
    </div>

    );
}

export default MainPage;