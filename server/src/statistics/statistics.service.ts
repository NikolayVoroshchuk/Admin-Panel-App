import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { col, fn, literal } from 'sequelize'
import { MovieModel } from 'src/movie/movie.model'
import { ReviewModel } from 'src/review/review.model'
import { ViewsModel } from 'src/views/views.model'
import { IStatisticItem } from './statistics.interface'
import * as updateLocale from 'dayjs/plugin/updateLocale'
import * as dayjs from 'dayjs'

dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
	monthsShort: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	],
})

@Injectable()
export class StatisticsService {
	constructor(
		@InjectModel(MovieModel)
		private readonly movieModel: typeof MovieModel,
		@InjectModel(ReviewModel)
		private readonly reviewModel: typeof ReviewModel,
		@InjectModel(ViewsModel)
		private readonly viewsModel: typeof ViewsModel
	) {}

	async getMainStatistics(): Promise<IStatisticItem[]> {
		const countReviews = await this.reviewModel.count()
		const countMovies = await this.movieModel.count()

		const views = await this.viewsModel
			.findAll({
				attributes: [[fn('sum', col('views')), 'views']],
			})
			.then((data) => Number(data[0].views))

		const averageRating = await this.movieModel
			.findAll({
				attributes: [[fn('avg', col('rating')), 'rating']],
			})
			.then((data) => Number(data[0].rating.toFixed(1)))

		return [
			{
				id: 1,
				name: 'Views',
				value: views,
			},
			{
				id: 2,
				name: 'Average Rating',
				value: averageRating,
			},
			{
				id: 3,
				name: 'Movies',
				value: countMovies,
			},
			{
				id: 4,
				name: 'Reviews',
				value: countReviews,
			},
		]
	}
	async getMiddleStatistics() {
		const totalFees = await this.movieModel
			.findAll({
				attributes: [[fn('sum', col('fees')), 'fees']],
			})
			.then((data) => Number(data[0].fees))

		const viewsByMonth = await this.viewsModel
			.findAll({
				attributes: [
					[fn('sum', col('views')), 'views'],
					[fn('date_trunc', 'month', col('createdAt')), 'month'],
				],
				group: 'month',
				order: [['month', 'ASC']],
				raw: true,
			})
			.then((data) =>
				data.map((item) => ({
					...item,
					//@ts-ignore
					month: dayjs(item.month).format('MMM'),
				}))
			)

		return {
			totalFees,
			viewsByMonth,
		}
	}
}
