import { useState } from 'react';

export default () => {
  const [likes, setLikes] = useState(0);
  beastId = beast._id;

  return (
    <div>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
      <p>Likes: {likes}</p>
    </div>
  );
}