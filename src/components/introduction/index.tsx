/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { AttentionSeeker, JackInTheBox, Hinge, Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next/';
import styles from './introduction.module.scss';

export default function Introduction() {
	const { t } = useTranslation();
	const [show, setShow] = useState(true);

	// eslint-disable-next-line
	setTimeout(function () {
		setShow(false);
	}, 4350);

	return (
		<div id='introduction' className={styles.container}>
			<div className={styles.introduction}>
				<div className={styles.content}>
					<div className={styles.text}>
						<div className={styles.line}>
							<div className={styles.word}>
								<JackInTheBox triggerOnce>
									<h1>{t('Hello,')}</h1>
								</JackInTheBox>
							</div>
							{/* </div> */}
							{/* <div className={styles.line} id='second'> */}
							<div className={styles.word}>
								<AttentionSeeker effect='rubberBand' triggerOnce delay={600}>
									<JackInTheBox triggerOnce delay={400}>
										<h1>{t('I\'m')}</h1>
									</JackInTheBox>
								</AttentionSeeker>
							</div>
							<div className={styles.word}>
								<AttentionSeeker effect='bounce' triggerOnce delay={800}>
									<JackInTheBox triggerOnce delay={800}>
										<h1 style={{ color: '#ecf0bf' }}>Brice</h1>
									</JackInTheBox>
								</AttentionSeeker>
							</div>
						</div>
						<div className={styles.line}>
							<div className={styles.word}>
								<AttentionSeeker effect='rubberBand' triggerOnce delay={1500}>
									<JackInTheBox triggerOnce delay={1500}>
										<h1>Fullstack</h1>
									</JackInTheBox>
								</AttentionSeeker>
							</div>
							<div className={styles.job}>
								<div className={styles.word} style={show ? {} : { display: 'none' }}>
									<JackInTheBox triggerOnce delay={1800}>
										<Hinge cascade triggerOnce delay={3200}>
											<div>
												<h1>{t('Developer')}</h1>
												<Fade cascade triggerOnce delay={2500} className={styles.cross}>
													{cross}
												</Fade>
											</div>
										</Hinge>
									</JackInTheBox>
								</div>
								<div className={`${styles.word} ${styles.pc}`}>
									<AttentionSeeker effect='bounce' triggerOnce delay={4250}>
										<Fade cascade triggerOnce delay={4200}>
											<h1>{t('student!')}</h1>
										</Fade>
									</AttentionSeeker>
								</div>
							</div>
						</div>
						<div className={styles.line}>
							<div className={`${styles.word} ${styles.phone}`}>
								<AttentionSeeker effect='bounce' triggerOnce delay={4250}>
									<Fade cascade triggerOnce delay={4200}>
										<h1>{t('student!')}</h1>
									</Fade>
								</AttentionSeeker>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const cross = (
	<svg viewBox="0 0 83 92" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M75.5 2C64.7 5.2 29 58.6667 13 84.5C13 84.5 8 94 15 90L43.5 52L50.5 43L77.5 9.5C81.3334 5.66667 86.3 -1.2 75.5 2Z" fill="#ecf0bf" stroke="#ecf0bf" />
		<path d="M73.3004 81.9319C63.0752 70.6719 24.3063 41.2214 2.8004 21.9319C0.685859 18.7112 0.129917 18.0525 2.8004 18C60.9678 43.4209 29.6089 36.4691 74.3004 75.9319C86.8004 87.9319 73.3004 81.9319 73.3004 81.9319Z" fill="#ecf0bf" stroke="#ecf0bf" />
	</svg>
);