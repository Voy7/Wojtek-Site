'use client'

import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree, Canvas } from '@react-three/fiber'
import useScrollY from '@/hooks/useScrollY'

// 3D background canvas component
export default function Canvas3D() {
  const [loaded, setLoaded] = useState<boolean>(false)
  const scrollY = useScrollY()

  const STARS_COUNT = 300

  const styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    transition: '0.5s ease-in-out',
    // background: `linear-gradient(90deg,
    //   rgba(20, 20, 30, 0.2) 0%,
    //   rgba(40, 40, 60, 0.25) 50%,
    //   rgba(20, 20, 30, 0.2) 100%
    // )`
  } as const

  return (
    <Canvas
      style={loaded ? styles : { ...styles, opacity: 0 }}
      onCreated={() => setLoaded(true)}
    >
      <Camera />
      <pointLight position={[10, 10, 10]} />
      <ambientLight intensity={0.75} />
      { [...Array(STARS_COUNT)].map((_, i) => (
        <StarMesh
          key={i}
          scrollY={scrollY}
        />
      )) }
    </Canvas>
  )
}

// Camera component
function Camera() {
  // Orbit the camera around the center of the scene
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, 10)
  }, [])

  useFrame((state, delta) => {
    camera.position.x = Math.sin(state.clock.elapsedTime / 2) * 7
    camera.position.y = Math.sin(state.clock.elapsedTime / 2) * 7
    camera.lookAt(0, 0, 0)
  })

  return null
}

// 3D star mesh component
function StarMesh({ scrollY }: { scrollY: number }) {
  const ref = useRef<any>(null)

  const MAX_X = 22
  const MAX_Y = 15
  const MAX_Z = 2

  const [position] = useState<[number, number, number]>([
    Math.random() * MAX_X * (Math.random() < 0.5 ? -1 : 1),
    Math.random() * MAX_Y * (Math.random() < 0.5 ? -1 : 1),
    Math.random() * MAX_Z
  ])

  useFrame((state, delta) => {
    ref.current.position.y = position[1] + scrollY * 3
  })
  
  return (
    <mesh
      ref={ref}
      position={position}
      scale={0.05}
    >
      <boxGeometry />
      <meshStandardMaterial
        color={"white"}
        metalness={0.5}
        roughness={0.5}
        // wireframe={true}
      />
    </mesh>
  )
}