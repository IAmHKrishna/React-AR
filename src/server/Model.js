// src/components/Model.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { scene } = useGLTF('http://localhost:5000/models/mac-draco.glb');
//   const { scene } = useGLTF('http://localhost:5000/models/scene.gltf');
  return <primitive object={scene} {...props} />;
}
