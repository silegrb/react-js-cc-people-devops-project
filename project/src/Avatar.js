import React from 'react';

const Avatar = ({name, surname}) =>  {
    const getRandomInt =() => {
        return Math.floor(Math.random() * Math.floor(5));
    }

    const avatarColors = ['color1', 'color2', 'color3', 'color4', 'color5'];

    return <div className={`${avatarColors[getRandomInt()]} rounded-avatar d-flex align-items-center justify-content-center`}>
        {name[0]} {surname[0]}
    </div>
}

export default Avatar;