import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/interfaces/movie.interface'

import styles from './MovieItem.module.scss'

const MovieItem: FC<{ movie: IMovie; variant?: 'sm' | 'md' }> = ({
	movie,
	variant = 'md',
}) => {
	const { id, rating, poster, name } = movie

	return (
		<Link href={`/movie/${id}`}>
			<a
				className={cn(styles.item, {
					[styles.small]: variant === 'sm',
				})}
			>
				{rating && <div className={styles.rating}>{rating.toFixed(1)}</div>}
				<div className={styles.poster}>
					<Image
						src={poster}
						alt={name}
						width={220}
						height={330}
						layout="responsive"
						priority
					/>
				</div>
				<div className={styles.title}>{name}</div>
			</a>
		</Link>
	)
}

export default MovieItem
