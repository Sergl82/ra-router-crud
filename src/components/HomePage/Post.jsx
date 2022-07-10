/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

function Post({ post }) {
   const navigate = useNavigate();
   const onClick = () => {
      navigate(`/posts/${post.id}`);
   };

   return (
      <article className="Post" onClick={onClick}>
         <div className="Post__content">
            <header className="Post__header">
               <div className="Post-creator__img" />
               <div className="Post__about">
                  <div className="Post-creator__name">Имя Фамилия</div>
                  <span className="Post__time">
                     {moment(post.created).fromNow()}
                  </span>
               </div>
            </header>
            <div className="Post__text">
               <p>{post.content}</p>
            </div>
         </div>
      </article>
   );
}

Post.propTypes = {
   post: PropTypes.shape({
      content: PropTypes.string,
      id: PropTypes.number,
      created: PropTypes.number,
   }).isRequired,
};

export default Post;
