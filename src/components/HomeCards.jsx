
import Card from './Card';
import faces from '../assets/images/faces.png';
import { useState } from 'react';

const HomeCards = ({post}) => {

  const [showFullPost, setShowFullPost] = useState(false);

  let summary = post.posts[0].post;

  if (!showFullPost) {
    summary = summary.substring(0, 90) + '...';
  }

  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card bg='bg-black-100'>
          <iframe id="player_iframe" src="https://www.buzzsprout.com/2396881?client_source=large_player&iframe=true&referrer=https%3A%2F%2Fwww.buzzsprout.com%2F2396881%2Fpodcast%2Fembed" loading="lazy" width="100%" height="375" frameBorder="0" scrolling="no" title="Operation: Game Night"></iframe>
          </Card>
          <Card bg='bg-black-100 '>
            <div className='text-center' >
              <img src={faces} />
              <h1 className='text-3xl font-extrabold text-black sm:text-5xl md:text-6xl'>Jared Clay and Travis</h1>
            </div>
          </Card>
          <Card>
            <div>
              <h1>Latest Blog Post</h1>
              
                <h1>{post.posts[0].title}</h1>
                <p>{summary}</p>
                <button
          onClick={() => setShowFullPost((prevState) => !prevState)}
          className='text-indigo-500 mb-5 hover:text-indigo-600'
        >
          {showFullPost ? 'Less' : 'More'}
        </button>
            
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
