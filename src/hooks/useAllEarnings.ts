import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../srx/utils'
import useSrx from './useSrx'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const srx = useSrx()
  const farms = getFarms(srx)
  const masterChefContract = getMasterChefContract(srx)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, srx])

  useEffect(() => {
    if (account && masterChefContract && srx) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, srx])

  return balances
}

export default useAllEarnings
