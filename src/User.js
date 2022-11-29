import React, { useEffect } from 'react';

const User = () => {
  useEffect(() => {
    console.log('did update');
    return function() {
      console.log('will unmount');
    };
  });
  return <div>User</div>;
};

export default User;
