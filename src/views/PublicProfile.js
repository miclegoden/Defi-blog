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
import { Card, CardHeader, CardBody, Row, Col, Button } from 'reactstrap'

import { UserOutlined, MessageTwoTone, HeartTwoTone } from '@ant-design/icons'
import { Avatar, Badge } from 'antd'

import '../assets/css/Style.css'
import PersonalBlog from 'components/PersonalBlog'

function PublicProfile() {
  useEffect(() => {
    getProfile()
    getSocial()
    getAccount()
    // getCount()
    // getFavourite()
  })

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [commentText, setcommentText] = useState('')
  const [profileData, setprofileData] = useState(true)
  const [socialData, setsocialData] = useState(true)
  const [account, setaccount] = useState(true)
  const [count, setcount] = useState(true)
  const [favourite, setfavourite] = useState(true)

  const getProfile = () => {
    let profiledata = localStorage.getItem('profileData')
    setprofileData(profiledata)
  }
  const getSocial = () => {
    let socialdata = localStorage.getItem('socialData')
    setsocialData(socialdata)
  }

  const getAccount = () => {
    let account = localStorage.getItem('account')
    console.log(account)
    setaccount(account)
  }

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
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <h5 className="title"></h5>
                <p className="category">
                  {' '}
                  <a href="https://nucleoapp.com/?ref=1712"></a>
                </p>
                <Row>
                  <Col md="1"></Col>
                  <Col md="2">
                    <Avatar
                      className="avatar"
                      icon={<UserOutlined />}
                      src={profileData.image}
                    />
                  </Col>
                  <Col md="8">
                    <Row>
                      <Col md="3">
                        <p className="title-social">UserName</p>
                      </Col>
                      <Col md="3">
                        <p className="title-social">Followers: 0</p>
                      </Col>
                      <Col md="6">
                        <Button className="btn-icon btn-round" color="facebook">
                          <i className="fab fa-facebook" />
                        </Button>
                        <Button className="btn-icon btn-round" color="twitter">
                          <i className="fab fa-twitter" />
                        </Button>
                        <Button className="btn-icon btn-round" color="linkedin">
                          <i className="fab fa-linkedin" />
                        </Button>
                        <Button className="btn-icon btn-round" color="youtube">
                          <i className="fab fa-youtube" />
                        </Button>
                        <Button
                          className="btn-icon btn-round"
                          color="instagram"
                        >
                          <i className="fab fa-instagram" />
                        </Button>
                        <Button className="btn-icon btn-round" color="medium">
                          <i className="fab fa-medium" />
                        </Button>
                        <Button className="btn-icon btn-round" color="google">
                          <i className="fab fa-google-plus" />
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <p className="title-bio">Bio</p>
                      </Col>
                      <Col md="6">
                        <p className="title-add">
                          Address:<h4>{account}</h4>
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="all-icons">
                {blogs &&
                  blogs.map((i) => {
                    if (blogs.account == account) {
                      return (
                        <PersonalBlog
                          key={i}
                          title={blogs.name}
                          text={blogs.description}
                          ownerOf={blogs.account}
                          externalUrl={blogs.externalUrl}
                          Count={blogs.Count}
                        />
                      )
                    }
                  })}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default PublicProfile
