// src/components/ARScene.js
import React, { Suspense, useRef } from 'react'
import { XR, XRButton, DefaultXRController } from '@react-three/xr';
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
import Model from './Model';

function ARScene() {
  const group = useRef()

  // Make it float
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime()
  //   group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
  //   group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
  //   group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
  //   group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-8 + Math.sin(t / 2)) / 2, 0.1)
  // })
  return (
    <>
     <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group ref={group} rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
        <Model  />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
      {/* <XRButton /> */}
      {/* <Canvas>
        <XR>
          <ambientLight intensity={0.5} />
          <DefaultXRController />
          <Model position={[0, 0, -1]} scale={[0.5, 0.5, 0.5]} />
        </XR>
      </Canvas> */}
    </>
  );
}

export default ARScene;
