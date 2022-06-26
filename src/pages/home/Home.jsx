import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import './Home.css';

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation()


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('https://my-blogger-be.herokuapp.com/api/posts' + search);
      setPosts(res.data)
    }
    fetchPosts();
  }, [search])

  return (
    <>
      <Header />
      <div className='home'>
      </div>

    </>
  )
}

export default Home