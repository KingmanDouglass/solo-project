import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import Input from './Input';
import MessageList from './MessageList';
import { connect } from 'react-redux';
require('dotenv').config();

class ChatApp extends Component {
    //set state for the user and room that is being used
    constructor(props) {
        super(props);
        this.state = {
            currentUser: '',
            currentRoom: { users: [] },
            messages: [],
            users: []
        }
        this.addMessage = this.addMessage.bind(this);
    }

    // componentDidUpdate(prevProps) {
    //     // Typical usage (don’t forget to compare props):
    //     // console.log(‘prevProps’, prevProps);
 
    //     if (this.props.reduxState.user.username !== prevProps.reduxState.user.username) {
    //         this.setState({
    //             currentUser: this.props.reduxState.user.username
    //         })
    //     };
    // }

    //create instance and who is logged in with a new token
    componentDidMount() {
        // this.props.dispatch({ type: 'FETC' });
        const chatManager = new ChatManager({
            instanceLocator: "v1:us1:8291d128-e9b0-42cb-8ffc-ae3d1d7f5eca",
            userId: 'Opie',
            tokenProvider: new TokenProvider({
                url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/8291d128-e9b0-42cb-8ffc-ae3d1d7f5eca/token"
            })
        })
        //connect to the API and reset the state as who is logged in and where
        chatManager
            .connect()
            .then(currentUser => {
                this.setState({ currentUser: currentUser })

                return currentUser.subscribeToRoom({
                    roomId: '19394153',
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message],
                            })
                        },
                    }
                })
            })
            .then(currentRoom => {
                this.setState({
                    currentRoom,
                    users: currentRoom.userIds
                })
            })
            .catch(error => console.log(error))
    }

    //pull all the messages from the given room
    addMessage(text) {
        console.log(this.state);
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id
        })
            .catch(error => console.error('error', error));
    }

    render() {
        return (
            <div>
                <h2 className="ChatHeader">Let's Talk</h2>
                <p>{JSON.stringify(process.env.testToken)}</p>
                <MessageList messages={this.state.messages} />
                <Input className="input-field" onSubmit={this.addMessage} />
            </div>
        )
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(ChatApp);