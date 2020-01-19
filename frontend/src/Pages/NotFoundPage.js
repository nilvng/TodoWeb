import React, { Component } from 'react'
import {Link} from '@reach/router'
export default class NotFound extends Component {
    render() {
        return (
            <div>
                <img src = 'https://www.youtube.com/yts/img/ringo/img/image-hh-404-vflP3hqNT.png' alt = 'So Sorry'/>
                <h3>This page isn't available. Sorry about that.</h3>
                <div>
                    Try to <Link to = '/'>go to homepage</Link> instead
                </div>
            </div>
        )
    }
}
