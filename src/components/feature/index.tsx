import React from 'react';
import { useTranslation } from 'react-i18next';

import prism from '../../assets/png/shape.png';
import underlook from '../../assets/png/underlook.png';
import unrailed from '../../assets/png/unrailed.png';

//
import c from '../../assets/svg/logos/c.svg';
import csharp from '../../assets/svg/logos/csharp.svg';
import unity from '../../assets/svg/logos/unity.svg';
import python from '../../assets/svg/logos/python.svg';
import latex from '../../assets/svg/logos/latex.svg';
//

import styles from './feature.module.scss';

type Props = {
	image: string;
	back: string;
	alt: string;
	url: string;
	title: string;
	description: string;
	technologies: Array<string>;
};

type Elt = {
	technologies: Array<string>;
};

function Elements(props: Elt) {
	function Element(tech: string, index: number) {
		const name = tech.split('/');
		const last = name[name.length - 1].split('.');
		return (
			<li key={index}>{last[0]} <img src={tech} alt={`${last[0]}'s logo`} /></li>
		);
	}
	return (
		<ul>{props.technologies.map((tech, index) => Element(tech, index))}</ul>
	);
}



function Project(props: Props) {
	return (
		<div className={styles.project}>
			<div className={styles.text}>
				<h1><a href={props.url} target="_blank" rel="noreferrer">{props.title}</a></h1>
				<h3 className={styles.description}>{props.description}</h3>
			</div>
			<a href={props.url} target="_blank" rel="noreferrer">
				<div className={styles.first}>
					<img src={props.image} alt={props.alt} />
					<div className={styles.shadow} />
					<div className={`${styles.back} ${styles[props.back]}`}>
						<div className={styles.softshadow} />
						<Elements technologies={props.technologies} />
					</div>
				</div>
			</a>
			<h3 className={styles.subdescription}>{props.description}</h3>
		</div>

	);
}


export default function Feature() {
	const { t } = useTranslation();
	return (
		<div>
			{/* icons by https://iconscout.com/ */}
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>{t('Highlighted projects')}</h1>
			</div>
			<div className={styles.container}>
				<Project
					image={prism}
					back='prism'
					alt={t('prism\'s logo')}
					url='https://github.com/prismocr/ocr'
					title={t('Prism OCR')}
					description='Prism is an efficient OCR written in C.'
					technologies={[python, c, latex]}
				/>
				<Project
					image={underlook}
					back='underlook'
					alt={t('underlook\'s logo')}
					url='https://github.com/The-Under-Project/UnderLook'
					title={t('Underlook')}
					description={t('UnderLook is a videogame based on Overwatch and Paladins in which I was project leader.')}
					technologies={[unity, csharp, latex]}
				/>
				<Project
					image={unrailed}
					back='unrailed'
					alt={t('unrailed\'s logo')}
					url='https://github.com/Flowtter/unrailed-ai'
					title={t('Unrailed AI')}
					description={t('Unrailed AI is an AI for playing the video game Unrailed. It uses computer vision and pathfinding algorithm.')}
					technologies={[python, unity]}
				/>
			</div>
		</div>
	);
}