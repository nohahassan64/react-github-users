import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
    return (
        <Wrapper>
            <h1>404</h1>
            <h3>Sorry, the page you tried cannot be found</h3>
            <Link to="/" className="btn">Back Home</Link>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    display: grid;
    min-height: 100vh;
    place-items: center;
    text-align: center;
    background: var(--clr-primary-10);
    h1 {
        font-size: 10rem;
    }
    h3 {
        margin-bottom: 1.5rem;
        color: var(--clr-grey-3);
    }
`
export default Error
