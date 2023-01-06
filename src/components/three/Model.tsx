import { FC, MutableRefObject, useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Sparkles, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { cameraSet } from "../../modules/datas";
import { sceneState } from "../../modules/store";
import { publicPath } from "../../modules/utils";
import React from "react";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
  };
  materials: {
    Shrek: THREE.MeshStandardMaterial;
    shrekshirt_S: THREE.MeshStandardMaterial;
  };
};
const ModelPath = publicPath("assets/models/shrek.glb");

export const Model: FC = () => {
  const group = useRef<THREE.Group>(null);
  const sparklesRef = useRef<THREE.Points>(null);
  console.log(useGLTF(ModelPath));
  const { nodes, materials, scene } = useGLTF(
    ModelPath
  ) as unknown as GLTFResult;

  materials.Shrek.emissive = new THREE.Color("#1c4000");
  materials.Shrek.emissiveIntensity = 0.1;

  const myShrek_0 = React.useRef();
  const myShirt_0= React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
		//@ts-ignore
    myShrek_0.current.rotation.z = a;
  });
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
		//@ts-ignore
    myShirt_0.current.rotation.z = a;
  });

  const myShrek_1 = React.useRef();
  const myShirt_1 = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
		//@ts-ignore
    myShrek_1.current.rotation.z = a;
  });
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
		//@ts-ignore
    myShirt_1.current.rotation.z = a;
  });

  const myShrek_2 = React.useRef();
  const myShirt_2 = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
		//@ts-ignore
    myShrek_2.current.rotation.z = a;
  });
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
		//@ts-ignore
    myShirt_2.current.rotation.z = a;
  });

  const handleClick = () => {
    if (sceneState.camera.name === "original") {
      sceneState.camera = cameraSet.camera2;
    } else if (sceneState.camera.name === "pray") {
      sceneState.camera = cameraSet.camera1;
    }
    sceneState.hoveredFigure = false;
  };

  const handlePointerEnter = () => {
    sceneState.hoveredFigure = true;
  };

  const handlePointerLeave = () => {
    sceneState.hoveredFigure = false;
  };

  return (
    <group ref={group} dispose={null}>
      {/* shrek 1 */}
      <mesh
				//@ts-ignore
        ref={myShrek_0}
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Shrek}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        position={[0, 0.3, 1]}
        rotation={[80, 0, 0]}
        scale={[0.6, 0.3, 0.3]}
      />
      <mesh
				//@ts-ignore
        ref={myShirt_0}
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.shrekshirt_S}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        position={[0, 0.3, 1]}
        rotation={[80, 0, 0]}
        scale={[0.6, 0.3, 0.3]}
      />
      {/* shrek 2 */}
      <mesh
				//@ts-ignore
        ref={myShrek_1}
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Shrek}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        position={[1, 0.3, 1]}
        rotation={[80, 0, 0]}
        scale={[0.6, 0.3, 0.3]}
      />
      <mesh
				//@ts-ignore
        ref={myShirt_1}
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.shrekshirt_S}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        position={[1, 0.3, 1]}
        rotation={[80, 0, 0]}
        scale={[0.6, 0.3, 0.3]}
      />
      {/* shrek 3 */}
      <mesh
				//@ts-ignore
        ref={myShrek_2}
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Shrek}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        position={[-1, 0.3, 1]}
        rotation={[80, 0, 0]}
        scale={[0.6, 0.3, 0.3]}
      />
      <mesh
				//@ts-ignore
        ref={myShirt_2}
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.shrekshirt_S}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        position={[-1, 0.3, 1]}
        rotation={[80, 0, 0]}
        scale={[0.6, 0.3, 0.3]}
      />
      <Sparkles
        ref={sparklesRef}
        position-y={0.5}
        count={30}
        scale={[1.3, 2.2, 1.3]}
        size={4}
        speed={0.4}
      />
    </group>
  );
};

useGLTF.preload(ModelPath);
