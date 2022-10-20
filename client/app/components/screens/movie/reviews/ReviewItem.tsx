import Image from 'next/image'
import React, { FC } from 'react'

import { IReview } from '@/shared/interfaces/review.interface'

import styles from './Reviews.module.scss'

const ReviewItem: FC<{ review: IReview }> = ({ review }) => {
	const { id, user, movie, description } = review

	return (
		<div className={styles.reviewItem}>
			{user && (
				<div className={styles.author}>
					<Image src={user.avatarPath} alt={user.name} width={45} height={45} />
					<div>{user.name}</div>
				</div>
			)}
			<article>{description}</article>
		</div>
	)
}

export default ReviewItem
