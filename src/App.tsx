import React from 'react';
import Hobbies from './components/hobbies';
import Introduction from './components/Introduction';
import Contact from './components/contact';
import Feature from './components/feature';
import Waves from './components/waves';

function App() {
	return (
		<div id='body'>
			<Waves />
			<Introduction />
			<Hobbies />
			<Feature />
			<Contact />
		</div>
	);
}

export default App;
