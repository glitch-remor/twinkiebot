import React from 'react';
import { useNavigate } from 'react-router-dom';
function SubPage() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)}><img src='https://cdn.discordapp.com/attachments/1205989573411209226/1206141017817092116/pixil-frame-0.png?ex=65daed5b&is=65c8785b&hm=7c8f8b03878a1d2d15afc5417d9b1661c7a26aa2bae827054765ee07355ab5f9&' /></button>
            <div style={{ opacity: 0.5, width: '100%', height: '100px', backgroundColor: '#000'}}>
                {/* content/text here */}
            </div>
            {/* sprite and audio */}
            <audio autoPlay loop>
                <source src='./assets/MenuMusic.WAV' type="audio/wav" />
            </audio>
        </div>
    );
}

export default SubPage;