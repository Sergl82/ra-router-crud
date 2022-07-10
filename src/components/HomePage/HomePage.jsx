import React from 'react';
import useFetch from '../useFetch/useFetch';
import Posts from './Posts';

function HomePage() {
   const [data, isLoading, error] = useFetch(
      `${process.env.REACT_APP_URL}posts`
   );

   return (
      <div className="posts">
         {isLoading && <div> Загрузка... </div>}
         {error && <div> {error} </div>}

         {data && !isLoading && (
            <section className="posts-wrapper">
               {data.length < 1 ? <div>нет постов</div> : <Posts data={data} />}
            </section>
         )}
      </div>
   );
}

export default HomePage;
