import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useSrx from '../../hooks/useSrx'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../srx/utils'
import { getFarms } from '../../srx/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const srx = useSrx()
  const { account } = useWallet()

  const farms = getFarms(srx)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
