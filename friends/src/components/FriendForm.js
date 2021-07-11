import React from 'react';
import axiosWithAuth from './helpers/axiosWithAuth';



class FriendForm extends React.Component {
    state = {
        friend: []
    };

    //Change Handler
    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value,
                id: Math.random()
            }
        });
    }

    submitHandler = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', this.state.friend)
            .then(res => {
                console.log("AXIOS - FRIENDS PUT RESPONSE:", res)
                this.props.history.push('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={this.state.friend.name}
                            onChange={this.handleChange}
                            />
                        <label>
                            Age:
                        </label>
                        <input
                            type="age"
                            name="age"
                            placeholder="Your Age"
                            value={this.state.friend.age}
                            onChange={this.handleChange}
                            />
                        <label>
                            E-mail:
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={this.state.friend.email}
                            onChange={this.handleChange}
                            />
                    </div>
                    <button>Create New Friend</button>
                </form>
            </div>
        )
    }
}

export default FriendForm;