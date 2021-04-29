import React, { Component } from 'react'
import Nav from './Components/Nav/Nav'
import Feeds from './Components/Feeds/Feeds'

class Main extends Component {
    render() {
        return(
            <>
                <Nav />
                <Feeds />
            </>
        )
    }
}

export default Main
