import React from 'react'

const Registration = () => {
  return (
    <div>
      <label>
        Email:
        <input type="email"/>
      </label>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <label>
        Profile photo:
        <input type="password"/>
      </label>
      <button type="submit">Login</button>
    </div>
  )
}

export default Registration