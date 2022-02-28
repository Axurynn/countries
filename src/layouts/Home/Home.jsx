import { useEffect, useState, useRef } from 'react';
import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';
import s from './Home.module.scss';

const Home = () => {
	const [countries, setCountries] = useState([]);
	const [search, setSearch] = useState('');
	const [searchCountries, setSearchCountries] = useState([]);
	const [countriesRegion, setCountriesRegion] = useState('');
	const detailsRef = useRef(null);

	useEffect(async () => {
		try {
			const res = await fetch('https://restcountries.com/v2/all');
			const data = await res.json();
			setCountries(data);
		} catch (err) {
			console.log(err);
		}
	}, []);

	useEffect(() => {
		const countriesFilter = countries.filter(country => {
			if (countriesRegion === '') {
				return country.name.toLowerCase().includes(search.toLowerCase());
			} else {
				return (
					country.name.toLowerCase().includes(search.toLowerCase()) &&
					country.region.toLowerCase() === countriesRegion.toLowerCase()
				);
			}
		});

		setSearchCountries(countriesFilter);
	}, [search, countries, countriesRegion]);

	return (
		<div onClick={() => detailsRef.current.removeAttribute('open')}>
			<section className={s.containerSearchFilter}>
				<div className={s.search}>
					<Search text={search} callback={setSearch} />
				</div>
				<div className={s.filter}>
					<Filter callback={setCountriesRegion} detailsRef={detailsRef} />
				</div>
			</section>
			<section className={s.cards}>
				{searchCountries.map((country, i) => (
					<Card
						key={i}
						name={country.name}
						population={country.population}
						capital={country.capital}
						region={country.region}
						flag={country.flags.png}
					/>
				))}
			</section>
		</div>
	);
};

export default Home;
