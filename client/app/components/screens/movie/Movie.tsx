import Reviews from './reviews/Reviews'
import { useMutation, useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'

import Layout from '@/components/ui/layout/Layout'

import { MovieService } from '@/services/movie.service'
import { ViewsService } from '@/services/views.service'

import styles from './Movie.module.scss'

const Movie: FC = () => {
	const { query } = useRouter()
	const movieId = Number(query?.id)

	const { data: movie, isLoading } = useQuery(
		['get movie', query?.id],
		() => MovieService.getMovieById(movieId),
		{
			enabled: !!movieId,
			select: ({ data }) => data,
		}
	)

	const { mutate } = useMutation(['update count opened'], () =>
		ViewsService.updateViews(movieId.toString())
	)

	useEffect(() => {
		if (movieId) mutate()
		// eslint-disable-next-line
	}, [movieId])

	return (
		<Layout title={`${movie?.name}`}>
			<div className={styles.wrapper}>
				<div className={styles.poster}>
					{movie?.poster && (
						<Image
							src={movie?.poster}
							alt={movie?.name}
							width={220}
							height={330}
							layout="responsive"
							className={styles.image}
							priority
						/>
					)}
				</div>
				<div className={styles.detail}>
					<h1 className={styles.heading}>{movie?.name}</h1>
					<div className={styles.rating}>{movie?.rating?.toFixed(1)}</div>
					<div className={styles.title}>About Movie</div>
					<ul>
						<li>
							<span>Gross worldwide </span>
							<span>$ {movie?.fees.toLocaleString()}</span>
						</li>
					</ul>
					<Reviews
						movieId={movieId}
						reviews={movie?.reviews || []}
						isLoading={isLoading}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Movie
