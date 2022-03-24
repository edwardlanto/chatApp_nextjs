import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div>
        <h1>Chattr</h1>
        <p>your chats, your way</p>
      </div>

      <form onSubmit={handleLogin}>
        <p>
          Enter your name to start:
        </p>
        <div>
          <input
            type="text"
            onChange={handleLoginChange}
            placeholder="your name"
          />
          <Button text="Sign in to get started" />
        </div>
      </form>
    </div>
  )
}
