
import { Polyhedron } from '@react-three/drei';
import * as THREE from 'three'
import { Stats, OrbitControls } from '@react-three/drei'


import React, { useRef, useEffect ,useState ,Suspense} from 'react';
import { Canvas, useLoader} from 'react-three-fiber';
import { Environment,Center } from '@react-three/drei'
import Model from './Model';
const ModelView = ({data=null}) => {
    
   const [modelPath,setModelPath]= useState(data===null?null:data.weather[0].id);

   useEffect(()=>{
    setModelPath(data===null?null:data.weather[0].id)
   },[data])

   const renderObject=()=>
    {
        console.log(modelPath)
        console.log(modelPath===803)

        if(modelPath===null)
        {
            return ;
        }
        let path="";
        switch(modelPath)
        {
            case 800:
                path = '/icons/sun.glb'
                break;
            case 801: case 802: case 803: case 804:
                path = '/icons/cloud.glb'
                break;
            case 600: case 601: case 602: case 611: case 612: case 613: case 615: case 616: case 620: case 621: case 622:
                path = '/icons/cloud.glb'
                break ;
            case 300: case 301: case 302: case 310: case 311: case 312: case 313: case 314: case 321: case 500: case 501: case 502: case 503: case 504: case 511: case 520: case 521: case 522: case 531:
                path = '/icons/rain.glb'
                 break;
            case 200: case 201: case 202: case 210: case 211: case 212: case 221: case 230: case 231: case 232:
                path = '/icons/thunder.glb'
                break;
            default:
                path="";
                break;
        }

        return  <Model path={path} position={[0, 0, 0]}/>


    }

  return (
    <Canvas>
    <Suspense fallback={null}>
        <Environment background >
        <color attach="background" args={['#89CFF0']} />

        </Environment>
        <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} castShadow={false} />
        <Center>
        {renderObject()}
        </Center>
        
    </Suspense>
  </Canvas>
  );
}

export default ModelView