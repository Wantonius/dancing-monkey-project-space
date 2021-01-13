
import {Canvas} from 'react-three-fiber';
import Sphere from './Sphere';	
import {useEffect,useState} from 'react';

	
function App() {
	
	let [lightPosition,setPosition] = useState({
		x:10,
		y:10,
		z:10,
		diff:1
	})
	
	useEffect(() => {
		let interval;
		interval = setInterval(() => {
			setPosition((state) => {
				if(state.x > 100) {
					return {
						...state,
						x:100,
						y:100,
						diff:-1
					}
				}
				if(state.x < 10) {
					return {
						...state,
						x:10,
						y:10,
						diff:1
					}
				}
				return {
					...state,
					x:state.x+state.diff,
					y:state.y+state.diff,
					}
				})
		},100)
		return () => clearInterval(interval);		
	}); 
	
	return (
		<div style={{marginTop:100}}>
		<Canvas>
			<pointLight position={[lightPosition.x,lightPosition.y,lightPosition.z]}/>
			<Sphere position={[1,0,0]}/>
		</Canvas>
		</div>
	);
}

export default App;
