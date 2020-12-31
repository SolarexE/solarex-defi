import { useCallback } from 'react'

import useSrx from './useSrx'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../srx/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const srx = useSrx()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(srx),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, srx],
  )

  return { onStake: handleStake }
}

export default useStake
