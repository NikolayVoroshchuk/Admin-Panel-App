import { options } from './chart.options'
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	LinearScale,
	Tooltip,
} from 'chart.js'
import React, { FC } from 'react'
import { Bar } from 'react-chartjs-2'

import { useTheme } from '@/hooks/useTheme'

import { IViewsByMonth } from '@/services/statistics/statistics.interface'

import styles from './ViewsChart.module.scss'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const ViewsChart: FC<{ data: IViewsByMonth[] }> = ({ data }) => {
	const { isDarkTheme } = useTheme()

	return (
		<div className={styles.chart}>
			<Bar
				options={options(isDarkTheme)}
				data={{
					labels: data.map((item) => item.month),
					datasets: [
						{
							label: 'Dataset 1',
							data: data.map((item) => item.views),
							backgroundColor: isDarkTheme ? '#b9c4ff' : '#7a94fe',
						},
					],
				}}
			/>
		</div>
	)
}

export default ViewsChart
