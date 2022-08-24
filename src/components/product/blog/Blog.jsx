import React, { useEffect, useState } from 'react'
import './Blog.scss'
import FirstBlogSide from './firstblogside/FirstBlogSide'
import SecondBlogSide from './secondblogside/SecondBlogSide'
import {blogData} from '../../../data/blogData'
import {blogDataFeatured} from '../../../data/blogData'



const Blog = () => {
  

  const [inputValue,setinputValue] = useState("")
  const [blogs ,setBlogs] = useState(blogData)
  const [featured,setFeatured] = useState(blogDataFeatured);

  useEffect(()=>{
    console.log(inputValue);
  },[inputValue])

  return (
    <div className='blog'>
        <FirstBlogSide blogs={blogs}/>
        <SecondBlogSide blogData={blogData} setBlogs={setBlogs} featured={featured} setFeatured={setFeatured} inputValue={inputValue} setinputValue={setinputValue}/>
    </div>
  )
}

export default Blog