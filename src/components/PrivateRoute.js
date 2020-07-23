import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import Axios from "axios";

function App({ path, component }) {
  const history = useHistory();
  
  // If authentification is false, to prevent flashes
  const [hasAccess, setHasAccess] = useState(false);


const getUserData = () => {
  Axios({
    method: "post",
    url: `http://localhost:8000/api/users/checkToken`,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
  .then((response) => response.data)
  .then((data) => localStorage.setItem('currentUserId', data.userId))
  .then(setHasAccess(true))
  .catch((error) => {
    localStorage.clear()
    history.push("/signin")
  });
  
}

	useEffect(() => {
    getUserData();
	}, []);

  if(hasAccess) {
    return (<Route path={path} component={component} />);
  }
  return null; 
}

export default App;
