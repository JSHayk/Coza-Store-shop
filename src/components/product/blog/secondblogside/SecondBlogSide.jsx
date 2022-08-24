import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const SecondBlogSide = ({blogData,setBlogs,featured,setFeatured,inputValue,setinputValue}) => {

  const handleSearch = () =>{
    
       inputValue && setBlogs(blogData.filter(blog =>{
        return blog.title.includes(inputValue) 
    })) 
   
  }
  return (
    <div className='blog-second-side'>
        <div className='blog-second-side-search'>
           <input type="text" placeholder="Search" className='blog-second-side-search-input' value={inputValue} onChange={(e)=>setinputValue(e.target.value)}  onKeyDown={(e)=>e.keyCode===13 && handleSearch()}/> 
            <AiOutlineSearch className='blog-second-side-search-icon' onClick={handleSearch}/>
        </div>
        <div className="blog-second-side-categories">
            <h2>Categories</h2>
            <ul>
                <li><a href="categorie">Fashion</a></li>
                <li><a href="categorie">Beauty</a></li>
                <li><a href="categorie">Street Style</a></li>
                <li><a href="categorie">Life Style</a></li>
                <li><a href="categorie">DIY & Crafts</a></li>
            </ul>
        </div>
        <div className="blog-second-side-categories-featured">
            <h2>Featured Products</h2>
            {
                featured.map(({id,image,description,price}) => {
                    return(
                        <div className="blog-second-side-categories-featured-item" key={id}>
                            <div className="blog-second-side-categories-featured-item-image">
                                <img src={image.src} alt={image.alt} />
                                <div className="blog-color-image"></div>
                            </div>

                            <a href="#go"><p>{description}</p></a>
                            <span>{price}</span>
                        </div>
                    )
                    
                })
            }
        </div>
        <div className="blog-second-side-archive">
            <h2>Archive</h2>
            <ul>
                <li><a href="#somewhere"><p>July 2018</p><span>(9)</span></a></li>
                <li><a href="#somewhere"><p>June 2018</p><span>(39)</span></a></li>
                <li><a href="#somewhere"><p>May 2018</p><span>(29)</span></a></li>
                <li><a href="#somewhere"><p>April 2018</p><span>(35)</span></a></li>
                <li><a href="#somewhere"><p>March 2018</p><span>(22)</span></a></li>
                <li><a href="#somewhere"><p>February 2018</p><span>(32)</span></a></li>
                <li><a href="#somewhere"><p>January 2018</p><span>(21)</span></a></li>
                <li><a href="#somewhere"><p>December 2017</p><span>(26)</span></a></li>
            </ul>
        </div>
        <div className="blog-second-side-tags">
            <h2>Tags</h2>
            <section className='blog-second-side-tags-section'>
                <div className='blog-second-side-tags-section-tag'><p><a href="#tag">Fashion</a></p></div>
                <div className='blog-second-side-tags-section-tag'><p><a href="#tag">Lifestyle</a></p></div>
                <div className='blog-second-side-tags-section-tag'><p><a href="#tag">Denim</a></p></div>
                <div className='blog-second-side-tags-section-tag'><p><a href="#tag">Streetstyle</a></p></div>
                <div className='blog-second-side-tags-section-tag'><p><a href="#tag">Crafts</a></p></div>
            </section>

        </div>
    </div>
  )
}

export default SecondBlogSide