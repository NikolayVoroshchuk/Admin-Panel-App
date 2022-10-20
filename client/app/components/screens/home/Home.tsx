import { IHome } from './home.interface'
import React, { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'
import Layout from '@/components/ui/layout/Layout'
import MovieItem from '@/components/ui/movie-item/MovieItem'

import styles from './Home.module.scss'

const Home: FC<IHome> = ({ newMovies }) => {
	return (
		<Layout title="Cinema">
			<Heading>
				<h1 className={styles.heading}>Newest movies</h1>
			</Heading>
			<div className={styles.catalog}>
				{newMovies.length ? (
					newMovies.map((movie) => <MovieItem movie={movie} key={movie.id} />)
				) : (
					<div>Movies not found</div>
				)}
			</div>
		</Layout>
	)
}

export default Home
