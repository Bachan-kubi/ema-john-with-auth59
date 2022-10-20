import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';

const About = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h2>Secret about us!!!</h2>
            <p>{user?.name}</p>
        </div>
    );
};

export default About;