import React from 'react';
import getSingle from "./getSingle";
import { useEffect, useState } from "react";
import SinglePost from './SinglePost';


const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const getPost = getSingle();

    // console.log(useContentful())

/*     useEffect(() => {
      getPost().then((response) => setPosts(response));
    }); */

    return (
      <>
        <header className="App-header">
          <h1 className="text-3xl font-bold underline">Noticia Destacada</h1>
        </header>

        <div className="container">
{/*             <SinglePost posts={posts}/> */}
        </div>
      </>
    );
}

export default PostPage;

