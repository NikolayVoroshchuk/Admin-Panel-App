import { MotionProps } from 'framer-motion'

export const useProgressAnimate = (percent: number) => {
	const variants: MotionProps = {
		initial: {
			rotate: '50deg',
		},
		whileInView: {
			rotate: `${45 + percent * 1.8}deg`,
			transition: { type: 'easeInOut', duration: 2 },
		},
	}
	return { variants }
}
