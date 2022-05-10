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
import { collection, getDocs, addDoc} from "firebase/firestore";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("")
    useEffect(() => {
        getPosts();
    }, [])

    async function getPosts() {
        console.log("running get posts")
        const querySnapshot = await getDocs(collection(db, "asdfas"));
        querySnapshot.forEach((doc) => {
            setPosts([...posts, doc.data()]);
            console.log(doc.data(), posts)
        })
        console.log(querySnapshot);
    }

    async function sendPost(e) {
        e.preventDefault();
        const rand = Math.floor(Math.random() * 100000);
        console.log("sub", rand)

        try {
            const docRef = await addDoc(collection(db, "asdfas"), {
                name: "John estacio",
                description: "test",
                message: input,
                id: rand
            });
            console.log("Document written with ID: ", docRef.id)
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" placeholder="Start a post" value={input} onChange={e => setInput(e.target.value)} />
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
            {posts.map((post) => {console.log("posts", posts)
                return <Post key={post.id} name={post.name} message={post.message} description={post.description}/>
            })}
            {/* <Post name="John Estacio" description="test post" message="this is a test post" /> */}
        </div>
    )
}

export default Feed;
