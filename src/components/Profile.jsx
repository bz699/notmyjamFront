import React, { useState, useEffect }from 'react';

import MyCard from './MyCard';

const Profile = () => {

  const [profile, setProfile] = useState();

  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <div>
    <MyCard />
    </div>
  );
};

export default Profile;