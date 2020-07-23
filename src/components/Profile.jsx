import React, { useState, useEffect }from 'react';

import MyCard from './MyCard';

const Profile = () => {

  const [profile, setProfile] = useState();


  return (
    <div>
    <MyCard />
    </div>
  );
};

export default Profile;