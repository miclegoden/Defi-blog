import { useState } from 'react'
// import Button from '@mui/material/Button'
import Onboard from '@web3-onboard/core'
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { toHex, truncateAddress } from './utils'
import injectedModule from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'
import walletLinkModule from '@web3-onboard/walletlink'
import icon from '../../images/defiblogs-removebg-logo.png'
import { Network } from '../../Network/network'

import { Button } from 'reactstrap'

const injected = injectedModule()
const walletConnect = walletConnectModule()
const walletLink = walletLinkModule()

const MAINNET_RPC_URL = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
const ROPSTEN_RPC_URL = `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`
const RINKEBY_RPC_URL = `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`

const onboard = Onboard({
  wallets: [walletLink, walletConnect, injected],
  chains: [
    {
      id: '0x1', // chain ID must be in hexadecimel
      token: 'ETH', // main chain token
      namespace: 'evm',
      label: 'Ethereum Mainnet',
      rpcUrl: MAINNET_RPC_URL,
    },
    {
      id: '0x3',
      token: 'tROP',
      namespace: 'evm',
      label: 'Ethereum Ropsten Testnet',
      rpcUrl: ROPSTEN_RPC_URL,
    },
    {
      id: '0x4',
      token: 'rETH',
      namespace: 'evm',
      label: 'Ethereum Rinkeby Testnet',
      rpcUrl: RINKEBY_RPC_URL,
    },
  ],
  appMetadata: {
    name: 'Blog Dapp',
    icon: icon,
    logo: icon,
    description: 'My app using Onboard',
    recommendedInjectedWallets: [
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
      { name: 'MetaMask', url: 'https://metamask.io' },
    ],
  },
})

const Connectbutton = () => {
  const { active, library, connector, activate, deactivate } = useWeb3React()
  const [provider, setProvider] = useState()
  const [account, setAccount] = useState()
  const [error, setError] = useState('')
  const [chainId, setChainId] = useState()
  const [network, setNetwork] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const connectWallet = async () => {
    try {
      const wallets = await onboard.connectWallet()
      setIsLoading(true)
      const { accounts, chains, provider } = wallets[0]
      setAccount(accounts[0].address)
      setChainId(chains[0].id)
      setProvider(provider)
      setIsLoading(false)
      localStorage.setItem('account', accounts[0].address)
      console.log(accounts[0].address, 'sss')
    } catch (error) {
      setError(error)
    }
  }

  const disconnect = async () => {
    const [primaryWallet] = await onboard.state.get().wallets
    if (!primaryWallet) return
    await onboard.disconnectWallet({ label: primaryWallet.label })
    refreshState()
  }

  const refreshState = () => {
    setAccount('')
    setChainId('')
    setProvider()
  }

  return (
    <div>
      {!account ? (
        <Button onClick={connectWallet} color="primary">
          Connect Wallet
        </Button>
      ) : (
        <Button onClick={disconnect} variant="outlined" color="primary">
          Disconnect
        </Button>
      )}

      {/* <WalletModal open={showModal} close={() => setshowModal(false)} /> */}
    </div>
  )
}

export default Connectbutton
