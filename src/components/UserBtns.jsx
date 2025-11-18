import React from 'react';

function UserBtns({ onSignUp, onSignIn, onSignOut }) {

    // --- Button logic: signed out -> Sign up & Sign in : signed in -> "Sign out"
    return (
        <>
            <button onClick={onSignUp} >Sign up</button>
            <button onClick={onSignIn}>Sign in</button>
            <button onClick={onSignOut}>Sign out</button>
        </>
    )
}

export default UserBtns;
