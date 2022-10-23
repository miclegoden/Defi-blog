import { useEffect, useState } from 'react'

import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { Url } from '../config/constants'

// import Button from '@mui/material/Button'
// import Avatar from '@mui/material/Avatar'
// import TwitterIcon from '@mui/icons-material/Twitter'
// import FacebookIcon from '@mui/icons-material/Facebook'
// import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import YouTubeIcon from '@mui/icons-material/YouTube'
// import InstagramIcon from '@mui/icons-material/Instagram'
// import Badge from '@mui/material/Badge'
// import ChatIcon from '@mui/icons-material/Chat'
// import FavoriteIcon from '@mui/icons-material/Favorite'
import { NFTStorage, File } from 'nft.storage'
import { logoM } from '../config/constants'
import { Icon } from '../Icon/icon'
import NetworkSelect from '../views/NetworkSelect'
import ConnectButton from '../components/ConnectWallet/Connectbutton'

import { UserOutlined, MessageTwoTone, HeartTwoTone } from '@ant-design/icons'
import { Avatar, Badge } from 'antd'

import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  Row,
  Col,
  Button,
  CardFooter,
  FormGroup,
  Form,
  Input,
} from 'reactstrap'
import Rightbar from './Rightbar/Rightbar'
import '../assets/css/Style.css'

const Blog = () => {
  useEffect(() => {
    getProfile()
    getSocial()
    getAccount()
    getCount()
    getFavourite()
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

  const getCount = () => {
    let count = localStorage.getItem('count')
    setcount(count)
  }

  const getFavourite = () => {
    let favour = localStorage.getItem('favocount')
    setfavourite(favour)
  }

  const { url } = useParams()
  console.log(url, 'url')
  var commentCount = 0
  const length = 150
  const biolength =
    profileData.description.toString().length > 150
      ? profileData.description.toString().length(0, length)
      : profileData.description

  const fetchBlogContent = async () => {
    const res = await axios.get(`${Url}/${url}`)
    console.log(res, 'res')
    setTitle(res.data.title)
    const text = res.data.text.toString()
    setText(text)
  }

  useEffect(() => {
    if (!title || !text) {
      fetchBlogContent()
    }
  }, [text, title])

  const COMMENT_STORE_API_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIxRDA2NDc0QjQ5NEQxYjE2ZWIwZEMwRjllRWQxNmRFZjQ5ODhlQUMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MzkwNzEzMjU1MCwibmFtZSI6IkNvbW1lbnRzIn0.tI9AXGXzS8sRHCSKzPwv-424wftq963kMH9ajLcPzVc'
  const imageFile = new File([logoM], 'DefiBlogsLogo.png', {
    type: 'image/png',
  })
  const openComment = async (event) => {
    event.preventDefault()
    commentCount++
    const client = new NFTStorage({ token: COMMENT_STORE_API_KEY })
    const metaData = await client.store({
      name: 'Favourite',
      description: 'Like this blog',
      image: imageFile,
    })
    localStorage.setItem('commentCount', commentCount)
    return metaData.url
  }

  const ipfsToHttp = (url) => {
    return url
      .toString()
      .replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/')
  }
  const dataurl = ipfsToHttp(openComment)
  const getMetaData = async (url) => {
    const metaData = fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data
      })

    return metaData
  }
  const commentData = getMetaData(dataurl)

  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    {/* <img
                      alt="..."
                      className="avatar"
                      src={require('assets/img/emilyz.jpg')}
                    /> */}
                    <Link to="/admin/publicProfile">
                      <Avatar
                        className="avatar"
                        icon={<UserOutlined />}
                        src={profileData.image}
                      />
                    </Link>
                    {/* <Avatar
                      className="avatar"
                      alt=""
                      src={profileData.image}
                    ></Avatar> */}

                    <h5 className="title">
                      {account.toString().slice(0, 5) +
                        '...' +
                        account
                          .toString()
                          .slice(account.length - 5, account.length)}
                    </h5>
                  </a>
                  <p className="description"></p>
                  <Button className="btn-follow" variant="contained">
                    FOLLOW
                  </Button>
                  <p className="title-social"></p>
                  <div className="button-container">
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
                    <Button className="btn-icon btn-round" color="instagram">
                      <i className="fab fa-instagram" />
                    </Button>
                    <Button className="btn-icon btn-round" color="medium">
                      <i className="fab fa-medium" />
                    </Button>
                  </div>
                  <p className="title-social">Followers: {count}</p>
                </div>
                <div className="card-description"></div>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Row>
              <Col md="1"></Col>
              <Col md="1">
                <Avatar
                  className="show-avatar"
                  size={50}
                  icon={<UserOutlined />}
                  src={profileData.image}
                  alt=""
                />
              </Col>
              <Col md="8">
                <h1 className="singleBlogTitle">{title}</h1>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <p className="singleBlogText">{text}</p>
              </Col>
            </Row>

            <Row>
              <Col md="10"></Col>
              <Col className="showing" md="2">
                <Badge className="favorite" count={favourite} showZero>
                  {/* <FavoriteIcon /> */}
                  <HeartTwoTone style={{ fontSize: '20px' }} />
                </Badge>
                <Badge count={commentCount} showZero>
                  {/* <ChatIcon className="chat" /> */}
                  <MessageTwoTone style={{ fontSize: '20px' }} />
                </Badge>
              </Col>
              <Col md="1"></Col>
            </Row>
            <Row>
              <Col md="12">
                <Input
                  className="comment-text"
                  cols="80"
                  placeholder="Writing Comment"
                  rows="4"
                  type="textarea"
                />
              </Col>
            </Row>
            <Row>
              <Col md="9"></Col>
              <Col md="2">
                <Button
                  className="post-button btn-fill"
                  color="primary"
                  type="submit"
                >
                  POST COMMENT
                </Button>
              </Col>
            </Row>
          </Col>
          {/* <Col md="4">
            <Rightbar></Rightbar>
          </Col> */}
        </Row>
      </div>
    </>
  )
}

export default Blog
