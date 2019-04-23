import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ username: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username);
    }
    render() {
        return (
            <div className="ChatForm-container">
                <h1>Let's Talk</h1>
                <form onSubmit={this.handleSubmit} className="ChatForm">
                    <label htmlFor="email">What is your email?</label>
                    <input type="email" name="username" onChange={this.handleChange} className="input" />
                    <button className="ChatSubmit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Signup;