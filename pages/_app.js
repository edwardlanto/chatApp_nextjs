import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const router = useRouter();
  const handleLogin = (e) => {
    localStorage.setItem('chatAppUser', username);
    e.preventDefault();
    router.push("/chat");
  };

  useEffect(() => {
    if(localStorage.getItem('chatAppUser')){
      setUsername(localStorage.getItem('chatAppUser'));
      router.push("/chat")
    }
  }, [])


  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Component
      handleLoginChange={(e) => setUsername(e.target.value)}
      username={username}
      userLocation={userLocation}
      handleLogin={handleLogin}
      {...pageProps}
    />
    </>
  );
}

export default MyApp;
