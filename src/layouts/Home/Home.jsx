import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import s from './Home.module.scss';

const Home = () => {
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
		<>
			<section className={s.cards}>
				{countries.map((country, i) => (
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
		</>
	);
};

export default Home;
