import './BlogCard.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Network } from '../Network/network'
// import Badge from '@mui/material/Badge'
// import ChatIcon from '@mui/icons-material/Chat'
// import FavoriteIcon from '@mui/icons-material/Favorite'
import { NFTStorage, File } from 'nft.storage'
import { logoM } from '../config/constants'

import { Row, Col } from 'reactstrap'

import { UserOutlined, MessageTwoTone, HeartTwoTone } from '@ant-design/icons'
import { Avatar, Badge } from 'antd'

const PersonalBlog = ({ text, title, ownerOf, externalUrl, Count }) => {
  useEffect(() => {
    filterNetwork()
    getCommentCount()
  })

  const [nerworkIcon, setNetworkIcon] = useState()
  const [commentCount, setCommentCount] = useState()
  var clickCount = 0
  const length = 100
  const trimmedString = text.length > 100 ? text.substring(0, length) : text

  const account = `${ownerOf.slice(0, 4)}...${ownerOf.slice(38)}`

  console.log(externalUrl, 'daga')
  // const navigate = useNavigate()

  const getCommentCount = () => {
    let CommentCount = localStorage.getItem('CommentCount')
    setCommentCount(CommentCount)
  }

  const clickHandler = () => {
    const lastSegment = externalUrl.split('/').pop()
    const urlLink = '/admin/showblog/'
    console.log(urlLink, 'url')
    return urlLink
  }
  console.log(Network.Ethereum.ChainId)

  const data = Object.keys(Network).map((index) => Network?.[index])
  console.log(data[0].ChainId, 'ada')

  const filterNetwork = () => {
    const NetworkContractAddress = externalUrl
    for (let key = 0; key < data.length; key++) {
      console.log(data[1].ContractAddress, 'sdf')
      if (data[key].ContractAddress === NetworkContractAddress) {
        console.log(data[key].ChainName)
        setNetworkIcon(data[key].Logo)
      }
    }
  }

  const FAVOURITE_STORE_API_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIxRDA2NDc0QjQ5NEQxYjE2ZWIwZEMwRjllRWQxNmRFZjQ5ODhlQUMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MzkwNzE0MDA2NywibmFtZSI6Ikxpa2VzIn0.FJb54BrEOJ1mICyDg06jIYDmskugCsUAwhhshD7KVKg'

  const imageFile = new File([logoM], 'DefiBlogsLogo.png', {
    type: 'image/png',
  })
  const increaseLiking = async () => {
    console.log(clickCount, 'asd')
    clickCount = clickCount + 1
    if (clickCount % 2 === 1) {
      Count++
    } else {
      Count--
    }
    console.log(Count, 'Count')
    const client = new NFTStorage({ token: FAVOURITE_STORE_API_KEY })
    const metaData = await client.store({
      name: 'Favourite',
      description: 'Like this blog',
      image: imageFile,
      count: Count,
    })
    localStorage.setItem('facvoCount', Count)

    return metaData.url
  }
  const ipfsToHttp = (url) => {
    return url
      .toString()
      .replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/')
  }
  const url = ipfsToHttp(increaseLiking)
  const getMetaData = async (url) => {
    const metaData = fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data
      })

    return metaData
  }
  // const favodata = getMetaData(url).Count
  const favodata = Count
  localStorage.setItem('count', favodata)

  return (
    <div className="blog_container">
      <Link to={clickHandler}>
        <div className="blog">
          <div className="blog_leftSide">
            <div className="blogger">
              <span className="blogger_name">"{account}"</span>
            </div>
            <div className="blog_title">
              <h3>{title}</h3>
            </div>
            <div className="blog_content">
              <p>{trimmedString}...</p>
            </div>
          </div>
          <div className="blog_rightSide">
            <div>
              <img
                className="blog_image"
                src="https://ipfs.io/ipfs/QmewfGjZ79a73DogmL17sB7VKS1yNTW9NBxeU6avdbpnt6/defiblogs.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Link>
      <div>
        <Row>
          <Col md="2">
            <img src={nerworkIcon} className="netIcon"></img>
          </Col>
          <Col md="8"></Col>
          <Col className="showing" md="2">
            <Badge className="favorite" count={favodata} showZero>
              <HeartTwoTone
                onClick={increaseLiking}
                style={{ fontSize: '20px' }}
              />
            </Badge>
            <Badge count={commentCount} showZero>
              <MessageTwoTone style={{ fontSize: '20px' }} />
            </Badge>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PersonalBlog
