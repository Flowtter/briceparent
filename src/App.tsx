import React from 'react';
import Hobbies from './components/hobbies';
import Introduction from './components/Introduction';
import Contact from './components/contact';
import Feature from './components/feature';
import Waves from './components/waves';

import './styles.css';

function App() {
	return (
		<div id='body'>
			<Waves />
			<Introduction />
			<div>
				{/* <div style={{ backgroundColor: '#FFFFFF' }}> */}
				<Hobbies />
				<Feature />
				<Contact />
			</div>
		</div>
	);
}

export default App;
