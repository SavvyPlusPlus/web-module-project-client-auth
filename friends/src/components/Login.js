import React from 'react';
import axios from 'axios';


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                console.log("AXIOS - PUT RESPONSE: ", res)
                localStorage.setItem("token", res.data.payload);
                console.log("Logged in!");
                this.props.history.push("/friends");
            })
            .catch(err => console.log("Couldn't Login", err))
    };
    
    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                        <label>Password:</label>
                        <input
                            type="text"
                            name="password"
                            placeholder="Password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default Login; 