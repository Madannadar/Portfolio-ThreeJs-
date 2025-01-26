import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props, isMobile) => {
  const { nodes, materials } = useGLTF('models/react_logo.glb')
  return (
    <Float floatIntensity={2}>
      <group position={[8, 8, 0]} scale={isMobile? 0.5 : 0.8} {...props} dispose={null}> 
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('models/react_logo.glb')
export default ReactLogo