import { useRef, React } from "react";
import * as THREE from "three";
import { RGBELoader } from "three-stdlib";
import { useFrame, useLoader, Canvas } from "@react-three/fiber";
import {
  useFBO,
  Center,
  Text3D,
  Instance,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
} from "@react-three/drei";

import { MeshRefractionMaterial } from "./MeshRefactionMaterial";

export function BackgroundWord() {
  const { text, shadow, ...config } = {
    text: "Visar",
    clearcoat: { value: 1, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.25, min: 0, max: 1 },
    uRefractPower: { value: 0.35, min: 0, max: 5 },
    uTransparent: { value: 0.25, min: 0, max: 5 },
    uIntensity: { value: 1.3, min: 0.0, max: 5.0 },
    uNoise: { value: 0.03, min: 0, max: 1, step: 0.01 },
    uSat: { value: 1.0, min: 1, max: 1.25, step: 0.01 },
    uColor: "#e26686",
    gColor: "#ff7a7a",
    shadow: "#80446c",
  };
  return (
    <Text
      config={config}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 2.25]}
    >
      {text}
    </Text>
  );
}

function Text({
  children,
  config,
  font = "./font/Inter_Medium_Regular.json",
  ...props
}) {
  const ref = useRef();
  const fbo = useFBO(1024);
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );

  let oldBg;
  // useFrame((state) => {
  //   // Set render target to the local buffer
  //   state.gl.setRenderTarget(fbo);
  //   // Save the current background and set the HDR as the new BG
  //   // This is what creates the reflections
  //   oldBg = state.scene.background;
  //   state.scene.background = texture;
  //   // Render into the buffer
  //   state.gl.render(state.scene, state.camera);
  //   // Set old state back
  //   state.scene.background = oldBg;
  //   state.gl.setRenderTarget(null);
  //   //@ts-ignore
  //   ref.current.visible = true;
  // });

  return (
    // <group ref={ref}>
    //   <Center scale={[0.8, 1, 1]} front top {...props}>
    //     <Text3D
    //       castShadow
    //       bevelEnabled
    //       font={font}
    //       scale={5}
    //       letterSpacing={-0.03}
    //       height={0.25}
    //       bevelSize={0.01}
    //       bevelSegments={10}
    //       curveSegments={128}
    //       bevelThickness={0.01}
    //     >
    //       {children}
    //       {/** Pass the rendered buffer into the refraction shader */}
    //       <MeshRefractionMaterial uSceneTex={fbo.texture} {...config} />
    //     </Text3D>
    //   </Center>
    // </group>
    <Center scale={[0.8, 1, 1]} front top {...props}>
      <Text3D
        font={font}
        scale={5}
        letterSpacing={-0.03}
        height={0.01}
        curveSegments={32}
      >
        {children}
        <meshBasicMaterial color={config.gColor} />
      </Text3D>
    </Center>
  );
}
