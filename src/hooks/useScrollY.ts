import { useState, useEffect } from 'react'

// Custom hook to get the current scrollY position, 0 - 1
export default function useScrollY() {
  if (typeof window === 'undefined') return 0

  const [scrollY, setScrollY] = useState<number>(window.scrollY / (document.body.scrollHeight - window.innerHeight)) // 0 - 1

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY / (document.body.scrollHeight - window.innerHeight))
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}