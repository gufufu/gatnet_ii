import React from 'react'
import {navigate} from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer';

const Test = () => (
    <div>
        <Header></Header>
        <h1>This is a test page!</h1>
        <h2>This is a test page H2!</h2>
        <p>This is a test page paragraph!</p>
        <button onClick={()=>navigate("/")}>Navigation</button>
        <Footer></Footer>
    </div>
)

export default Test;