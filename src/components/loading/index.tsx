import React from 'react';
import './styles.css';

export default function Loading() {
	return (
		<div className="lds-roller">
			<div /><div /><div /><div /><div /><div /><div /><div />
		</div>
	);
}