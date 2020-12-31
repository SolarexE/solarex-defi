import {useCallback} from 'react'

import useSrx from './useSrx'
import {useWallet} from 'use-wallet'

import {enter, getXSrxStakingContract} from '../srx/utils'

const useEnter = () => {
  const {account} = useWallet()
  const srx = useSrx()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXSrxStakingContract(srx),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, srx],
  )

  return {onEnter: handle}
}

export default useEnter
