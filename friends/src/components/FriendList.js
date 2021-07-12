import React from 'react';
import { Link } from 'react-router-dom';
import FriendForm from './FriendForm';
import axiosWithAuth from './helpers/axiosWithAuth';

class FriendList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log("AXIOS - GET RESPONSE:", res.data)
                this.setState({
                    ...this.state,
                    friends: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    };

    render() {
        return (
            
            <div className="App ">
                 <FriendForm/>







            {this.state.friends.map(friend => (

                <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4">
                    <div clasName="flex-col  flex justify-center items-center">
                        <div className="flex-shrink-0">
                            <img className="mx-auto object-cover rounded-full h-16 w-16" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60eb8d32a4eb8542a3369d99_pngwing.com%20(1).png" alt="ProfilePix" />
                        </div>
                        <div key={friend.id} className="mt-2 text-center flex flex-col">
                            <span class="text-gray-600 dark:text-white text-lg font-medium">
                            {friend.name}</span>
                            <span class="text-gray-400 text-xs">
                            {friend.age}</span>
                            <span class="text-gray-400 text-xs">
                            {friend.email}</span>
                            <span class="text-gray-400 text-xs">
                            __________</span>

                        </div>
                    </div>
            
                </div>
            ))} 

            </div>

        )
    }
}

export default FriendList;