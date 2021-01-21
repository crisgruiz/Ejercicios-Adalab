'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
// let userAvatar = 'http://www.fillmurray.com/300/300';
let userAvatar = '';

const imgUserAvatar = document.querySelector(".user__avatar");
// imgUserAvatar.src = userAvatar || DEFAULT_AVATAR;
imgUserAvatar.src = `${userAvatar || DEFAULT_AVATAR}`;
// imgUserAvatar.src = (userAvatar === "") ? DEFAULT_AVATAR : userAvatar;