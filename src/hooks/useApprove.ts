import { useCallback } from 'react'

import useSrx from './useSrx'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import { approve, getMasterChefContract } from '../srx/utils'

const useApprove = (lpContract: Contract) => {
  const { account }: { account: string; ethereum: provider } = useWallet()
  const srx = useSrx()
  const masterChefContract = getMasterChefContract(srx)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, masterChefContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, masterChefContract])

  return { onApprove: handleApprove }
}

export default useApprove
