import { useCallback } from 'react'

import useSrx from './useSrx'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../srx/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const srx = useSrx()
  const masterChefContract = getMasterChefContract(srx)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, srx],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
