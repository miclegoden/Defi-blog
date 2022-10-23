import { useState, useEffect } from 'react'
// import Button from '@mui/material/Button'
import NetworkModal from '../components/NetworkModal/networkmodal'
import '../assets/css/NetworkSelect.css'
import { Network } from '../Network/network'

import { Button } from 'reactstrap'

const NetworkSelect = () => {
  useEffect(() => {
    networkChangeName()
    networkChangeIcon()
  })
  const networkChangeName = () => {
    let networkName = localStorage.getItem('networkName')
    setNetWorkName(networkName)
  }
  const networkChangeIcon = () => {
    let networkIcon = localStorage.getItem('networkIcon')
    setNetWorkIcon(networkIcon)
  }
  const [showLogin, setShowLogin] = useState(false)
  const [networkIcon, setNetWorkIcon] = useState(false)
  const [networkName, setNetWorkName] = useState(false)

  return (
    <div>
      <Button
        className="btn-network"
        onClick={() => setShowLogin(true)}
        color="primary"
      >
        <img
          src={networkIcon ? networkIcon : Network.Ethereum.Logo}
          className="icon"
        ></img>
        {networkName ? networkName : 'Ethereum'}
      </Button>

      <NetworkModal show={showLogin} close={() => setShowLogin(false)} />
    </div>
  )
}

export default NetworkSelect
