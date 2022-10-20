import { useSearch } from './useSearch'
import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { FaSearch } from 'react-icons/fa'

import Field from '@/components/ui/field/Field'
import MovieItem from '@/components/ui/movie-item/MovieItem'

import { menuAnimation } from '@/utils/animation/fade'

import styles from './Search.module.scss'

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch()

	return (
		<div className={styles.search_top}>
			<label>
				<Field
					placeholder="Search movies..."
					value={searchTerm}
					onChange={handleSearch}
					Icon={FaSearch}
				/>
			</label>
			{isSuccess && (
				<motion.div
					initial={false}
					animate={isSuccess ? 'open' : closed}
					variants={menuAnimation}
					className={styles.result}
				>
					{data?.length ? (
						data.map((movie) => (
							<MovieItem movie={movie} key={movie.id} variant="sm" />
						))
					) : (
						<div>Movies not found</div>
					)}
				</motion.div>
			)}
		</div>
	)
}

export default Search
