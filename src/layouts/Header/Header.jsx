import { useEffect, useState } from 'react';
import s from './Header.module.scss';

import { keepTheme } from '../../utils/theme';
import SwitchTheme from '../../components/SwitchTheme/SwitchTheme';

const Header = () => {
	const [changeTheme, setChangeTheme] = useState(false);

	useEffect(() => {
		keepTheme();
	}, []);
	return (
		<div className={s.header}>
			<h1 className={s.headerTitle}>Where in the world?</h1>
			<SwitchTheme changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
		</div>
	);
};

export default Header;
