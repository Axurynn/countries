import s from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../layouts/Header/Header';
import Home from '../../layouts/Home/Home';
import CountryDetails from '../../layouts/CountryDetails/CountryDetails';
import { CountriesProvider } from '../../context/CountriesContext';

const App = () => {
	const [countries, setCountries] = useState([]);

	useEffect(async () => {
		try {
			const res = await fetch('https://restcountries.com/v2/all');
			const data = await res.json();
			setCountries(data);
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<div className={s.app}>
			<CountriesProvider value={countries}>
				<header className={s.appHeader}>
					<Header />
				</header>
				<main className={s.appMain}>
					<Routes>
						<Route path='/countries/' element={<Home />} />
						<Route path='/countries/:slug' element={<CountryDetails />} />
					</Routes>
				</main>
			</CountriesProvider>
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
};

export default App;
