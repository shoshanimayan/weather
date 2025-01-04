
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

   const isDaytime=(data)=> {

  
    const currentUnixTime = Math.floor(Date.now() / 1000); // Get current time in Unix timestamp
  
  
  
    return currentUnixTime > data.sys.sunrise && currentUnixTime < data.sys.sunset;
  
  }

   const renderObject=()=>
    {
       

        if(modelPath===null)
        {
            return ;
        }
        let path="";

        switch(modelPath)
        {
            case 800:
                if(isDaytime(data)){
                    path = new URL('./icons/sun.glb', import.meta.url);
                }
                else
                {
                    path = new URL('./icons/moon.glb', import.meta.url);
 
                }
                break;
            case 801: case 802: case 803: case 804:
                path = new URL('./icons/cloud.glb', import.meta.url);
                break;
            case 600: case 601: case 602: case 611: case 612: case 613: case 615: case 616: case 620: case 621: case 622:
                path = new URL('./icons/cloud.glb', import.meta.url);
                break ;
            case 300: case 301: case 302: case 310: case 311: case 312: case 313: case 314: case 321: case 500: case 501: case 502: case 503: case 504: case 511: case 520: case 521: case 522: case 531:
                path = new URL('./icons/rain.glb', import.meta.url);
                 break;
            case 200: case 201: case 202: case 210: case 211: case 212: case 221: case 230: case 231: case 232:
                path = new URL('./icons/thunder.glb', import.meta.url);
                break;
            default:
                path="";
                break;
        }
        console.log(path)
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