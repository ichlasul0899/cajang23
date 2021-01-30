import React, {useState} from 'react'
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";
const User = () => {
  const [user, setUser] = useState({ name: 'max' })
  
  const nameChangedHandler = (e) => {
    setUser({name: e.target.value})
  }

  return (
    <div>
      <UserInput
        name={user.name}
        changed={nameChangedHandler}
      >
        My Hobbies: Racing
      </UserInput>
      <UserOutput name={user.name}></UserOutput>
    </div>
  );
}

export default User
