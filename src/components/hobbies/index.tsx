/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-var */
import React from 'react';

import { useTranslation } from 'react-i18next';

import styles from './hobbies.module.scss';
import './styles.css';


function Gaming() {
	const { t } = useTranslation();
	const title = t('Gaming');
	const description = t('I\'ve been playing Overwatch for over four years, I reached the highest rank there, the "Top 500 Europeans". I had the opportunity to play for a year on a team with regular training.');
	return (
		<div className={styles.hobby}>
			<h1 className={styles.subtitle}>{title}</h1>
			{piggy}
			<div id='overwatch-piggy'>{overwatch}</div>
			<div id='overwatch-blinker'>{overwatch}</div>
			{mac}
			<div className={styles.text}>
				<h1 className={styles.title}>{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	);
}

function Coding() {
	const { t } = useTranslation();
	const title = t('Programing');
	const description = t('I discovered programming in early 2018 with python. Then I continued with Unity and after 2 years, I moved to Golang and react.');
	return (
		<div className={`${styles.hobby} mac`}>
			<h1 className={styles.subtitle}>{title}</h1>
			<div id='mac'>{mac}</div>
			<div className={styles.textContainer}>
				<div className={styles.scanlines} />
				<p className={styles.line1}>{t('$ cat hello.txt')}<span className={styles.cursor1}>_</span></p>
				<p className={styles.line2}>{t('Hello friend!')}<span className={styles.cursor2}>_</span></p>
				<p className={styles.line3}>{t('I\'m Brice!')}<span className={styles.cursor3}>_</span></p>
			</div>
			<div className={styles.text}>
				<h1 className={styles.title}>{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	);
}

function Printing() {
	const { t } = useTranslation();
	const title = t('3D Printing');
	const description = t('3D printing is a hobby that I have enjoyed doing for a few years now. I have bought one in 2018, since then I print mechanical parts from time to time.');
	return (
		<div className={styles.hobby}>
			<h1 className={styles.subtitle}>{title}</h1>
			<div id='overwatch'>{overwatch}</div>
			<div id='nape' />
			{printer}
			<div className={styles.text}>
				<h1 className={styles.title}>{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	);
}



export default function Hobbies() {
	const { t } = useTranslation();
	return (
		<div className={styles.bigContainer}>
			<h1 className={styles.introTitle}>{t('Favorites activities')}</h1>
			<div className={styles.container} id='hobbies'>
				<Printing />
				<Coding />
				<Gaming />
			</div>
		</div>
	);
}


const mac = (
	<svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 58 58" enableBackground="new 0 0 58 58" height="512" width="512">
		<path id="support" fill="#EFE5CA" d="M50.857,48H7.143C5.407,48,4,46.593,4,44.857V3.143C4,1.407,5.407,0,7.143,0h43.715
		C52.593,0,54,1.407,54,3.143v41.715C54,46.593,52.593,48,50.857,48z" />

		<path id="screen" fill="#141b23" d="M46.128,34H11.872C9.734,34,8,32.266,8,30.128V8.872C8,6.734,9.734,5,11.872,5h34.255
		C48.266,5,50,6.734,50,8.872v21.255C50,32.266,48.266,34,46.128,34z" />

		<g id="pc">
			<rect x="8" y="48" fill="#CDBB8B" width="42" height="10" />
			<rect x="36" y="51" fill="#9D8F60" width="11" height="4" />
			<rect x="43" y="51" fill="#E9E2C8" width="4" height="4" />
		</g>
		<g id="light">
			<path fill="#FFFFFF" d="M13,15c0.256,0,0.512-0.098,0.707-0.293l4-4c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0
			l-4,4c-0.391,0.391-0.391,1.023,0,1.414C12.488,14.902,12.744,15,13,15z" />
			<path fill="#FFFFFF" d="M13,20c0.256,0,0.512-0.098,0.707-0.293l2-2c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0
			l-2,2c-0.391,0.391-0.391,1.023,0,1.414C12.488,19.902,12.744,20,13,20z" />
			<path fill="#FFFFFF" d="M16.29,14.29C16.11,14.48,16,14.74,16,15c0,0.26,0.11,0.52,0.29,0.71C16.48,15.89,16.74,16,17,16
			c0.26,0,0.52-0.11,0.71-0.29C17.89,15.52,18,15.27,18,15s-0.11-0.52-0.29-0.71C17.34,13.92,16.66,13.92,16.29,14.29z" />
			<path fill="#FFFFFF" d="M18.293,13.707C18.488,13.902,18.744,14,19,14s0.512-0.098,0.707-0.293l3-3
			c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-3,3C17.902,12.684,17.902,13.316,18.293,13.707z" />
		</g>
		<g id="brand">
			<line fill="#38454F" x1="30" y1="41" x2="41" y2="41" />
			<line fill="#38454F" x1="47" y1="41" x2="50" y2="41" />
			<rect x="40" y="39" fill="#546A79" width="7" height="4" />
			<rect x="9" y="43.987" fill="#1081E0" width="7" height="2.013" />
			<rect x="9" y="41.987" fill="#D75A4A" width="7" height="2.013" />
			<rect x="9" y="40" fill="#ED8A19" width="7" height="2.013" />
			<rect x="9" y="38" fill="#A4E869" width="7" height="2.013" />
		</g>
	</svg>
);


const printer = (
	<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g id="printer 1" clipPath="url(#clip0)">
			<g id="screw">
				<path id="Vector" d="M123 407H78V452H123V407Z" fill="#8D8E8C" />
				<path id="Vector_2" d="M115 404H85V407H115V404Z" fill="#999999" />
				<path id="test" d="M105 42H96V404H105V42Z" fill="#8D8E8C" />
			</g>
			<g id="body">
				<path id="Vector_3" d="M479 452H69V512H479V452Z" fill="#282828" />
				<path id="Vector_4" d="M84 57H69V437H84V57Z" fill="#CDCCCC" />
				<path id="Vector_5" d="M464 437H84V452H464V437Z" fill="#CDCCCC" />
				<path id="Vector_6" d="M84 437H69V452H84V437Z" fill="#323232" />
				<path id="Vector_7" d="M479 437H464V452H479V437Z" fill="#323232" />
				<path id="Vector_8" d="M479 57H464V437H479V57Z" fill="#CDCCCC" />
				<path id="Vector_9" d="M464 42H84V57H464V42Z" fill="#CDCCCC" />
				<path id="Vector_10" d="M84 42H69V57H84V42Z" fill="#323232" />
				<path id="Vector_11" d="M479 42H464V57H479V42Z" fill="#323232" />
			</g>
			<g id="corner">
				<g id="Group">
					<path id="Vector_12" d="M89 387H84V437H89V387Z" fill="#5C5C5C" />
					<path id="Vector_13" d="M134 432H84V437H134V432Z" fill="#5C5C5C" />
					<path id="Vector_14" d="M89.2083 390.924L84.4347 395.697L125.612 436.875L130.386 432.101L89.2083 390.924Z" fill="#5C5C5C" />
				</g>
				<g id="Group_2">
					<path id="Vector_15" d="M464 432H414V437H464V432Z" fill="#5C5C5C" />
					<path id="Vector_16" d="M464 387H459V437H464V387Z" fill="#5C5C5C" />
					<path id="Vector_17" d="M417.966 431.801L422.739 436.576L463.922 395.404L459.149 390.63L417.966 431.801Z" fill="#5C5C5C" />
				</g>
				<g id="Group_3">
					<path id="Vector_18" d="M134 57H84V62H134V57Z" fill="#5C5C5C" />
					<path id="Vector_19" d="M89 57H84V107H89V57Z" fill="#5C5C5C" />
					<path id="Vector_20" d="M130.052 62.2035L125.279 57.4292L84.0962 98.6006L88.8691 103.375L130.052 62.2035Z" fill="#5C5C5C" />
				</g>
				<g id="Group_4">
					<path id="Vector_21" d="M464 57H459V107H464V57Z" fill="#5C5C5C" />
					<path id="Vector_22" d="M464 57H414V62H464V57Z" fill="#5C5C5C" />
					<path id="Vector_23" d="M458.79 103.041L463.564 98.2678L422.393 57.0847L417.618 61.8577L458.79 103.041Z" fill="#5C5C5C" />
				</g>
			</g>
			<g id="bed">
				<path id="Vector_24" d="M394 393H155V401H394V393Z" fill="#1081B0" />
				<path id="Vector_25" d="M211 401H196V407H211V401Z" fill="#8D8E8C" />
				<path id="Vector_26" d="M352 401H337V407H352V401Z" fill="#8D8E8C" />
				<path id="Vector_27" d="M372 407H175V460H372V407Z" fill="#5C5C5C" />
			</g>
			<g id="z-axis">
				<path id="Vector_28" d="M464.213 328H88.213V339H464.213V328Z" fill="#CDCCCC" />
				<path id="Vector_29" d="M454.213 350H119.213V359H454.213V350Z" fill="#8D8E8C" />
				<path id="Vector_30" d="M454.213 376H119.213V385H454.213V376Z" fill="#8D8E8C" />
				<path id="Vector_31" d="M477.213 340H454.213V395H477.213V340Z" fill="#323232" />
				<path id="Vector_32" d="M119.213 340H75.213V395H119.213V340Z" fill="#323232" />
				<path id="Vector_33" d="M88.213 406C88.213 408.762 86.791 411 84.486 411H73.636C71.332 411 69.213 408.762 69.213 406V396C69.213 393.239 71.332 391 73.636 391H84.487C86.792 391 88.214 393.239 88.214 396V406H88.213Z" fill="#323232" />
				<path id="Vector_34" d="M88.213 340C88.213 342.761 86.791 345 84.486 345H73.636C71.332 345 69.213 342.761 69.213 340V330C69.213 327.239 71.332 325 73.636 325H84.487C86.792 325 88.214 327.239 88.214 330V340H88.213Z" fill="#323232" />
				<path id="Vector_35" d="M464.213 406C464.213 408.762 465.635 411 467.94 411H478.791C481.095 411 483.214 408.762 483.214 406V396C483.214 393.239 481.095 391 478.791 391H467.94C465.635 391 464.213 393.239 464.213 396V406Z" fill="#323232" />
				<path id="Vector_36" d="M464.213 340C464.213 342.761 465.635 345 467.94 345H478.791C481.095 345 483.214 342.761 483.214 340V330C483.214 327.239 481.095 325 478.791 325H467.94C465.635 325 464.213 327.239 464.213 330V340Z" fill="#323232" />
				<path id="Vector_37" d="M71.213 345H26.213V390H71.213V345Z" fill="#5C5C5C" />
				<path id="Vector_38" d="M71.213 345H26L71.213 334.5V345Z" fill="#323232" />
				<path id="Vector_39" d="M71.213 390H26L71.213 400.5V390Z" fill="#323232" />
				<g xmlns="http://www.w3.org/2000/svg" id="y-axis">
					<path id="Vector_40" d="M285.046 300H273.213L275.413 296H282.998L285.046 300Z" fill="#8D8E8C" />
					<path id="Vector_41" d="M271.046 300H259.213L261.413 296H268.998L271.046 300Z" fill="#8D8E8C" />
					<path id="Vector_42" d="M294 300C294 212.668 555.175 142 875 142" stroke="#1E1E1E" strokeWidth="4" />
					<path id="Vector_43" d="M265 300C265 190.559 550.802 102 904 102" stroke="#4A4C4E" strokeWidth="3" />
					<path id="Vector_44" d="M279 300C279 182.268 548.253 87 881 87" stroke="#FA9C1D" strokeWidth="3" />
					<path id="Vector_45" d="M308.213 345H249.213V391H308.213V345Z" fill="#CDCCCC" />
					<path id="Vector_46" d="M308.213 345H249.213V348H308.213V345Z" fill="#B3B3B3" />
					<path id="Vector_47" d="M301.213 300H256.213V345H301.213V300Z" fill="#5C5C5C" />
					<path id="Vector_48" d="M287.213 348H271.213V380H287.213V348Z" fill="#323232" />
					<path id="Vector_49" d="M285.901 382H272.776L271.213 380H287.213L285.901 382Z" fill="#323232" />
					<path id="Vector_50" d="M287.213 382H271.213V390H287.213V382Z" fill="#1081B0" />
					<path id="Vector_51" d="M274.205 390L279.119 392.938L284.033 390H274.205Z" fill="#1081B0" />
					<path id="Vector_52" d="M272.213 354H270.213V355H272.213V354Z" fill="#CDCCCC" />
					<path id="Vector_53" d="M272.213 357H270.213V358H272.213V357Z" fill="#CDCCCC" />
					<path id="Vector_54" d="M272.213 360H270.213V361H272.213V360Z" fill="#CDCCCC" />
					<path id="Vector_55" d="M272.213 363H270.213V364H272.213V363Z" fill="#CDCCCC" />
					<path id="Vector_56" d="M272.213 366H270.213V367H272.213V366Z" fill="#CDCCCC" />
					<path id="Vector_57" d="M288.213 354H286.213V355H288.213V354Z" fill="#CDCCCC" />
					<path id="Vector_58" d="M288.213 357H286.213V358H288.213V357Z" fill="#CDCCCC" />
					<path id="Vector_59" d="M288.213 360H286.213V361H288.213V360Z" fill="#CDCCCC" />
					<path id="Vector_60" d="M288.213 363H286.213V364H288.213V363Z" fill="#CDCCCC" />
					<path id="Vector_61" d="M288.213 366H286.213V367H288.213V366Z" fill="#CDCCCC" />
				</g>
			</g>
		</g>
	</svg>
);


const overwatch = (
	<svg version="1.1" id="overwatch" viewBox="0 0 600 600">
		<path
			d="M 296.70405,0.00424149 C 229.93779,0.43221149 163.9322,24.232681 112.07437,66.087451 l 56.66164,65.785689 C 216.5573,94.134131 280.99173,78.755181 340.75427,90.636091 c 32.84344,6.31836 64.09548,20.739679 90.46333,41.237049 L 487.87924,66.087451 C 434.24075,22.804341 365.76667,-1.0306785 296.70405,0.00424149 z"
			id="path3961"
			fill="#FA9C1D" />
		<path
			d="M 93.627932,82.252881 C 33.924062,138.34244 -1.0821983,219.87731 0.02552166,302.12246 0.06092166,387.49363 39.004212,471.35277 103.6776,526.81868 c 59.78108,52.2845 141.08577,78.91882 220.46136,72.18109 86.01035,-6.40518 167.64782,-52.34458 218.11716,-122.14284 49.12454,-66.32853 68.37083,-153.7971 52.06401,-234.90882 C 582.33252,179.85678 549.77957,122.31301 503.48268,79.542111 L 446.82104,145.3278 c 45.65578,43.03442 70.58508,106.55713 65.88486,169.22459 -2.05604,31.04856 -11.0736,61.69033 -26.31427,88.95944 l -115.47207,-111.53814 -58.26,-125.58266 -0.0876,190.17825 116.69522,112.92659 c -52.0019,40.40208 -123.35295,53.80249 -186.57773,35.89403 -25.74389,-7.18124 -50.12185,-19.23034 -71.30879,-35.39816 L 288.86927,356.56928 c -0.20481,-61.83078 0.7175,-128.57681 -6.9e-4,-190.3826 L 230.52166,291.97369 114.05785,404.43746 c -35.530468,-62.02488 -36.380378,-142.2105 -2.18183,-204.92738 10.69103,-20.0919 24.84106,-38.42801 41.25655,-54.18228 L 96.470932,79.542111 c -0.94767,0.90359 -1.89534,1.80717 -2.843,2.71077 z"
			id="path4052"
			fill="#4A4C4E" />
		{/* <rect x="0" y="0" width="600" height="600" fill="00FF0F" mask="url(#slice)" /> */}
	</svg>
);

const piggy = (
	<svg version="1.1" id="piggy" x="0px" y="0px" viewBox="0 0 297 297" enableBackground="new 0 0 297 297">
		<g>
			<g>
				<path fill="#DA768E" d="M252.583,132.75h-9.619c-7.484-19.855-23.73-36.474-44.965-46.71V58.5
			c0,0-18.369-2.101-28.345,18.394C162.838,75.658,155.762,75,148.5,75c-38.118,0-71.199,17.956-87.743,44.268
			c-1.281-0.463-2.38-1.137-3.296-2.043c-3.438-3.396-3.462-9.019-3.461-9.161c0.035-2.474-1.935-4.515-4.411-4.563
			c-2.508-0.068-4.538,1.925-4.588,4.41c-0.02,0.962-0.012,9.572,6.057,15.641c1.55,1.551,3.341,2.752,5.336,3.644
			C51.945,136.577,49.5,146.8,49.5,157.5c0,24.432,12.749,46.38,33,61.486v27.847c0,5.339,4.328,9.667,9.667,9.667h13.667
			c5.339,0,9.667-4.328,9.667-9.667v-11.534c10.323,3.041,21.428,4.701,33,4.701s22.677-1.66,33-4.701v11.534
			c0,5.339,4.328,9.667,9.667,9.667h13.667c5.339,0,9.667-4.328,9.667-9.667v-27.847c13.104-9.775,23.066-22.412,28.465-36.736
			h9.619c6.305,0,11.417-5.111,11.417-11.417v-26.667C264,137.861,258.889,132.75,252.583,132.75z" />
			</g>
			<g>
				<circle fill="#595155" cx="206.25" cy="132.75" r="8.25" />
			</g>
			{/* <g>
				<path fill="#5E345E" d="M159.5,99h-28c-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5h28c2.485,0,4.5,2.015,4.5,4.5
			S161.985,99,159.5,99z" />
			</g> */}
		</g>
	</svg>

);