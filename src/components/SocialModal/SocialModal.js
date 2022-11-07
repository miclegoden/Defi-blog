import { useState, useEffect, React } from 'react'

// import Modal from '@mui/material/Modal'
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
// import NetworkButton from './networkbutton'
import { Network } from '../../Network/network'

import { Modal } from 'antd'
import { NFTStorage } from 'nft.storage'
import { logoM } from '../../config/constants'
import '../../assets/css/Style.css'

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'grey',
  boxShadow: 24,
  p: 4,
}

const SocialModal = (props) => {
  const [twitterUrl, settwitterUrl] = useState('')
  const [facebookUrl, setfacebookUrl] = useState('')
  const [linkedinUrl, setlinkedinUrl] = useState('')
  const [youtubeUrl, setyoutubeUrl] = useState('')
  const [instagramUrl, setinstagramUrl] = useState('')
  const [mediumUrl, setmediumUrl] = useState('')
  const [dappradarUrl, setdappradatUrl] = useState('')

  const SOCIAL_API_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIxRDA2NDc0QjQ5NEQxYjE2ZWIwZEMwRjllRWQxNmRFZjQ5ODhlQUMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDI4NTg1MDEwOCwibmFtZSI6IlNvY2lhbCBMaW5rcyJ9.hrwsDNlKos4Oe4RezhazSVHMG6e4yvjMwz87eOKABmQ'
  const imageFile = new File([logoM], 'DefiBlogsLogo.png', {
    type: 'image/png',
  })

  const saveUrl = async () => {
    const client = new NFTStorage({
      token: SOCIAL_API_KEY,
    })
    const metadata = await client.store({
      name: 'social',
      description: 'social URL link',
      image: imageFile,
      twitter: twitterUrl,
      facebook: facebookUrl,
      linkedin: linkedinUrl,
      youtube: youtubeUrl,
      instagram: instagramUrl,
      medium: mediumUrl,
      dappradar: dappradarUrl,
    })
    settwitterUrl('')
    setfacebookUrl('')
    setlinkedinUrl('')
    setyoutubeUrl('')
    setinstagramUrl('')
    return metadata.url
  }
  const ipfsToHttp = (url) => {
    return url
      .toString()
      .replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/')
  }
  const dataurl = ipfsToHttp(saveUrl)
  const getMetaData = async (url) => {
    const metaData = fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data
      })

    localStorage.setItem('socialData', metaData)
    return metaData.url
  }
  return (
    <div>
      <div>
        <Modal
          title="Socials"
          centered
          open={props.show}
          // onOk={props.close}
          onCancel={props.close}
          width={500}
          footer={[
            <Button key="back" onClick={saveUrl}>
              Save
            </Button>,
            // <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            //   Submit
            // </Button>,
            // <Button
            //   key="link"
            //   href="https://google.com"
            //   type="primary"
            //   loading={loading}
            //   onClick={handleOk}
            // >
            //   Search on Google
            // </Button>,
          ]}
          // onClose={props.close}
          // aria-labelledby="modal-modal-title"
          // aria-describedby="modal-modal-description"
          // modalClassName="modal"
          // isOpen={props.show}
        >
          {/* <Box sx={style}>
            <Grid container spacing={2}>
              {Object.keys(Network).map((key, index) => (
                <Grid item xs={3}>
                  <NetworkButton key={index} data={Network?.[key]} />
                </Grid>
              ))}
            </Grid>
          </Box> */}
          <div className="button-container">
            <Row>
              <Col md="1"></Col>
              <Col md="2">
                <Button className="btn-icon btn-round" color="facebook">
                  <i className="fab fa-facebook" />
                </Button>
              </Col>
              <Col md="8">
                <Input
                  placeholder="Facebook URL"
                  prefix={<i className="fab fa-facebook" />}
                  size="large"
                  value={facebookUrl}
                  onChange={(e) => setfacebookUrl(e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col md="1"></Col>
              <Col md="2">
                <Button className="btn-icon btn-round" color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
              </Col>
              <Col md="8">
                <Input
                  placeholder="Twitter URL"
                  prefix={<i className="fab fa-twitter" />}
                  value={twitterUrl}
                  onChange={(e) => settwitterUrl(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col md="1"></Col>
              <Col md="2">
                <Button className="btn-icon btn-round" color="linkedin">
                  <i className="fab fa-linkedin" />
                </Button>
              </Col>
              <Col md="8">
                <Input
                  placeholder="Linkedin URL"
                  prefix={<i className="fab fa-linkedin" />}
                  size="large"
                  value={linkedinUrl}
                  onChange={(e) => setlinkedinUrl(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col md="1"></Col>
              <Col md="2">
                <Button className="btn-icon btn-round" color="youtube">
                  <i className="fab fa-youtube" />
                </Button>
              </Col>
              <Col md="8">
                <Input
                  placeholder="Youtube URL"
                  prefix={<i className="fab fa-youtube" />}
                  size="large"
                  value={youtubeUrl}
                  onChange={(e) => setyoutubeUrl(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col md="1"></Col>
              <Col md="2">
                <Button className="btn-icon btn-round" color="instagram">
                  <i className="fab fa-instagram" />
                </Button>
              </Col>
              <Col md="8">
                <Input
                  placeholder="Instagram URL"
                  prefix={<i className="fab fa-instagram" />}
                  size="large"
                  value={instagramUrl}
                  onChange={(e) => setinstagramUrl(e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col md="1"></Col>
              <Col md="2">
                <Button className="btn-icon btn-round" color="medium">
                  <i className="fab fa-medium" />
                </Button>
              </Col>
              <Col md="8">
                <Input
                  placeholder="Medium URL"
                  prefix={<i className="fab fa-medium" />}
                  size="large"
                  value={mediumUrl}
                  onChange={(e) => setmediumUrl(e.target.value)}
                />
              </Col>
            </Row>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default SocialModal
