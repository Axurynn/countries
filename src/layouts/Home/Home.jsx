import { useEffect, useState, useRef, useContext } from 'react';
import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';
import s from './Home.module.scss';
import { NavLink } from 'react-router-dom';

import { CountriesContext } from '../../context/CountriesContext';

const Home = () => {
	const countries = useContext(CountriesContext);
	const [search, setSearch] = useState('');
	const [searchCountries, setSearchCountries] = useState([]);
	const [countriesRegion, setCountriesRegion] = useState('');
	const detailsRef = useRef(null);

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
				<Search text={search} callback={setSearch} />
				<Filter callback={setCountriesRegion} detailsRef={detailsRef} />
			</section>
			<section className={s.cards}>
				{searchCountries.map((country, i) => (
					<div key={i}>
						<NavLink
							to={`/${country.alpha3Code.toLowerCase()}`}
							className={s.navlink}
						>
							<Card
								name={country.name}
								population={country.population}
								capital={country.capital}
								region={country.region}
								flag={country.flags.png}
							/>
						</NavLink>
					</div>
				))}
			</section>
		</div>
	);
};

export default Home;
