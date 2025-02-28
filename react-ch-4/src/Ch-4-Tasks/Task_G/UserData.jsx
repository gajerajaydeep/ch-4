import React, { useEffect, useState } from 'react';

function UserData(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((e) => console.log('error', e));
  }, []);

//   console.log(data, 'data');

  return (
    <ul>
      {data.map((value) => (
        <li key={value.id}>
          User Name: {value.name} <br /> email: {value.email}
        </li>
      ))}
    </ul>
  );
}

export default UserData;