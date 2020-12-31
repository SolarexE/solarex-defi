import {useCallback} from 'react'

import useSrx from './useSrx'
import {useWallet} from 'use-wallet'

import {leave, getXSrxStakingContract} from '../srx/utils'

const useLeave = () => {
  const {account} = useWallet()
  const srx = useSrx()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXSrxStakingContract(srx),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, srx],
  )

  return {onLeave: handle}
}

export default useLeave
