import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = React.useContext(UserContext);

  if(!user) return <h1>Not Logged in </h1>
  return (
    <div>
      <h1>Profile: {user.username}</h1>
    </div>
  )
}

export default Profile