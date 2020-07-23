import React, { useState, useEffect }from 'react';

import MyCard from './MyCard';

const Profile = () => {

  const [profile, setProfile] = useState();

  const currentUserId = localStorage.getItem("currentUserId")
  


  return (
    <div>
    <MyCard />
    </div>
  );
};

export default Profile;