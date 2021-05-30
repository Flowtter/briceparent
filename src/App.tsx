import React from 'react';
import { useTranslation } from 'react-i18next';
import Scratch from './components/scratch';

import './styles.css';

function App() {
	return (
		<div id='body' className='grid-container'>
			<Scratch />
		</div>
	);
}

export default App;
