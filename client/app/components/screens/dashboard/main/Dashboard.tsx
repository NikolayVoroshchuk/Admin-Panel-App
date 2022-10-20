import MainStatistics from './MainStatistics'
import MiddleStatistics from './middle-statistics/MiddleStatistics'
import React, { FC } from 'react'

import Layout from '@/components/ui/layout/Layout'

const Dashboard: FC = () => {
	return (
		<Layout title="Dashboard">
			<MainStatistics />
			<MiddleStatistics />
		</Layout>
	)
}

export default Dashboard
