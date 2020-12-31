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
    3: '0x8CF970410AB312FBaB519b2612Cd2121C3B6b476',
  },
  masterChef: {
    3: '0x9BfFc6d00F3C477aF070933ADfd765dA811E1c5b',
  },
  weth: {
    3: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xSrx: {
    3: '0xd36e24F23eB3DFF9448826C20b72b019ceC85e15'
  }
}


export const supportedPools = [
  // Perm Menu
  {
    pid: 0,
    lpAddresses: {
      3: '0x80e720d93de784772ba65a75293cf3bcc6b69d6e',
    },
    tokenAddresses: {
      3: '0x8CF970410AB312FBaB519b2612Cd2121C3B6b476',
    },
    name: 'Srx Party!',
    symbol: 'SRX-ETH SLP',
    tokenSymbol: 'SRX',
    icon: '🍣',
  },
   {
    pid: 1,
    lpAddresses: {
      3: '0x769236d9f25a6fbcb83dbb99093c4004a2c7dcfc',
    },
    tokenAddresses: {
      3: '0x8CF970410AB312FBaB519b2612Cd2121C3B6b476',
    },
    name: 'Srx Party!',
    symbol: 'SRX-BAT SLP',
    tokenSymbol: 'SRX',
    icon: '🍣',
  },
  
  // Perm Menu
]
