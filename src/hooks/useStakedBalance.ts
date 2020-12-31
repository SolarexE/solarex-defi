import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../srx/utils'
import useSrx from './useSrx'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const srx = useSrx()
  const masterChefContract = getMasterChefContract(srx)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, srx])

  useEffect(() => {
    if (account && srx) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, srx])

  return balance
}

export default useStakedBalance
