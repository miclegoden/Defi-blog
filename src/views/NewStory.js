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
import NotificationAlert from 'react-notification-alert'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  CardFooter,
  FormGroup,
  Form,
  Input,
} from 'reactstrap'

import { NFTStorage, File } from 'nft.storage'
import { logoM } from '../config/constants'
import Web3 from 'web3'

import Rightbar from 'components/Rightbar/Rightbar'
import '../assets/css/Style.css'

const web3 = new Web3(window.ethereum)

function NewStory() {
  const notificationAlertRef = React.useRef(null)
  useEffect(() => {
    GetshowAccount()
  })
  const GetshowAccount = () => {
    let DefaultAccount = localStorage.getItem('DefaultAccount')
    setgetshowAccount(DefaultAccount)
    console.log(DefaultAccount)
  }
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [getshowAccount, setgetshowAccount] = useState()
  const [dataUrl, setdataUrl] = useState()

  const NFT_STORE_API_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhENjY0RWM0YzVmYTAyZTU3RUMzRThFMjBlOTdmMDBCNEU0MGUwNTIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MzA4MjcxNzI3MywibmFtZSI6IkRlZmlibG9ncyJ9.ICK8h6xZtxW1qquaVwSIYwJ2Qg3m0mUaaE9uLK2eVrM'

  const client = new NFTStorage({ token: NFT_STORE_API_KEY })

  const imageFile = new File([logoM], 'DefiBlogsLogo.png', {
    type: 'image/png',
  })
  const contractAddress = '0x636F8301a3E35247Bcd6069B97B20093f2aa7915'
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
      .send({ from: getshowAccount })
      .on('receipt', function () {
        console.log('good')
      })
  }

  const uploadFile = async (event) => {
    event.preventDefault()
    const Count = 0

    try {
      const metadata = await client.store({
        name: title,
        description: text,
        image: imageFile,
        account: getshowAccount,
        externalUrl: contractAddress,
        count: Count,
      })

      console.log(metadata.url, 'here')
      console.log(getshowAccount, ' hte')
      // const metadata = await uploadNftMetada(myblog.url)
      setdataUrl(metadata.url)

      // localStorage.setItem('dataUrl', metadata.url)
      console.log(metadata, ' meta')
      await mint(getshowAccount, metadata.url)

      const ipfsToHttp = (url) => {
        const data = url.replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/')
        return data
      }
      console.log(metadata.url)
      const url = ipfsToHttp(metadata.url)
      localStorage.setItem('dataUrl', url)
      console.log(url, 'URL')

      var options = {}
      options = {
        place: 'tr',
        message: (
          <div>
            <div>Save Successfully!</div>
          </div>
        ),
        type: 'success',
        icon: 'tim-icons icon-bell-55',
        autoDismiss: 7,
      }
      notificationAlertRef.current.notificationAlert(options)
    } catch (error) {
      var options = {}
      options = {
        place: 'tr',
        message: (
          <div>
            <div>Something is wrong</div>
          </div>
        ),
        type: 'warning',
        icon: 'tim-icons icon-bell-55',
        autoDismiss: 7,
      }
      notificationAlertRef.current.notificationAlert(options)
    }
  }

  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
        <Row>
          <Col md="8">
            <Col md="12">
              <Card>
                <CardHeader>
                  <h2 className="title">New Blog</h2>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={uploadFile}>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">Title</label>
                          <Input
                            placeholder="Title"
                            type="text"
                            autoFocus={true}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                          <Input
                            className="textarea"
                            type="textarea"
                            placeholder="Tell your story..."
                            autoFocus={true}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Publish
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Col>
          <Col md="4">
            <Rightbar></Rightbar>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default NewStory
