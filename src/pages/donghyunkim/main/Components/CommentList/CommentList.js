import React, { Component } from 'react'
import './CommentList.scss'

export class CommentList extends Component {
    render() {
        return (
            <>
                {this.props.commentArr.map(ele => {
                    return(
                        // key prop 추가
                        <li>
                            <p>
                                <a>
                                    {ele.userName  + ' '}
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

export default CommentList
