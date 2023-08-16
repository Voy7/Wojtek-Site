'use client'

import { useRef, useState, useEffect } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'

// 3D background canvas component
export default function Canvas3D() {
  const [loaded, setLoaded] = useState<boolean>(false)

  const STARS_COUNT = 250
  const MAX_X = 8
  const MAX_Y = 12
  const MAX_Z = 2

  const styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    transition: '0.5s ease-in-out'
  } as const

  return (
    <Canvas
      style={loaded ? styles : { ...styles, opacity: 0 }}
      onCreated={() => setLoaded(true)}
    >
      <pointLight position={[10, 10, 10]} />
      <ambientLight intensity={0.3} />
      { [...Array(STARS_COUNT)].map((_, i) => (
        <StarMesh
          key={i}
          position={[
            Math.random() * MAX_X * (Math.random() < 0.5 ? -1 : 1),
            Math.random() * MAX_Y * (Math.random() < 0.5 ? -1 : 1),
            Math.random() * MAX_Z
          ]}
        />
      )) }
    </Canvas>
  )
}

// 3D star mesh component
function StarMesh({ position }: { position: [number, number, number] }) {
  const ref = useRef<any>(null)
  const [scrollY, setScrollY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame((state, delta) => {
    const y = scrollY / (document.body.scrollHeight - window.innerHeight)

    ref.current.rotation.x += y * 0.1
    ref.current.rotation.y += y * 0.1
    ref.current.rotation.z += y * 0.1

    ref.current.position.y = position[1] + y * 2
  })
  
  return (
    <mesh
      ref={ref}
      position={position}
      scale={0.05}
    >
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        // wireframe={true}
        color={"white"}
      />
    </mesh>
  )
}