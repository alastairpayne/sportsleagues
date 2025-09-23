import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { getAllLeagues } from './api';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllLeagues = async () => {
      try {
        const { leagues } = await getAllLeagues();
        console.log(leagues);
      }
      catch (err) {
        console.error(err);
      }
      finally {
        setLoading(false);
      }
    }
    fetchAllLeagues();
  }, []);


  if (loading) return <p>Loading...</p>;

  return (
    <>
    </>
  )
}

export default App
