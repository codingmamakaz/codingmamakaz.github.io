import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/profile.jpeg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>My name is Kazumi Karbowski</strong><br />and I'm a full stack developer<br />
                        with a curious enthusiasm for problem solving and finding creative solutions.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
