import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";


const Home = () => (
    <div>
        <h2> Home </h2>
    </div>
)

const Side1 = () => (
    <div>
        <h2>Dette er side1</h2>
    </div>
)

const Side2 = () => (
    <div>
        <h2>Dette er side2</h2>
    </div>
)

const Side3 = (props) => (
    <div>
        <h2>Dette er side3</h2>
    </div>
)


const RoutingEksampel = () => (

    <BrowserRouter basename="/noe/noeAnnet">
        <div>
            <ul>
                <li> <Link to="/">Home </Link>  </li>
            </ul>
            <ul>
                <li> <Link to="/side1">Side1  </Link>   <b>kun eksakt</b> noe/noeAnnet/side1   <b>ikke</b>   noe/noeAnnet/side1/noe </li>
            </ul>
            <ul>
                <li> <Link to="/side2">Side2 </Link>  </li>
            </ul>
            <ul>
                <li> <Link to="/side3">Side3 </Link>  </li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route exact path="/side1" component={Side1} />
            <Route path="/side2" component={Side2} />
            <Route path="/side3" component={Side3} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(<RoutingEksampel />, document.getElementById('root'));

