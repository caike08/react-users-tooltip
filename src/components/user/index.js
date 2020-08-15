import React from 'react'
import './user.scss'

export default ({user = {
  id: null,
  name: '',
  profile_img: ''
}}) => {

  return (
    <div id={user.id} className='user'>
      <img alt={user.name} src={user.profile_img} className='profileImg'></img>
      <span className='name'>{user.name}</span>
    </div>
  )
};
