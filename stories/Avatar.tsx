import React from 'react';
import './avatar.css';
export interface AvatarProps {
    /**The username of the user */
    name: string;
    /** An optional image to appear for an avatar */
    image?: {
        src: string;
    };
    /** Determine if the avatar is circular or square */
    shape: 'circle' | 'square';
    /** The size of the avatar */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Avatar = ({name,image,shape,size}:AvatarProps)=>{
    const initials = name.split(' ').map((word)=>word[0]).join('');
    return (
        <div className={['avatar',`avatar--shape-${shape}`, `avatar--size-${size}`].join(' ')}>
            {image ? <img className='avatar-image' src={image.src} alt={name}/> : <>{initials}</>}
        </div>
    )
}