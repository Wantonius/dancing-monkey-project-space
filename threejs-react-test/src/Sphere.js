import React,{useRef} from 'react';
import { useFrame } from 'react-three-fiber'

const Sphere = (props) => {

	const mesh = useRef();

	useFrame(() => {
		mesh.current.rotation.x += 0.01
	})
	return (
	<mesh {...props} ref={mesh}>
		<sphereBufferGeometry args={[3,16,16]}/>
		<meshToonMaterial color="#296E01"/>
	</mesh>
	)
}

export default Sphere;