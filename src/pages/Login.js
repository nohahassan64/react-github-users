import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import styled from 'styled-components';
import ImageLogin from '../images/login-img.svg'

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Wrapper>
            <div className="container">
                <img src={ImageLogin} alt="Github User" />
                <h1>Github User</h1>
                <button className="btn" onClick={loginWithRedirect}>Login / sign up</button>
            </div>
            
        </Wrapper>
    )
}
const Wrapper = styled.section`
    display: grid;
    min-height: 100vh;
    place-items: center;
    .container {
        text-align: center;
        width: 90vw;
        max-width: 600px;
    }
    h1 {
        margin-bottom: 1.5rem;
    }
    img {
        margin-bottom: 2rem;
    }
`

export default Login
