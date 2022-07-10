import React, { useState } from 'react';
import propTypes from 'prop-types';

function Form({ onSubmit, onClose }) {
   const [form, setForm] = useState({ content: '' });
   const onFieldChange = (e) => {
      const { target } = e;
      setForm((prev) => ({
         ...prev,
         [target.name]: target.value,
      }));
   };
   const onSubmitForm = () => {
      onSubmit(form.content);
   };

   return (
      <div className="Form">
         <form>
            <textarea
               className="Form_content"
               name="content"
               value={form.content}
               onChange={onFieldChange}
               placeholder="Введите текст"
            />
            <div className="Form_control">
               <button
                  className="Form_submit"
                  type="button"
                  onClick={onSubmitForm}
               >
                  опубликовать
               </button>
               <button className="Form_close" type="button" onClick={onClose}>
                  ×
               </button>
            </div>
         </form>
      </div>
   );
}

Form.propTypes = {
   onSubmit: propTypes.func.isRequired,
   onClose: propTypes.func.isRequired,
};

export default Form;
