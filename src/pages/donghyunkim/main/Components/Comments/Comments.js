import React, { Component } from 'react'
import './Comments.scss'

export class Comments extends Component {
    render() {
        return (
            <>
                {this.props.commentArr.map(ele => {
                    return(
                        // key prop 추가
                        <li>
                            <p>
                                <a>
                                    {ele.userId  + ' '}
                                </a>
                                {ele.content}
                            </p>
                        </li>
                    )
                })}
  
            </>
        )
    }
}

export default Comments
