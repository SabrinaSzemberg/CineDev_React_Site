import React from 'react'
import S from './Loading.module.css'

const Loading = () => {
  return (
    <div className={S.container}>
      <div className={S.loading}>
      <h1>MegaFlix<span>HD</span></h1>
      </div>
    </div>
  )
}

export default Loading