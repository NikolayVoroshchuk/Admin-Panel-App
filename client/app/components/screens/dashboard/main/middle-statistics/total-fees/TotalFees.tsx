import React, { FC } from 'react'
import { ImStatsDots } from 'react-icons/im'

import AnimatedCounter from '@/components/ui/AnimatedCounter'
import ProgressBar from '@/components/ui/progress-bar/ProgressBar'

import styles from './TotalFees.module.scss'

const TotalFees: FC<{ total: number }> = ({ total }) => {
	const calcPercent = Math.round((total * 100) / 10000000000)
	return (
		<div className={styles.fees}>
			<ProgressBar percent={calcPercent} />
			<div className={styles.icon}>
				<ImStatsDots />
			</div>
			<div className={styles.name}>Total Fees</div>
			<div className={styles.total}>
				$<AnimatedCounter to={total} />
			</div>
		</div>
	)
}

export default TotalFees
