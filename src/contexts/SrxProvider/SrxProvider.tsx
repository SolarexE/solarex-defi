import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Srx } from '../../srx'

export interface SrxContext {
  srx?: typeof Srx
}

export const Context = createContext<SrxContext>({
  srx: undefined,
})

declare global {
  interface Window {
    srxsauce: any
  }
}

const SrxProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [srx, setSrx] = useState<any>()

  // @ts-ignore
  window.srx = srx
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const srxLib = new Srx(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setSrx(srxLib)
      window.srxsauce = srxLib
    }
  }, [ethereum])

  return <Context.Provider value={{ srx }}>{children}</Context.Provider>
}

export default SrxProvider
