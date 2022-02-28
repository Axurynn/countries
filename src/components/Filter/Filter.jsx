import { useState } from 'react';
import s from './Filter.module.scss';
import { ReactComponent as Chevron } from '../../assets/svg/chevron-down-outline.svg';

const Filter = ({ callback = () => {}, detailsRef = null }) => {
	const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

	return (
		<div
			className={s.filterContainer}
			onClick={() => detailsRef.current.removeAttribute('open')}
		>
			<details ref={detailsRef} className={s.details}>
				<summary className={s.summary}>
					Filter by Region
					<span className={s.chevron}>
						<Chevron />
					</span>
				</summary>
				<ul className={s.regionsList}>
					{regions.map((region, i) => {
						return (
							<li
								className={s.region}
								onClick={() => {
									callback(region);
									detailsRef.current.removeAttribute('open');
								}}
								key={i}
							>
								{region}
							</li>
						);
					})}
				</ul>
			</details>
		</div>
	);
};

export default Filter;
