import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Element from './element';


import close from '../../assets/svg/close.svg';
import check from '../../assets/svg/check.svg';



import styles from './scratch.module.scss';

export default function Scratch() {
	const { t } = useTranslation();

	const [taken, setTaken] = useState(false);

	const [projects, setProjects] = useState(false);
	const [github, setGithub] = useState(false);

	return (
		<div className={styles.board}>
			<Element
				isStartingPoint={true}
				alt="Starting svg"
				startingPosition={{ x: 50, y: 50 }}
				svg={close}
			/>
			
			<Element
				isStartingPoint={false}
				value="#projects"
				alt="Projects svg"
				startingPosition={{ x: 250, y: 250 }}
				svg={check}
				try={true}
				isActive={projects}
				setActive={setProjects}
				isTaken={taken}
				setTaken={setTaken}
			/>
			<Element
				isStartingPoint={false}
				value="#github"
				alt="Github svg"
				startingPosition={{ x: 150, y: 250 }}
				svg={check}
				isActive={github}
				setActive={setGithub}
				isTaken={taken}
				setTaken={setTaken}
			/>
		</div>
	);
}