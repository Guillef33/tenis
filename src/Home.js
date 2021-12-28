import React from 'react';
import PostCard from "./PostCard";
import useContentful from "./useContentful";
import { useEffect, useState } from "react";



const Home = () => {
    const [posts, setPosts] = useState([]);
    const getAuthors = useContentful();

    // console.log(useContentful())

    useEffect(() => {
    getAuthors().then((response) => setPosts(response));
    });

    return (
      <>
        <header className="App-header">
          <h1>Un blog de tenis en react y contentful</h1>
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

