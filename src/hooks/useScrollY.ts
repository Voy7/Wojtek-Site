import { useState, useEffect } from 'react'

// Custom hook to get the current scrollY position, 0 - 1
export default function useScrollY() {
  const [scrollY, setScrollY] = useState<number>(0) // 0 - 1

  useEffect(() => {
    setScrollY(window.scrollY / (document.body.scrollHeight - window.innerHeight))
    const handleScroll = () => setScrollY(window.scrollY / (document.body.scrollHeight - window.innerHeight))
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}