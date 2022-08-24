import React, { useEffect, useState } from 'react'
import {BsArrowRight} from 'react-icons/bs'


const FirstBlogSide = ({blogs}) => {

  return (
    <div className='blog-first-side'>
        {
            blogs.map(({id,title,description,image,date}) =>{
                return (
                    <div className='blog-first-side-item' key={id}>
                        <div className="blog-first-side-item-image">
                            <img src={image.src} alt={image.alt}  className="blog-image" />
                            <div className="blog-date">
                                <span className='blog-date-day'>{date.day}</span>
                                <span className='blog-date-month-year'>{date.month+ " "+ date.year}</span>
                            </div>
                        </div>
                        <h2><a href="#somewhere">{title}</a></h2>
                        <p>{description}</p>
                        <div className="continue">
                            <p>By Admin | StreetStyle, Fashion, Couple | 8 Comments</p>
                            <a href="#something">CONTINUE READING <BsArrowRight/></a>
                        </div>
                    </div>
                )
            })
        }
        <div className="blog-first-side-pagination">
            <div className="blog-first-side-pagination-page page-1"><a href="#1page">1</a></div>
            <div className="blog-first-side-pagination-page"><a href="2page">2</a></div>
        </div>

    </div>
  )
}

export default FirstBlogSide