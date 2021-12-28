import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { store: state };
};

const SinglePost = ({ posts }) => {
 
    const { img, title, author, id, category } = posts;


  return (
    <>

      <div className="card-container">
        <p>{posts.id}</p>
        <h2>{posts.title}</h2>
        <img src={posts.featuredImage.file.url} alt="imgDestacada" />
        <p>{posts.postContent}</p>
        <p>{posts.author}</p>
      </div>
    </>
  );
};

export default connect(mapStateToProps, null)(SinglePost)