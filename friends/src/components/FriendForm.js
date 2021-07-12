import React from 'react';
import { Link } from 'react-router-dom';
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
            <>
                <div>
                    <form onSubmit={this.submitHandler}>
                    </form>
                </div>

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

                                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add a Friend to the Team!</h2>
                                <p className="mt-2 text-center text-sm text-gray-600"> <br />

                                    <div class=" -space-x-2">

                                        <img class="inline-block h-20 w-20 rounded-full object-cover ring-white " src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/6010580f12e8865c685af689_artist-avatar.jpg" alt="Guy" />


                                        <img class="inline-block h-20 w-20 rounded-full object-cover ring-white" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60ac2e081a5db338cbc23534_BLKME3%202.PNG" alt="Max" />


                                        <img class="inline-block h-20 w-20 rounded-full object-cover ring-white" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/6010580f12e88650d75af6b5_hero-img-3.jpg" alt="Charles" />


                                        <img class="inline-block h-20 w-20 rounded-full object-cover ring-white" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/6010580f12e886124e5af6c9_hero-img-4.jpg" alt="Jade" />

                                    </div><br />
                           


                                </p>
                            </div>


                            {/*  ------- FORM LOGIN INFO ------ */}

                            <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={this.submitHandler}>


                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div>
                                        <label htmlFor="name" className="sr-only">
                                            Username
                                    </label>
                                        <input
                                             type="text"
                                             name="name"
                                             value={this.state.friend.name}
                                             onChange={this.handleChange}
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                                            placeholder="Username"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="age" className="sr-only">
                                            Age
                                    </label>
                                        <input
                                           type="age"
                                           name="age"
                                           placeholder="Your Age"
                                           value={this.state.friend.age}
                                           onChange={this.handleChange}
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"

                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">
                                            E-mail
                                    </label>
                                        <input
                                           type="email"
                                           name="email"
                                           placeholder="E-mail"
                                           value={this.state.friend.email}
                                           onChange={this.handleChange}
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"

                                        />
                                    </div>
                                </div>

                                {/*  ------- REMEMBER ME / FORGOT PASSWORD ------ */}
                             

                                <div>
                                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-blue-400">
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        </span> Add a New Friend </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </>
            </>
        )
    }
}

export default FriendForm;