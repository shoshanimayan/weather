import React, { useRef } from 'react'
import { useGLTF , Stats, OrbitControls } from '@react-three/drei'

export default function Model(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF(props.path)
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh position={[0,-.75,0]} geometry={nodes[Object.getOwnPropertyNames(nodes)[1]].geometry} material={materials[Object.getOwnPropertyNames(materials)[0]]}         material-roughness={1}
 />
      <OrbitControls />

    </group>
  )
}

