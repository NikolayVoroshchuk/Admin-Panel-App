import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { FiLogOut } from 'react-icons/fi'

import styles from './UserAvatar.module.scss'

const UserAvatar: FC<{
	avatarPath: string
	logout: () => void
}> = ({ avatarPath, logout }) => {
	return (
		<div className={styles.userWrapper}>
			<div className={styles.userAvatar}>
				<Image
					className={styles.avatar}
					src={avatarPath}
					width={40}
					height={40}
					alt="Avatar"
				/>
			</div>
			<div className={styles.logoutLink}>
				<Link href={'/'}>
					<button onClick={() => logout()} className={styles.logoutBtn}>
						Logout
						<FiLogOut />
					</button>
				</Link>
			</div>
		</div>
	)
}

export default UserAvatar
