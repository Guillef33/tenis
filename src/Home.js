import React from 'react';
import PostCard from "./PostCard";
import { useDispatch } from "react-redux";
import {NOTICIES} from './redux/actionCreator.js'
import useContentful from "./useContentful";
import { useEffect, useState } from "react";


const Home = () => {
    const [posts, setPosts] = useState([]);
    const getAuthors = useContentful();
    
    const dispatch = useDispatch();
    // console.log(useContentful())

    useEffect(() => {
      
      const fecthNotices = async () => {
        await getAuthors().then((response) =>{
          setPosts(response)
          dispatch(NOTICIES(response))
        }
        );
      }

      fecthNotices();

    }, []);

    return (
      <>
        <header className="App-header">
          <h1 className="text-3xl font-bold underline">
            Un blog de tenis en react y contentful
          </h1>
          <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 p-2 m-4">
            Subscribe
          </button>
        </header>
        <div className="container">
          {" "}
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </>
    );
}

export default Home;

