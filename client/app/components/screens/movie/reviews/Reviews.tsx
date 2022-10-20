import ReviewItem from './ReviewItem'
import AddReviewForm from './add-review-form/AddReviewForm'
import { IReviews } from './rewiews.interface'
import { FC } from 'react'

import Loader from '@/components/ui/Loader'

import { useAuth } from '@/hooks/useAuth'

import styles from './Reviews.module.scss'

const Reviews: FC<IReviews> = ({ movieId, reviews, isLoading }) => {
	const { user } = useAuth()

	return (
		<div className="mt-10">
			<div>{user && <AddReviewForm movieId={movieId} />}</div>
			{isLoading ? (
				<Loader count={4} />
			) : reviews?.length ? (
				<>
					<div className={styles.grid}>
						{reviews.map((review) => (
							<ReviewItem review={review} key={review.id} />
						))}
					</div>
				</>
			) : (
				<p>Reviews not found</p>
			)}
		</div>
	)
}

export default Reviews
