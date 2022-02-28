import s from './Search.module.scss';
import { ReactComponent as Magnifier } from '../../assets/svg/search-outline.svg';

const Search = ({ text = '', callback = () => {} }) => {
	return (
		<div className={s.searchBar}>
			<div className={s.logo}>
				<Magnifier />
			</div>
			<input
				className={s.input}
				type='text'
				placeholder='Search for a country...'
				value={text}
				onChange={e => callback(e.target.value)}
			/>
		</div>
	);
};

export default Search;
