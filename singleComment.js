import React, { Component } from 'react';


// class SingleComment extends Component {
//     constructor() {
//         super();
//     }
//
//     render() {
//         return (
//             <li>{this.props.comment}<button onClick={this.props.delete}>DELETE MY COMMENT</button></li>
//         );
//     }
// }

// functional component

const SingleComment = props => {
    return(
        <li key={props.key}>{props.comment}<button onClick={props.delete}>DELETE MY COMMENT</button></li>
    );
}

export default SingleComment;
