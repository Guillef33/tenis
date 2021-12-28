import React from "react";
// import { useParams } from 'react-dom';

const postCard = ({ post }) => {

  return (
    <div className="card-container">
      <p>{post.id}</p>
      <h2>{post.title}</h2>
      <img src={post.featuredImage.file.url} alt="imgDestacada" />
      <p>{post.postContent}</p>
    </div>
  );
};

export default postCard;