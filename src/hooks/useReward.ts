import { useCallback } from 'react'

import useSrx from './useSrx'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../srx/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const srx = useSrx()
  const masterChefContract = getMasterChefContract(srx)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, srx])

  return { onReward: handleReward }
}

export default useReward
