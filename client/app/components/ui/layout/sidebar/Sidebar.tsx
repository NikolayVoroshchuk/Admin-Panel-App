import Switcher from '../../switcher/Switcher'
import { menu } from './menu.data'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { useTheme } from '@/hooks/useTheme'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	const { asPath } = useRouter()
	const { isDarkTheme } = useTheme()

	return (
		<aside className={styles.sidebar}>
			<div>
				<Link href="/">
					<a className={styles.logo}>
						<Image
							src={isDarkTheme ? '/logo-sidebarDT.png' : '/logo-sidebar.png'}
							alt="logo-sidebar"
							width={50}
							height={50}
						/>
					</a>
				</Link>
				<nav className={styles.menu}>
					<ul>
						{menu.map((item) => (
							<li
								key={item.link}
								className={cn(styles.item, {
									[styles.active]: item.link === asPath,
								})}
							>
								<Link href={item.link}>
									<a>
										<item.Icon />
									</a>
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<Switcher />
			</div>
		</aside>
	)
}

export default Sidebar
