import React from 'react';
import { useTranslation } from 'react-i18next';
import github from '../../assets/svg/github_footer.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import mail from '../../assets/svg/mail.svg';

import { ReactComponent as WavesSvg } from '../../assets/svg/wavesbot.svg';
import styles from './contact.module.scss';


export default function Contact() {
	const { t } = useTranslation();
	return (
		<div id="footer">
			<WavesSvg className={styles.waves} />
			<div className={styles.content}>
				<div className={styles.container}>
					<div className={styles.column}>
						<h2>{t('Let\'s start a project')}</h2>
					</div>
					<div className={styles.column}>
						<p>{t('Would you like to work together?')}<br />{t('We should get in touch then!')}</p>
					</div>
					<div className={styles.column}>
						<a href="mailto:briceparent.it@gmail.com">
							<button className={styles.button} type="button">{t('Contact me!')}</button>
						</a>
					</div>
				</div>
				<h1>{t('Contact me!')}</h1>
				<div className={styles.contact}>
					<a href="mailto:briceparent.it@gmail.com"><img src={mail} alt="mail" /></a>
					<a href="https://www.linkedin.com/in/TODO" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
					<a href="https://github.com/Flowtter/" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
				</div>
			</div>
		</div>
	);
}