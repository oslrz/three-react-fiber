import React, { FC, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { sceneState } from "../../modules/store";
import { CameraAnimation } from "./CameraAnimation";
import { Lights } from "./Lights";
import { useFrame } from "@react-three/fiber";
import { Loading } from "./Loading";
import { Model } from "./Model";
import { SwayingGrass } from "./SwayingGrass";
import { BackgroundWord } from "./BackgroundWord";

export const TCanvas: FC = () => {
  return (
    <Canvas
      camera={{
        position: sceneState.camera.position,
        fov: 50,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.01,
        far: 1000,
      }}
      dpr={window.devicePixelRatio}
      shadows
      onCreated={({ camera }) => camera.lookAt(...sceneState.camera.target)}
      // style={{ borderBottomLeftRadius: '30% 50%' }}
    >
      <pointLight position={[1, 1, 1]} intensity={1.5} />
      {/* <Lights /> */}
      <color attach="background" args={["#000"]} />
      {/* <OrbitControls target={[0, 1.5, 2.5]} /> */}
      <Suspense fallback={<Loading />}>
        {/* <Model /> */}
        {/* <BackgroundWord /> */}
        <SwayingGrass />
        <CameraAnimation />
      </Suspense>
    </Canvas>
  );
};
