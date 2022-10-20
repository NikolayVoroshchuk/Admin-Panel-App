import { useReviews } from './useReviews'
import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'
import Layout from '@/components/ui/layout/Layout'
import Table from '@/components/ui/table/Table'

const ReviewsList: FC = () => {
	const { response, isLoading, mutate } = useReviews()

	return (
		<Layout title="Review List">
			<div className="flex justify-between">
				<Heading isMargin={false}>Review List</Heading>
			</div>
			<Table
				items={
					response?.data.length
						? response.data.map((review) => ({
								id: review.id,
								name: review.user.name,
								description: review.description,
								image: review.movie.poster,
								viewLink: `/movie/${review.movie.id}`,
								removeHandler: () => mutate(review.id),
						  }))
						: []
				}
				isLoading={isLoading}
			/>
		</Layout>
	)
}

export default ReviewsList
