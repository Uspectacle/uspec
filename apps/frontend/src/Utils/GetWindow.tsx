import { useEffect, useState } from 'react'

export const getWindow = () => {
  const [innerWidth, setInnerWidth] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)

  const handleWindowResize = () => {
    if (window.innerWidth) setInnerWidth(window.innerWidth)
    if (window.innerHeight) setInnerHeight(window.innerHeight)
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
  }, [])

  return { innerWidth, innerHeight }
}
