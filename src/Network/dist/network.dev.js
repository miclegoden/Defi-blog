"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RPC_URLS = exports.RPC = exports.Chains = exports.supportedChains = exports.Network = void 0;

var _icon = require("./icon");

var supportedChains = ['Ethereum', 'Algorand', 'Arbitrum', 'Astar', 'Avalanche', 'BSC', 'Boba', 'Celo', 'CLV', 'Cronos', 'Fantom', 'Houbi', 'Klaytn', 'Polygon', 'Moonbeam', 'Near', 'Oasis', 'Harmony', 'Optimism', 'Shiden', 'Solana', 'Telos', 'Tezos', 'Theta', 'Tron'];
exports.supportedChains = supportedChains;
var Chains = {
  Ethereum: 1,
  //Algorand: ,
  Arbitrum: 42161,
  Astar: 592,
  Avalanche: 43114,
  BSC: 56,
  Boba: 288,
  Celo: 42220,
  CLV: 1024,
  Cronos: 25,
  Fantom: 250,
  Houbi: 128,
  Klaytn: 8217,
  Polygon: 137,
  Moonbeam: 1284,
  Near: 1212161554,
  Oasis: 26863,
  Harmony: 1666600000,
  Optimism: 10,
  Shiden: 336,
  //Solana,
  Telos: 40,
  //Tezos,
  Theta: 361 //Tron,

};
exports.Chains = Chains;
var RPC = {
  Ethereum: {
    chainId: 1,
    chainName: 'Ethereum',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000',
      // needed for proper form handling in the TokenFormCard component
      logoURI: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880'
    },
    blockExplorerUrls: ['https://etherscan.io'],
    icon: _icon.ICON.Ethereum,
    rpcUrls: [process.env.ALCHEMY_KEY ? "https://eth-mainnet.g.alchemy.com/v2/".concat(process.env.ALCHEMY_KEY) : '', 'https://cloudflare-eth.com'].filter(function (url) {
      return !!url;
    })
  },
  Algorand: {
    chainId: 1,
    chainName: 'Algorand'
  },
  Arbitrum: {
    chainId: 42161,
    chainName: 'Arbitrum',
    nativeCurrency: {
      name: 'ETH',
      decimals: 18,
      address: '',
      logoURI: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880'
    },
    icon: _icon.ICON.Arbitrum
  },
  Astar: {
    chainId: 592,
    chainName: 'Astar',
    nativeCurrency: {
      name: 'ASTR',
      decimals: 18,
      address: '',
      logoURI: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880'
    },
    icon: _icon.ICON.Astar
  },
  BSC: {
    chainId: 56,
    chainName: 'BSC',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000',
      logoURI: 'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615'
    },
    rpcUrls: ['https://rpc-bsc.bnb48.club'],
    blockExplorerUrls: ['https://bscscan.com'],
    icon: _icon.ICON.BSC
  },
  Polygon: {
    chainId: 137,
    chainName: 'Polygon',
    nativeCurrency: {
      name: 'Polygon',
      symbol: 'MATIC',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000',
      logoURI: 'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912'
    },
    rpcUrls: [process.env.ALCHEMY_KEY ? "https://polygon-mainnet.g.alchemy.com/v2/".concat(process.env.ALCHEMY_KEY) : '', 'https://polygon-rpc.com'].filter(function (url) {
      return !!url;
    }),
    blockExplorerUrls: ['https://polygonscan.com'],
    icon: _icon.ICON.Polygon
  },
  Avalanche: {
    chainId: 43114,
    chainName: 'Avalanche',
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000',
      logoURI: 'https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png?1604021818'
    },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://snowtrace.io'],
    icon: _icon.ICON.Avalanche
  }
};
exports.RPC = RPC;
var RPC_URLS = {};
exports.RPC_URLS = RPC_URLS;
var Network = {
  Ethereum: {
    ChainName: 'Ethereum',
    ChainId: 1,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Ethereum,
    ICON: _icon.ICON.EthereumBlack
  },
  Avalanche: {
    ChainName: 'Avalanche',
    ChainId: 43114,
    ContractAddress: '0x636F8301a3E35247Bcd6069B97B20093f2aa7915',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Avalanche,
    ICON: _icon.ICON.AvalancheBlack
  },
  Binance: {
    ChainName: 'Binance',
    ChainId: 56,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.BSC,
    ICON: _icon.ICON.BSCBlack
  },
  Algorand: {
    ChainName: 'Algorand',
    ChainId: 1,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Algorand,
    ICON: _icon.ICON.AlgorandBlack
  },
  Arbitrum: {
    ChainName: 'Arbitrum',
    ChainId: 42161,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Arbitrum,
    ICON: _icon.ICON.ArbitrumBlack
  },
  Astar: {
    ChainName: 'Astar',
    ChainId: 592,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Astar,
    ICON: _icon.ICON.AstarBlack
  },
  Boba: {
    ChainName: 'Boba',
    ChainId: 288,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Boba,
    ICON: _icon.ICON.BobaBlack
  },
  Celo: {
    ChainName: 'Celo',
    ChainId: 42220,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Celo,
    ICON: _icon.ICON.CeloBlack
  },
  CLV: {
    ChainName: 'CLV',
    ChainId: 1024,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.CLV,
    ICON: _icon.ICON.CLVBlack
  },
  Cronos: {
    ChainName: 'Cronos',
    ChainId: 25,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Cronos,
    ICON: _icon.ICON.CronosBlack
  },
  Fantom: {
    ChainName: 'Fantom',
    ChainId: 250,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Fantom,
    ICON: _icon.ICON.FantomBlack
  },
  Houbi: {
    ChainName: 'Houbi',
    ChainId: 128,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Houbi,
    ICON: _icon.ICON.HoubiBlack
  },
  Klaytn: {
    ChainName: 'Klaytn',
    ChainId: 8217,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Klaytn,
    ICON: _icon.ICON.KlyantnBlack
  },
  Polygon: {
    ChainName: 'Polygon',
    ChainId: 137,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Polygon,
    ICON: _icon.ICON.PolygonBlack
  },
  Moonbeam: {
    ChainName: 'Moonbeam',
    ChainId: 1284,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Moonbeam,
    ICON: _icon.ICON.MoonbeamBlack
  },
  Near: {
    ChainName: 'Near',
    ChainId: 1212161554,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Near,
    ICON: _icon.ICON.NearBlack
  },
  Oasis: {
    ChainName: 'Oasis',
    ChainId: 26863,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Oasis,
    ICON: _icon.ICON.OasisBlack
  },
  Harmony: {
    ChainName: 'Harmony',
    ChainId: 1666600000,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Harmony,
    ICON: _icon.ICON.EthereumBlack
  },
  Optimism: {
    ChainName: 'Optimism',
    ChainId: 10,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Optimism,
    ICON: _icon.ICON.OptimismBlack
  },
  Shiden: {
    ChainName: 'Shiden',
    ChainId: 336,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Shiden,
    ICON: _icon.ICON.ShidenBlack
  },
  Solana: {
    ChainName: 'Solana',
    ChainId: 1,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Solana,
    ICON: _icon.ICON.EthereumBlack
  },
  Telos: {
    ChainName: 'Telos',
    ChainId: 40,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Telos,
    ICON: _icon.ICON.TelosBlack
  },
  Tezos: {
    ChainName: 'Tezos',
    ChainId: 1,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Tezos,
    ICON: _icon.ICON.TezosBlack
  },
  Theta: {
    ChainName: 'Theta',
    ChainId: 361,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Theta,
    ICON: _icon.ICON.ThetaBlack
  },
  Tron: {
    ChainName: 'Tron',
    ChainId: 1,
    ContractAddress: '0x',
    MarkterplaceContractAddress: '0x',
    Logo: _icon.LOGO.Tron,
    ICON: _icon.ICON.TronBlack
  }
};
exports.Network = Network;