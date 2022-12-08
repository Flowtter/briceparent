/* eslint-disable arrow-body-style */

import React, { Suspense } from 'react';
import Hobbies from './components/hobbies';
// import Introduction from './components/introduction';
import Contact from './components/contact';
import Feature from './components/feature';
import Loading from './components/loading';
// import Waves from './components/waves';

import './styles.css';

// const Waves = React.lazy(() => import('./components/waves'));

const Waves = React.lazy(() => {
	return new Promise((resolve) => setTimeout(resolve, 500)).then(
		() => import('./components/waves')
	);
});

const Introduction = React.lazy(() => {
	return new Promise((resolve) => setTimeout(resolve, 1000)).then(
		() => import('./components/introduction')
	);
});

function App() {
	return (
		<div id="body">
			<Suspense fallback={<Loading />}>
				<Waves />
				<Introduction />
				<div>
					{/* <div style={{ backgroundColor: '#FFFFFF' }}> */}
					<Hobbies />
					<Feature />
					<Contact />
				</div>
			</Suspense>
		</div>
	);
}

export default App;
