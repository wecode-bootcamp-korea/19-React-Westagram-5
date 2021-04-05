import React, { Component } from 'react'
import Nav from './Components/Nav/Nav'
import Feeds from './Components/Feeds/Feeds'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment:[
                {id:1, userId:'_apink_pinkpanda', content:'Apink🐼💖❤️💙💜 #APINK #에이핑크 #CHORONG #박초롱 #BOMI #윤보미 #EUNJI #정은지 #NAEUN #손나은 #NAMJOO #김남주 #HAYOUNG #오하영'},
                {id:2, userId:'i_want.apink', content:'YAAAAAAAAAAAA QUE RAINHAS ❤️🙌 MEU DEUS QUE LINDAAAS ELAS E TÃO MARAVILHOSAS 😔❤ MAIS EU NÃO AGUENTO VER ISSO PQ EU VOU DESMAIAR KSKSKS'}
            ]
        }
    }
    render() {
        return(
            <>
                <Nav />
                <Feeds
                commentArr={this.state.comment}
                />
            </>
        )
    }
}

export default Main
