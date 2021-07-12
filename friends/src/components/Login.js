import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


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
            <>
                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img
                                className="mx-auto h-28 w-auto"
                                src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60eb7dff3a867a73fdd8f19a_pngwing.com.png"
                                alt="Workflow"
                            />

                            {/* <a href="#" className="block relative">
                        <img alt="profil" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60ac2e081a5db338cbc23534_BLKME3%202.PNG" className="mx-auto object-cover rounded-full h-20 w-20"/>
                    </a> */}

                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Join the Verified Team!</h2>
                            <p className="mt-2 text-center text-sm text-gray-600"> <br />

                                <div class=" -space-x-2">

                                    <img class="inline-block h-20 w-20 rounded-full object-cover ring-white " src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/6010580f12e8865c685af689_artist-avatar.jpg" alt="Guy" />


                                    <img class="inline-block h-20 w-20 rounded-full object-cover ring-white" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60ac2e081a5db338cbc23534_BLKME3%202.PNG" alt="Max" />


                                    <img class="inline-block h-20 w-20 rounded-full object-cover ring-white" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/6010580f12e88650d75af6b5_hero-img-3.jpg" alt="Charles" />


                                    <img class="inline-block h-20 w-20 rounded-full object-cover ring-white" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/6010580f12e886124e5af6c9_hero-img-4.jpg" alt="Jade" />

                                </div><br />
                            Or{' '}
                                <Link to="#" className="font-bold text-black hover:text-blue-300">
                                    start your 30-day free trial
                        </Link>


                            </p>
                        </div>


                        {/*  ------- FORM LOGIN INFO ------ */}

                        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={this.login}>
                           

                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        value={this.state.credentials.username}
                                        onChange={this.handleChange}
                                        autoComplete="name"
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                        placeholder="Username"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        type="text"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.credentials.password}
                                        onChange={this.handleChange}

                                        autoComplete="current-password"
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                             
                                    />
                                </div>
                            </div>

                            {/*  ------- REMEMBER ME / FORGOT PASSWORD ------ */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember_me"
                                        name="remember_me"
                                        type="checkbox"

                                        className="h-4 w-4 bg-brand-dark focus:ring-blue-400 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                            </label>
                                </div>

                                <div className="text-sm">
                                    Already a member? <Link className="text-blue-400 hover:text-opacity-50" to="/login">Login</Link>

                                </div>
                            </div>

                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-blue-400">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    </span>
                                Login in
                           </button>

                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Login; 