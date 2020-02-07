import React from 'react';

export class Login extends React.Component {
    render = () => (
        <div>
            <button onClick={this.props.onClick}
            >Login
            </button>
        </div>
    )
}