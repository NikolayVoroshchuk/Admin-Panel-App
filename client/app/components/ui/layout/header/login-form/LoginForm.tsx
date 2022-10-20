import { validEmail } from './login-auth.constants'
import { IAuthFields } from './loginForm.interface'
import { useMutation } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaRegUserCircle } from 'react-icons/fa'

import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import UserAvatar from '@/components/ui/user-avatar/UserAvatar'

import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import { AuthService } from '@/services/auth/auth.service'

import { menuAnimation } from '@/utils/animation/fade'

import styles from './LoginForm.module.scss'

const LoginForm: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	const [type, setType] = useState<'login' | 'register' | 'logout'>('login')

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<IAuthFields>({
		mode: 'onChange',
	})

	const { user, setUser } = useAuth()

	const { mutate: loginSync } = useMutation(
		['login'],
		(data: IAuthFields) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				if (setUser) setUser(data.user)
				reset()
				setIsShow(false)
			},
		}
	)

	const { mutate: registerSync } = useMutation(
		['register'],
		(data: IAuthFields) => AuthService.register(data.email, data.password),
		{
			onSuccess(data) {
				if (setUser) setUser(data.user)
				reset()
				setIsShow(false)
			},
		}
	)

	const { mutate: logoutSync } = useMutation(
		['logout'],
		() => AuthService.logout(),
		{
			onSuccess() {
				if (user) setUser(null)
			},
		}
	)

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login') loginSync(data)
		else if (type === 'register') registerSync(data)
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			{user ? (
				<UserAvatar avatarPath={user.avatarPath} logout={logoutSync} />
			) : (
				<button onClick={() => setIsShow(!isShow)} className={styles.button}>
					<FaRegUserCircle />
				</button>
			)}
			<motion.nav
				initial={false}
				animate={isShow ? 'open' : 'closed'}
				variants={menuAnimation}
				className={'z-10'}
			>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address',
							},
						})}
						placeholder="Email"
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length should more 6 symbols',
							},
						})}
						placeholder="Password"
						error={errors.password}
						type={'password'}
					/>
					<div className="mt-5 mb-2 text-center">
						<Button onClick={() => setType('login')}>Login</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
					>
						Register
					</button>
				</form>
			</motion.nav>
		</div>
	)
}

export default LoginForm
