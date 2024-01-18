import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'


const AuthButton:React.FC = () => {
  // こう書くことでAuthContextで共有したfalseが入っていることになる
  const auth = useContext(AuthContext);
  console.log(auth); //falseが入っていた。

  const handleSignOut = () => {
    auth?.setUserAuth(false);
  }

  const handleSignIn = () => {
    auth?.setUserAuth(true);
  }

  return (
    <>
      {auth?.userAuth ? <button onClick={handleSignOut}>ログアウト</button> : <button onClick={handleSignIn}>ログイン</button>}
    </>
  )
}

export default AuthButton
