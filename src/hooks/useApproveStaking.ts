import {useCallback} from 'react'

import useSrx from './useSrx'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getSrxContract,
  getXSrxStakingContract
} from '../srx/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const srx = useSrx()
  const lpContract = getSrxContract(srx)
  const contract = getXSrxStakingContract(srx)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
