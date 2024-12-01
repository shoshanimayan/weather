import React, { useRef, useEffect } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const GlbViewer = ({ model }) => {
  const gltf = useLoader(GLTFLoader, model);

  return <primitive object={gltf.scene} />;
};

export default GlbViewer;
