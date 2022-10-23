"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injected = exports.connectors = void 0;

var _metamaskWallet = _interopRequireDefault(require("./WalletIcons/metamaskWallet.png"));

var _Coin = _interopRequireDefault(require("./WalletIcons/Coin98.png"));

var _walletConnect = _interopRequireDefault(require("./WalletIcons/wallet-connect.svg"));

var _MathWallet = _interopRequireDefault(require("./WalletIcons/MathWallet.svg"));

var _TrustWallet = _interopRequireDefault(require("./WalletIcons/TrustWallet.png"));

var _injectedConnector = require("@web3-react/injected-connector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import TokenPocket from './WalletIcons/TokenPocket.svg'
// import SafePal from './WalletIcons/SafePal.svg'
var connectors = {
  Metamask: {
    title: 'Metamask',
    icon: _metamaskWallet["default"],
    chainId: 1,
    priority: 1
  },
  WalletConnect: {
    title: 'WalletConnect',
    icon: _walletConnect["default"],
    connectorId: 'walletconnect',
    chainId: 1,
    priority: 2
  },
  TrustWallet: {
    title: 'Trust Wallet',
    icon: _TrustWallet["default"],
    connectorId: 'injected',
    chainId: 1,
    priority: 3
  },
  MathWallet: {
    title: 'MathWallet',
    icon: _MathWallet["default"],
    connectorId: 'injected',
    chainId: 1,
    priority: 999
  } //   TokenPocket: {
  //     title: 'TokenPocket',
  //     icon: TokenPocket,
  //     connectorId: 'injected',
  //     priority: 999,
  //   },
  //   SafePal: {
  //     title: 'SafePal',
  //     icon: SafePal,
  //     connectorId: 'injected',
  //     priority: 999,
  //   },
  // Coin98: {
  //   title: 'Coin98',
  //   icon: Coin98,
  //   connectorId: 'injected',
  //   chainId: 1,
  //   priority: 999,
  // },

};
exports.connectors = connectors;
var injected = new _injectedConnector.InjectedConnector({
  supportedChainIds: [1, 56]
});
exports.injected = injected;