import { useState } from "react";

export const ConsumerComponent = ({ url }) => {
  const [ visible, setVisible ] = useState(false);
  const [ user,    setUser    ] = useState({});

  const getData = async () => {
    const userId = Math.floor(Math.random() * 9) + 1; 
    const { id, name, username, email, address, } = await fetch( `${url}/${userId}` ).then(r => r.json()).then(data => data);
    setUser({
      id,
      name,
      username,
      email,
      address,
    });
    setVisible( !visible );
  };
  

  const handleClick = () => {
    getData(); 
  };

  return (
    <div className="container">
      <button className="btn btn-warning" onClick={ handleClick }>
        Click me to use the API!
      </button>
      {
        visible
        &&
        (
          <div className="user-container">
            <h2>{user.name}</h2>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Username:</strong> @{user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <address>{user.address.street}, {user.address.suite}<br />{user.address.city}, {user.address.zipcode}<br /></address>
          </div>
        )
      }
    </div>
  )
}
