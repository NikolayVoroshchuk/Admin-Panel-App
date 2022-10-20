import { IMiddleStatisticsResponse } from './statistics.interface'
import instance from 'api/interceptor'

import { IStatisticItem } from '@/components/ui/statistic-item/statistic-item.interface'

export const StatisticsService = {
	async getMainStat() {
		return instance
			.get<IStatisticItem[]>('/statistics/main')
			.then(({ data }) => data)
	},
	async getMiddleStat() {
		return instance
			.get<IMiddleStatisticsResponse>('/statistics/middle')
			.then(({ data }) => data)
	},
}
