import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}


export const contractAddresses = {
  srx: {
    56: '0x52B2EE624b6a13893977FA4A54103c739a21A05F',
  },
  masterChef: {
    56: '0xaA37E4A6e6e7aFd4773f1D6dDD3529B0A45714DE',
  },
  weth: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
  xSrx: {
    56: '0xB8f8B9462be09373dEb6F5Ef4ff092F65cd68826'
  }
}


export const supportedPools = [
  // Perm Menu
  {
    pid: 0,
    lpAddresses: {
      56: '0x2c3ad38b9b637486740da14d1902b508c69e4c97',
    },
    tokenAddresses: {
      56: '0x52B2EE624b6a13893977FA4A54103c739a21A05F',
    },
    name: 'Srx Party!',
    symbol: 'SRX-BNB SLP',
    tokenSymbol: 'SRX',
    icon: '🍣',
  },
  
  // new Pool
  
   {
    pid: 1, // because the side is on 1.
    lpAddresses: {
      56: '0x2C3AD38B9b637486740da14D1902b508c69E4C97', // LP Token 
    },
    tokenAddresses: {
      56: '0x52B2EE624b6a13893977FA4A54103c739a21A05F', // reward tokens // which is SRX
    },
    name: 'Srx Party!',
    symbol: 'SRX-BNB SLP 2',
    tokenSymbol: 'SRX',
    icon: 'New',
  },
   
  
  // Perm Menu
]
