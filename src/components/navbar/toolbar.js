import React from 'react'

class Toolbar extends React.Component {
    
    render() {
        return (
            <nav className='molecule-toolbar' >
                <ul className='atom-navbar'>
                    <li className='atom-navbar-title'><a href=''>O Trovador</a></li>
                    <ul className='atom-navbar-group'>
                    <li className='atom-navbar-item'><a href=''>Home</a></li>
                    <li className='atom-navbar-item'><a href=''>About</a></li>
                    <li className='atom-navbar-item'><a href=''>contact</a></li>
                    </ul>
                </ul>
            </nav>
        )
    }
}

export default Toolbar