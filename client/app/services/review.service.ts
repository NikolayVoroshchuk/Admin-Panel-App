import interceptor from '../api/interceptor'

import { IReview, IReviewDto } from '@/shared/interfaces/review.interface'

export const ReviewService = {
	async createReview(body: IReviewDto) {
		return interceptor.post<IReview>('/review', body)
	},

	async getReviewsById(id: number) {
		return interceptor.get<IReview>(`/review/${id}`)
	},

	async getAll() {
		return interceptor.get<IReview[]>('/review')
	},

	async deleteReviews(id: number) {
		return interceptor.delete(`/review/${id}`)
	},
}
