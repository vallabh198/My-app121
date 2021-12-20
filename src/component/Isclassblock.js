import React, { Component } from 'react'

class Isclassblock extends Component {
    render() {
        return (
            <div className='box'>
                <h1>This is Class component</h1>
                <div>This is external CSS</div>
                <div style={{color: "blue"}}>This is inline CSS</div>
                
            </div>
        )
    }
}

export default Isclassblock
