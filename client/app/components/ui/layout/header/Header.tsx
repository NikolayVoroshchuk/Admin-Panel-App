import Logo from './Logo'
import LoginForm from './login-form/LoginForm'
import Search from './search/Search'
import { FC } from 'react'

import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Search />
			<LoginForm />
		</header>
	)
}

export default Header
