import React, { Component } from 'react';
import './App.css';

import SingleComment from './singleComment';


class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            comments: [],
            currentComment: ""
        };
    }

    onInputChange = e => {
        this.setState({ currentComment: e.target.value });
    }

    onClick = () => {
        let commentsCopy = this.state.comments.slice();
        commentsCopy.push(this.state.currentComment);

        this.setState({ comments: commentsCopy, currentComment: "" });
    }

    deleteComment = i => {
        let commentsCopy = this.state.comments.slice();

        commentsCopy.splice(i, 1);

        this.setState({ comments: commentsCopy })
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        let listedComments = this.state.comments.map((e, i) => {
            return (
                <SingleComment key={i} comment={e} delete={() => this.deleteComment(i)}/>
            );
        });
        return (
            <div>
                <input placeholder="Enter a comment" value={this.state.currentComment}
                    onChange={this.onInputChange} />
                <button onClick={this.onClick}>COMMENT</button>
                <br />
                { this.state.comments.length === 0 ? "No Comments Yet!" : <ul>{listedComments}</ul>}
                <br /><br />
                <button onClick={this.increment}>Add As Many Likes As You Want!</button>
                {this.state.count}
            </div>
        );
  }
}

export default App;
