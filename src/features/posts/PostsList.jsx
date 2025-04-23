// src/features/posts/PostsList.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './PostsSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const { items: posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <p>Loading posts...</p>;
  } else if (status === 'succeeded') {
    content = (
      <ul style={styles.list}>
        {posts.slice(0, 10).map((post) => ( // Display first 10 posts
          <li key={post.id} style={styles.listItem}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <p>Error: {error}</p>;
  }

  return (
    <div style={styles.container}>
      <h2>Posts</h2>
      {content}
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '1rem',
    padding: '0.5rem',
    borderBottom: '1px solid #eee',
  },
};

export default PostsList;
