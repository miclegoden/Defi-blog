import { useState, useEffect, React } from 'react'

// import Modal from '@mui/material/Modal'
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
import NetworkButton from './networkbutton'
import { Network } from '../../Network/network'

import { Button, Modal, Row, Col } from 'antd'
import '../../assets/css/Style.css'

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Row,
//   Col,
//   Button,
//   CardFooter,
//   FormGroup,
//   Form,
//   Input,
//   Modal,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
// } from 'reactstrap'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'grey',

  boxShadow: 24,
  p: 4,
}

const NetworkModal = (props) => {
  return (
    <div>
      <div>
        <Modal
          title="Select Network"
          centered
          open={props.show}
          // onOk={props.close}
          onCancel={props.close}
          width={1000}
          footer={null}
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
          <Row gutter={[16, 24]}>
            {Object.keys(Network).map((key, index) => (
              <Col className="gutter-row" span={3}>
                <div style={style}>
                  <NetworkButton key={index} data={Network?.[key]} />
                </div>
              </Col>
            ))}
          </Row>
        </Modal>
      </div>
    </div>
  )
}

export default NetworkModal
