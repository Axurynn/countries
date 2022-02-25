import s from './Card.module.scss';

const Card = ({
	name = '',
	population = '',
	region = '',
	capital = '',
	flag = '',
}) => {
	return (
		<article className={s.card}>
			<img src={flag} alt='country flag' className={s.flag} />
			<div className={s.description}>
				<h2 className={s.countryName}>{name}</h2>
				<div className={s.infos}>
					<p className={s.info}>
						Population : <span className={s.infoDetail}>{population}</span>
					</p>
					<p className={s.info}>
						Region : <span className={s.infoDetail}>{region}</span>
					</p>
					<p className={s.info}>
						Capital : <span className={s.infoDetail}>{capital}</span>
					</p>
				</div>
			</div>
		</article>
	);
};

export default Card;
