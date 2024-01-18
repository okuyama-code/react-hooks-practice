import React from 'react'
import AuthButton from './AuthButton'
import AuthDisplay from './AuthDisplay'

const UserAuth:React.FC = () => {
  return (
    <div>
      <h2>ユーザー認証</h2>
      <AuthButton />
      <AuthDisplay />
    </div>
  )
}

export default UserAuth
