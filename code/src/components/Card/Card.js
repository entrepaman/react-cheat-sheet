import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/styles/hljs';

import classes from './Card.css';

class Card extends Component {
    render() {
        let code = ``;
        const content = this.props.content.content;
        for(let i = 0; i < content.length; i++) {
            code += content[i] +'\n';
        }

        const classNames = [classes.Card, classes[this.props.className]].join(' ');
        return (
            <div className={classNames}>
                <p className={classes.head}>{this.props.content.heading}</p>
                <div className={classes.codes}>
                    <SyntaxHighlighter language='jsx' style={githubGist}>
                        {code}
                    </SyntaxHighlighter>
                </div>
            </div>
        );
    }
}

export default Card;