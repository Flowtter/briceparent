import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Element from './element';


import styles from './scratch.module.scss';

export default function Scratch() {
	const { t } = useTranslation();

	const [taken, setTaken] = useState(false);

	const [projects, setProjects] = useState(false);
	const [github, setGithub] = useState(false);

	return (
		<div className={styles.container}>
			<div className={styles.board}>
				<Element
					isStartingPoint={true}
					startingPosition={{ x: 50, y: 50 }}
					svg={start}
				/>

				<Element
					isStartingPoint={false}
					value="#projects"
					startingPosition={{ x: 250, y: 250 }}
					svg={connect}
					try={true}
					isActive={projects}
					setActive={setProjects}
					isTaken={taken}
					setTaken={setTaken}
				/>
				<Element
					isStartingPoint={false}
					value="#github"
					startingPosition={{ x: 150, y: 250 }}
					svg={connect}
					isActive={github}
					setActive={setGithub}
					isTaken={taken}
					setTaken={setTaken}
				/>
			</div>
		</div>
	);
}

const start = (
	<svg width="96" height="32" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.5238 7H1V1H13C21.381 1 23 5 23 7H19.8571L17.7619 5H14.619L12.5238 7Z" fill="white" stroke="white" />
	</svg>
);

const connect = (
	<svg width="96" height="36" viewBox="0 0 24 9" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M13 3H1V8H13C21.381 8 23 4.75 23 3H19.5L17.5 1H15L13 3Z" fill="red" stroke="red" />
	</svg>
);