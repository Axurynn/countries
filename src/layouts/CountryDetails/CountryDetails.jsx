import s from './CountryDetails.module.scss';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { ReactComponent as ArrowBack } from '../../assets/svg/arrow-back-outline.svg';
import { CountriesContext } from '../../context/CountriesContext';

const CountryDetails = () => {
	const navigate = useNavigate();
	const countries = useContext(CountriesContext);
	const { slug } = useParams();
	const [country, setCountry] = useState([]);

	useEffect(() => {
		const country = countries.find(
			country => country.alpha3Code.toLowerCase() === slug
		);
		setCountry(country);
	}, [countries, slug]);

	return (
		<div className={s.countryDetails}>
			<div className={s.containerButton}>
				<button className={s.button} onClick={() => navigate(-1)}>
					<span className={s.buttonIcon}>
						<ArrowBack />
					</span>{' '}
					Back
				</button>
			</div>
			<div className={s.containerDetails}>
				<img
					src={country?.flag}
					alt={`${country?.name}'s flag`}
					className={s.flag}
				/>
				<div className={s.containerInfos}>
					<h2 className={s.countryName}>{country?.name}</h2>
					<div className={s.infosList}>
						<section className={s.infoList}>
							<p className={s.info}>
								Native name: <span>{country?.nativeName}</span>
							</p>
							<p className={s.info}>
								Population:{' '}
								<span>
									{new Intl.NumberFormat('en-EN').format(country?.population)}
								</span>
							</p>
							<p className={s.info}>
								Region: <span>{country?.region}</span>
							</p>
							<p className={s.info}>
								Sub Region: <span>{country?.subregion}</span>
							</p>
							<p className={s.info}>
								Capital: <span>{country?.capital}</span>
							</p>
						</section>
						<section className={s.infoList}>
							<p className={s.info}>
								Top Level Domain: <span>{country?.topLevelDomain}</span>
							</p>
							<p className={s.info}>
								Currencies:{' '}
								<span>
									{country?.currencies
										?.map(currency => currency.name)
										.join(', ')}
								</span>
							</p>
							<p className={s.info}>
								Languages:{' '}
								<span>
									{country?.languages
										?.map(language => language.name)
										.join(', ')}
								</span>
							</p>
						</section>
					</div>
					<div className={s.borderCountries}>
						<h3 className={s.title}>Border Countries:</h3>
						<div className={s.list}>
							{country?.borders?.map((border, i) => {
								let borderCountry = countries.find(
									country => country.alpha3Code === border
								);
								return (
									<NavLink
										to={`/${borderCountry?.alpha3Code.toLowerCase()}`}
										key={i}
										className={s.border}
									>
										{borderCountry?.name}
									</NavLink>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryDetails;
