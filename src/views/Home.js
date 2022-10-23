/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap'

import Rightbar from '../components/Rightbar/Rightbar'
import BlogCard from '../components/BlogCard'

import '../assets/css/Content.css'

function Home(props) {
  useEffect(() => {
    GetdataUrl()
  })
  useEffect(() => {
    fetchAllNfts()
  }, [])
  const GetdataUrl = () => {
    let dataUrl = localStorage.getItem('dataUrl')
    setdataurl(dataUrl)
  }
  const [blogs, setBlogs] = useState()
  const [blogsContent, setBlogsContent] = useState()
  const [dataurl, setdataurl] = useState()

  const fetchAllNfts = async () => {
    const metaData = fetch(dataurl)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data)
      })

    console.log(blogs)
    return metaData
  }
  const fetchBlogsContent = async () => {
    const limit5 = blogs?.slice(0, 5)
    let contentBlog = []

    if (limit5) {
      limit5.map(async (blog) => {
        if (blog) {
          const { externalUrl, owner_of } = blog
          const res = await axios.get(externalUrl)
          const text = res.data.text.toString()
          const title = res.data.title
          contentBlog.push({ title, text, owner_of, externalUrl })
        }
      })
    }

    setBlogsContent(contentBlog)
  }

  useEffect(() => {
    if (blogs && !blogsContent) {
      fetchBlogsContent()
    }
  }, [blogs, blogsContent])

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="8">
            <Card>
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category"></h5>
                    <CardTitle tag="h2">Recommended Blogs</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                {/* <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div> */}

                {blogs &&
                  blogs.map((i) => {
                    return (
                      <BlogCard
                        key={i}
                        title={blogs.name}
                        text={blogs.description}
                        ownerOf={blogs.account}
                        externalUrl={blogs.externalUrl}
                        Count={blogs.Count}
                      />
                    )
                  })}
           
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Rightbar />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home
