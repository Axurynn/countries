import s from './App.module.scss';

import Header from '../../layouts/Header/Header';
import Home from '../../layouts/Home/Home';

function App() {
	return (
		<div className={s.app}>
			<header className={s.appHeader}>
				<Header />
			</header>
			<main className={s.appMain}>
				<Home />
			</main>
			<footer className={s.appFooter}>
				<div className={s.attribution}>
					Challenge by&nbsp;
					<a
						href='https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca'
						target='_blank'
					>
						Frontend Mentor
					</a>
					. Coded by <a href='https://github.com/Axurynn'>Axurynn</a>.
				</div>
			</footer>
		</div>
	);
}

export default App;
