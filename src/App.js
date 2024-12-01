import logo from './logo.svg';
import './App.css';
import Weather from './weather';
import ReactDOM from "react-dom";

import { Polyhedron } from '@react-three/drei';
import * as THREE from 'three'
import { Stats, OrbitControls } from '@react-three/drei'

import React, { useRef, useState ,Suspense} from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { Environment } from '@react-three/drei'


/*
 <Canvas>
        <Suspense fallback={null}>
          <Environment preset="sunset" background />
          <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
          <mesh visible userData={{ hello: 'world' }} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
  <sphereGeometry args={[1, 16, 16]} />
  <meshStandardMaterial color="hotpink" transparent />
</mesh>
        </Suspense>
      </Canvas>
*/

function App() {
  return (
    <div className="App">
       <Weather/>
    </div>
  );
}

export default App;
