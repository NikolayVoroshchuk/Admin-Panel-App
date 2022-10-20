import Link from 'next/link'
import React, { FC } from 'react'

import styles from './Header.module.scss'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className={styles.logo}>Cinema</a>
		</Link>
	)
}

export default Logo
