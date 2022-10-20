import { useQuery } from '@tanstack/react-query'
import React, { FC } from 'react'

import Loader from '@/components/ui/Loader'
import Heading from '@/components/ui/heading/Heading'
import StatisticItem from '@/components/ui/statistic-item/StatisticItem'

import { StatisticsService } from '@/services/statistics/statistics.service'

const MainStatistics: FC = () => {
	const { data, isLoading } = useQuery(['get main statistics'], () =>
		StatisticsService.getMainStat()
	)

	return (
		<div>
			<Heading>Main statistcs</Heading>
			{isLoading ? (
				<Loader />
			) : data?.length ? (
				<div className="grid grid-cols-4 gap-8">
					{data.map((item) => (
						<StatisticItem item={item} key={item.id} />
					))}
				</div>
			) : (
				<div>Statistics not found</div>
			)}
		</div>
	)
}

export default MainStatistics
