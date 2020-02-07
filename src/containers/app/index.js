import React from 'react';
import { Login } from '../login';
import { Counter } from '../../components/counter';

export class App extends React.Component {
    state = {
        isLoggedIn: false
    }

    logIn = () => {
        this.setState({ isLoggedIn: true })
    }

    render = () => (
        <div>
            {
                !this.state.isLoggedIn ?
                    <Login onClick={this.logIn} /> :
                    <Counter />
            }
        </div>
    )
}