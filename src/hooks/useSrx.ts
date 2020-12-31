import { useContext } from 'react'
import { Context } from '../contexts/SrxProvider'

const useSrx = () => {
  const { srx } = useContext(Context)
  return srx
}

export default useSrx
