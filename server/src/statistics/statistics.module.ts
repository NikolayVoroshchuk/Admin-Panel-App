import { Module } from '@nestjs/common'
import { StatisticsService } from './statistics.service'
import { StatisticsController } from './statistics.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { ReviewModel } from 'src/review/review.model'
import { MovieModel } from 'src/movie/movie.model'
import { ViewsModel } from 'src/views/views.model'

@Module({
	imports: [SequelizeModule.forFeature([ReviewModel, MovieModel, ViewsModel])],
	controllers: [StatisticsController],
	providers: [StatisticsService],
})
export class StatisticsModule {}
