import React, {useContext} from 'react'
import {AppContext} from '../Context'

export default function User() {
    const {username} = useContext(AppContext);
  return (
    <div>User: {username}</div>
  )
}
