import React, { useEffect, useState, useId } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption.js'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase.js';
import { collection, getDocs, addDoc, FieldValue} from "firebase/firestore";
import { useSelector} from 'react-redux';
import {selectUser} from './features/userSlice.js';
import FlipMove from "react-flip-move";
const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");
    const user = useSelector(selectUser);

    useEffect(() => {
        getPosts();
    }, [])

    async function getPosts() {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        })
        setPosts([...data]);
    }

    async function sendPost(e) {
        e.preventDefault();
        const rand = Math.floor(Math.random() * 100000);
        const date = new Date();
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                name: user?.displayName,
                description: user?.email,
                message: input,
                id: rand,
                timestamp: date,
                photoUrl: user.photoUrl
            });
            setInput("");
            getPosts();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon onClick={sendPost}/>
                    <form action="">
                        <input type="text" placeholder="Start a post" value={input} onChange={e => {
                            setInput(e.target.value)
                        }} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="photo" color="#70b5f9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0cbcd" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e" />
                </div>
            </div>
            <FlipMove>
                {posts.sort((a,b) => {
                    return new Date(b.timestamp.seconds) - new Date(a.timestamp.seconds);}).map((post) => {
                    return <Post key={post.id} name={post.name} message={post.message} description={post.description} photoUrl={post.photoUrl}/>
                })}
            </FlipMove>
        </div>
    )
}

export default Feed;
