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
// react plugin for creating notifications over the dashboard
import NotificationAlert from 'react-notification-alert'

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from 'reactstrap'

// import Avatar from '@mui/material/Avatar'
import { logoM } from '../config/constants'
import { NFTStorage } from 'nft.storage'
import { Icon } from '../Icon/icon'
import Web3 from 'web3'
import '../assets/css/Style.css'

import { UserOutlined, MessageTwoTone, HeartTwoTone } from '@ant-design/icons'
import { Avatar, Badge } from 'antd'

const web3 = new Web3(window.ethereum)

function UserProfile() {
  const notificationAlertRef = React.useRef(null)
  useEffect(() => {
    ChangeAccount()
    getFileUrl()
    getSocialUrl()
  })
  const ChangeAccount = () => {
    let DefaultAccount = localStorage.getItem('account')

    setShowAccount(DefaultAccount)
  }

  const getFileUrl = () => {
    let uploadfileUrl = localStorage.getItem('uploadfileUrl')
    setfileUrl(uploadfileUrl)
  }

  const getSocialUrl = () => {
    let socialData = localStorage.getItem('socialData')
    setsocialUrl(socialData)
  }
  const [showAccount, setShowAccount] = useState(true)
  const [editModal, seteditModal] = useState(false)
  const [socialModal, setsocialModal] = useState(false)
  const [fileUrl, setfileUrl] = useState(true)
  const [socialUrl, setsocialUrl] = useState(true)
  const [bioText, setbioText] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)

  const PROFILE_API_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIxRDA2NDc0QjQ5NEQxYjE2ZWIwZEMwRjllRWQxNmRFZjQ5ODhlQUMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDI4NTgzOTExNSwibmFtZSI6IlByb2ZpbGUifQ.wtL8kqJIjlLfyVZBCWOcTV0INmtcSltG_cybxD7GPv0'

  const mint = async (account, uri) => {
    let options = {
      contractAddress: '0x636F8301a3E35247Bcd6069B97B20093f2aa7915', //OLD ONE: 0x4092C71D6e69E5C69c795C459D6517f4Cca89481 OLD NEW: 0xbf05d4500d635dc7fD78aaA8eF928007FEce1077
      functionName: 'safeMint',
      abi: [
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'string',
              name: 'uri',
              type: 'string',
            },
          ],
          name: 'safeMint',
          outputs: [],
          stateMutability: 'payable',
          type: 'function',
        },
      ],
      params: {
        to: account,
        uri: uri,
      },
      msgValue: web3.utils.toWei('0.3', 'ether'),
    }
    var contract = new web3.eth.Contract(options.abi, options.contractAddress)
    contract.methods
      .safeMint(account, uri)
      .send({ from: showAccount })
      .on('receipt', function () {
        console.log('good')
      })
  }

  const imageFile = new File([logoM], fileUrl, {
    type: 'image/png',
  })

  const fileUpload = async () => {
    const client = new NFTStorage({
      token: PROFILE_API_KEY,
    })
    console.log(bioText, 'bio')
    const metadata = await client.store({
      name: 'Bio',
      description: bioText,
      image: imageFile,
      user: showAccount,
    })
    setbioText('')
    await mint(showAccount, metadata.url)
    return metadata.url
  }

  const ipfsToHttp = (url) => {
    return url
      .toString()
      .replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/')
  }
  const dataurl = ipfsToHttp(fileUpload)
  const getMetaData = async (url) => {
    const metaData = fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data
      })
    localStorage.setItem('profileData', metaData)

    return metaData
  }

  const profileData = getMetaData(dataurl)
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
                    <Avatar
                      className="avatar"
                      alt=""
                      icon={<UserOutlined />}
                      src={profileData.image}
                    ></Avatar>

                    <h5 className="title">
                      {showAccount.toString().slice(0, 5) +
                        '...' +
                        showAccount
                          .toString()
                          .slice(showAccount.length - 5, showAccount.length)}
                    </h5>
                  </a>
                  <p className="description"></p>
                </div>
                <div className="card-description">
                  <p className="title-social">Followers: 0</p>
                </div>
              </CardBody>
              <CardFooter>
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
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Username</label>
                        <Input placeholder="Username" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="1"></Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="mike@email.com" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input placeholder="First Name" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input placeholder="Last Name" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input placeholder="Home Address" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input placeholder="City" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input placeholder="Country" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Phone Number</label>
                        <Input placeholder="" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <label>Bio</label>
                        <Input
                          cols="80"
                          placeholder="Here can be your description"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
                {/* <div className="react-notification-alert-container">
                  <NotificationAlert ref={notificationAlertRef} />
                </div> */}
                <Alert color="warning">
                  <span>
                    <p className="warning">
                      <i className="show-alert tim-icons icon-alert-circle-exc" />
                      Anything you add will be public and saved on IPFS
                      permanently.
                    </p>
                  </span>
                </Alert>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default UserProfile
