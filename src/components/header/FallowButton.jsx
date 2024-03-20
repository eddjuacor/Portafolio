import  { useState } from 'react';

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleToggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <button
      onClick={handleToggleFollow}
      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-white cursor-pointer ${isFollowing ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'}`}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  );
};

export default FollowButton;

