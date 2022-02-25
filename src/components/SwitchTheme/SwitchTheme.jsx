import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import s from './SwitchTheme.module.scss';

import { setTheme } from '../../utils/theme';

import { ReactComponent as Sun } from '../../assets/svg/sunny-outline.svg';
import { ReactComponent as Moon } from '../../assets/svg/moon-outline.svg';

function SwitchTheme({ changeTheme = false, setChangeTheme = () => {} }) {
	const [_, setTogClass] = useState('dark');
	let theme = localStorage.getItem('countries-theme');

	const handleOnClick = () => {
		if (localStorage.getItem('countries-theme') === 'theme-dark') {
			setTheme('theme-light');
			setTogClass('light');
		} else {
			setTheme('theme-dark');
			setTogClass('dark');
		}
	};

	useEffect(() => {
		if (localStorage.getItem('countries-theme') === 'theme-dark') {
			setTogClass('dark');
			setChangeTheme(true);
		} else {
			setTogClass('light');
			setChangeTheme(false);
		}
	}, [theme]);

	return (
		<div className={s.container}>
			{localStorage.getItem('countries-theme') === 'theme-dark' ? (
				<Sun className={s.icon} onClick={handleOnClick} />
			) : (
				<Moon className={s.icon} onClick={handleOnClick} />
			)}
			<span onClick={handleOnClick} className={s.switchTheme}>
				{localStorage.getItem('countries-theme') === 'theme-dark'
					? 'Light Mode'
					: 'Dark Mode'}
			</span>
		</div>
	);
}

SwitchTheme.propTypes = {
	changeTheme: PropTypes.bool.isRequired,
	setChangeTheme: PropTypes.func.isRequired,
};

export default SwitchTheme;
