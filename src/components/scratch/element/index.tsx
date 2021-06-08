/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Vector2 } from '../../../types/utils';

import styles from './element.module.scss';

type Props = {
	svg: any;
	startingPosition: Vector2;
	value?: string;

	isActive?: any;
	setActive?: any;

	try?: Boolean;

	isStartingPoint: boolean;
	isTaken?: any;
	setTaken?: any
};

export default function Element(props: Props) {
	function timeout(delay: number) {
		return new Promise(res => setTimeout(res, delay));
	}

	async function toggleClass() {
		if (props.isStartingPoint)
			return;
		if (props.isTaken) {
			if (props.isActive) {
				props.setActive(false);
				props.setTaken(false);
			}
			return;
		}
		props.setActive(true);
		props.setTaken(true);
	}

	return (
		<div
			id="scratch"
			className={!props.isStartingPoint && props.isActive ? `${styles.element} ${styles.animate}` : props.try ? `${styles.element} ${styles.try}` : `${styles.element}`}
			style={{ left: props.startingPosition.x, top: props.startingPosition.y }}
			onClick={toggleClass}
		>
			{props.svg}
		</div>
	);
}

Element.defaultProps = {
	value: undefined,
	isActive: undefined,
	setActive: undefined,
	isTaken: undefined,
	setTaken: undefined,
	try: undefined
};