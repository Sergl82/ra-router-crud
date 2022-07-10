import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

function NewPost() {
   const navigate = useNavigate();
   const onClose = () => navigate('/');

   const onSubmit = (content) => {
      if (content === '') {
         onClose();
         return;
      }
      fetch(`${process.env.REACT_APP_URL}posts`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            id: 0,
            content,
         }),
      }).then(() => onClose());
   };

   return (
      <div className="NewPost">
         <Form onSubmit={onSubmit} onClose={onClose} />
      </div>
   );
}

export default NewPost;
