import { IMovie } from './movie.interface'
import { IUser } from './user.interface'

export interface IReview {
	id: number
	user: IUser
	movie: IMovie
	description: string
}

export interface IReviewDto extends Pick<IReview, 'description'> {
	movieId: number
}
