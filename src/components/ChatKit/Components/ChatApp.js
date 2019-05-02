import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import Input from './Input';
import MessageList from './MessageList';
import { connect } from 'react-redux';
require('dotenv').config();

class ChatApp extends Component {
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

    componentDidMount() {
        // this.props.dispatch({ type: 'FETC' });
        const chatManager = new ChatManager({
            instanceLocator: "v1:us1:8291d128-e9b0-42cb-8ffc-ae3d1d7f5eca",
            userId: 'Opie',
            tokenProvider: new TokenProvider({
                url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/8291d128-e9b0-42cb-8ffc-ae3d1d7f5eca/token"
            })
        })

        chatManager
            .connect()
            .then(currentUser => {
                this.setState({ currentUser: currentUser })

                return currentUser.subscribeToRoom({
                    roomId: '19392062',
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