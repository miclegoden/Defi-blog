import React, { useState, useEffect } from 'react'
// import IconButton from '@mui/material/IconButton'
import './networkbutton.css'
import Web3 from 'web3'

import { DownloadOutlined } from '@ant-design/icons'
import { Button, Radio } from 'antd'

const web3 = new Web3(window.ethereum)

const getNetworkId = async () => {
  const currentChainId = await web3.eth.net.getId()
  return currentChainId
}
const NetworkButton = ({ data = {} }) => {
  const changeNetwork = async (data) => {
    localStorage.setItem('networkName', data.ChainName)
    localStorage.setItem('networkIcon', data.Logo)

    const currentChainId = await getNetworkId()
    console.log(currentChainId)
    if (currentChainId !== data.ChainId) {
      try {
        await web3.currentProvider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: Web3.utils.toHex(data.ChainId) }],
        })
      } catch (switchError) {
        if (switchError.code === 4902) {
          alert('add this chain id')
        }
      }
    }
  }
  return (
    <div className="setBtn">
      <Button
        className="setBtn"
        onClick={() => changeNetwork(data)}
        icon={<img src={data.ICON} className="setIcon"></img>}
      ></Button>
    </div>
  )
}

export default NetworkButton
