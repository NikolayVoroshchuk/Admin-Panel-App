import { MotionProps, Variants } from 'framer-motion'

export const FADE_IN: MotionProps = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1 },
	viewport: { once: true },
	transition: { duration: 1.4 },
}

export const menuAnimation: Variants = {
	open: {
		scaleZ: 1,
		scaleY: 1,
		scaleX: 1,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 230,
			damping: 15,
		},
	},
	closed: {
		scaleZ: 0,
		scaleY: 0,
		scaleX: 0,
	},
}
