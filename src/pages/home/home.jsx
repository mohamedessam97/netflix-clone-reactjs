import React from 'react';
import RandomMovie from '../../components/randomMovie/RandomMovie'
import List from '../../components/List/List'
import './Home.css'


const Home = () => {
    return (
        <div className="home">
        <div className="random">
            <RandomMovie />
        </div>
            <List />
            <List />
        </div>
    );
}

export default Home;
