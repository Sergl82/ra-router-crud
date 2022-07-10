import React from 'react';
import Post from './Post';

function Posts({ data }) {
   return data.map((item) => <Post post={item} key={item.id} />);
}

export default Posts;
