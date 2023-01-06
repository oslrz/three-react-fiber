import { FC, useRef } from "react";
import { lerp } from "three/src/math/MathUtils";
// import { Cone } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import fragmentShader from "../../modules/glsl/fakeGodRaysFrag.glsl";
// import vertexShader from "../../modules/glsl/fakeGodRaysVert.glsl";
// import { sceneState } from "../../modules/store";
import THREE, { PointLight } from "three";

export const Lights: FC = () => {
  const mainLightRef = useRef<THREE.SpotLight>(null);
  const subLightRef = useRef<THREE.SpotLight>(null);
  const rayRef = useRef<THREE.Mesh>(null);

  // const shader: THREE.Shader = {
  //   uniforms: {},
  //   vertexShader,
  //   fragmentShader,
  // };

  // let lightProgress = sceneState.lightProgress;
  // useFrame(() => {
  //   lightProgress = lerp(lightProgress, sceneState.lightProgress, 0.1);

  //   mainLightRef.current!.angle = (Math.PI / 6) * lightProgress;
  //   subLightRef.current!.intensity = 2 * Math.pow(lightProgress, 3);
  //   rayRef.current!.scale.set(lightProgress, 1, lightProgress);
  // });

  return <pointLight position={[0, 20, 10]} intensity={1.5} />;
};
