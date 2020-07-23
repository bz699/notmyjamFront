import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import axios from "axios";

function App({ path, component }) {
  const history = useHistory();
  
  // If authentification is false, to prevent flashes
  const [hasAccess, setHasAccess] = useState(false);

  console.log(hasAccess)

	useEffect(() => {
		axios({
			method: "post",
			url: `http://localhost:8000/api/users/checkToken`,
			headers: {
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
    })
    .then(setHasAccess(true))
    .catch((error) => history.push("/signin"));
	}, []);

  if(hasAccess) {
    return (<Route path={path} component={component} />);
  }
  return null; 
}

export default App;
