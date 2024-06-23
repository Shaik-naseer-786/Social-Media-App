import React from 'react'
import './Home.css'
import Stories from '../../components/Stories/Stories'
import AddPost from '../../components/AddPost/AddPost'
import CurrentUserData from '../../FakeApis/CurrentUserData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Feed from '../../components/Feed/Feed'
const Home = () => {
  return (
    <>
    <Stories></Stories>
    <AddPost/>
    <Feed/>
    </>
  )
}

export default Home
