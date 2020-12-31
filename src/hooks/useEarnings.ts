import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../srx/utils'
import useSrx from './useSrx'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const srx = useSrx()
  const masterChefContract = getMasterChefContract(srx)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, srx])

  useEffect(() => {
    if (account && masterChefContract && srx) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, srx])

  return balance
}

export default useEarnings
