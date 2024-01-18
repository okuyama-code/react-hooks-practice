import React, { createContext, useState } from 'react'

type Props = {
  children: React.ReactNode
}

type InitialState = {
  userAuth: boolean;
  setUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<InitialState | null>(null)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);

  return (
    // valueで渡すことによって全体で共有される
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {/* 今後ラップ予定のコンポーネントがここに入りますよということでchildrenを書く。それがpropsとしてわたってくる{ children } */}
      {children}
    </AuthContext.Provider>
  )
}

// 次はApp.tsxにここで作ったAuthProviderを導入する。App.tsxへ移動
