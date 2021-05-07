import React from 'react'
import LoadingImage from '../images/preloader.gif'
import { Navbar , Info , Repos , Search , User } from '../components'
import { GithubContext } from '../context/context'

const Dashboard = () => {
    const { loading } = React.useContext(GithubContext);
    if(loading) {
        return(
            <main>
                <Navbar />
                <Search />
                <img 
                    src={LoadingImage}
                    alt="LoadingImage"
                    className="loading-img"
                />
            </main>
        );
    }
    return (
        <div>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Repos />
        </div>
    )
}

export default Dashboard
