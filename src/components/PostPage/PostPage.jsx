import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../useFetch/useFetch';
import Post from '../HomePage/Post';
import Form from '../NewPost/Form';

function PostPage() {
   const { id } = useParams();
   const [isEdit, setEdit] = useState(false);

   const [data, isLoading, error] = useFetch(
      `${process.env.REACT_APP_URL}posts/`
   );

   const findPost = () => data.find((el) => +el.id === +id);

   const navigate = useNavigate();
   const onClose = () => navigate('/');

   const onDelete = () => {
      fetch(`${process.env.REACT_APP_URL}posts/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
      }).then(() => onClose());
   };

   const onEdit = () => {
      setEdit(!isEdit);
   };

   const onSubmit = (content) => {
      fetch(`${process.env.REACT_APP_URL}posts/`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            id: +id,
            content,
         }),
      }).then(() => onClose());
   };

   return (
      <div className="post">
         {isLoading && <div> Загрузка... </div>}
         {error && <div> {error} </div>}
         {data && !isLoading && (
            <div className="Post-wrapper">
               <button className="Post_close" type="button" onClick={onClose}>
                  назад
               </button>
               <Post post={findPost()} />
               <div className="Post_control">
                  <button
                     className="Post_delete"
                     type="button"
                     onClick={onDelete}
                  >
                     удалить
                  </button>
                  <button className="Post_close" type="button" onClick={onEdit}>
                     редактировать
                  </button>
                  {isEdit && (
                     <div className="PostPage__edit">
                        <Form
                           post={findPost()}
                           onSubmit={onSubmit}
                           onClose={onClose}
                        />
                     </div>
                  )}
               </div>
            </div>
         )}
      </div>
   );
}

export default PostPage;
