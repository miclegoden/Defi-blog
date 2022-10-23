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
import React, { useEffect, useState } from 'react'

// reactstrap components
import { Button, Card, CardTitle, CardBody, Row, Col } from 'reactstrap'

import axios from 'axios'
import BlogCard from '../components/BlogCard'
// import Button from '@mui/material/Button'
import { useWeb3React } from '@web3-react/core'
import { Link, Route, Switch } from 'react-router-dom'
import { Avatar, Badge } from 'antd'

import { UserOutlined, MessageTwoTone, HeartTwoTone } from '@ant-design/icons'

import Rightbar from 'components/Rightbar/Rightbar'
import NewStory from './NewStory'
import '../assets/css/Style.css'

function ShowBlog() {
  useEffect(() => {
    GetdataUrl()
  })
  const GetdataUrl = () => {
    let dataUrl = localStorage.getItem('dataUrl')
    setdataurl(dataUrl)
  }
  const { isInitialized, isAuthenticated, account } = useWeb3React()

  const [blogs, setBlogs] = useState()
  const [blogsContent, setBlogsContent] = useState()
  const [dataurl, setdataurl] = useState()

  const fetchAllNfts = async (dataurl) => {
    const metaData = fetch(dataurl)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data)
      })
  }

  const fetchBlogsContent = async () => {
    const limit5 = blogs?.slice(0, 20)
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

  useEffect(() => {
    if (isInitialized && isAuthenticated) {
      fetchAllNfts()
    }
  }, [isAuthenticated, isInitialized, account])

  // const clickHandler = () => {
  //   // Redirect('/admin/newstory')
  //   return (
  //     <Switch>
  //       <Route path="/admin/newstory" element={<NewStory />} />
  //     </Switch>
  //   )
  // }
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="8">
            <Card className="card-plain">
              <CardTitle tag="h2">Blogs</CardTitle>
              <CardBody>
                {blogs && blogs?.length > 0 ? (
                  blogs.map((i) => {
                    return (
                      <BlogCard
                        key={i}
                        title={blogs.name}
                        text={blogs.description}
                        ownerOf={blogs.account}
                        externalUrl={blogs.externalUrl}
                      />
                    )
                  })
                ) : (
                  <div
                    style={{
                      fontSize: '30px',
                      width: '100%',
                      marginLeft: '40%',
                    }}
                  >
                    <p>No Blogs Yet</p>
                    <Link to="/admin/newstory">
                      <Button className="btn-fill" color="primary">
                        Create one
                      </Button>
                    </Link>
                  </div>
                )}
                <Row>
                  <Col md="1"></Col>
                  {/* <Col md="1"> */}
                  {/* <Avatar
                      className="show-avatar"
                      size={50}
                      icon={<UserOutlined />}
                      src={profileData.image}
                      alt=""
                    /> */}
                  {/* </Col> */}
                  <Col md="8">
                    <h1 className="showBlogTitle">Title</h1>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <p className="singleBlogText">My first</p>
                  </Col>
                </Row>
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

export default ShowBlog
