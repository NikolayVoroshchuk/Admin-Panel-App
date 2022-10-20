import { animate, motion } from 'framer-motion'
import React, { FC, useCallback, useEffect, useRef } from 'react'

import { FADE_IN } from '@/utils/animation/fade'

interface IAnimatedCounter {
	to: number
}

const AnimatedCounter: FC<IAnimatedCounter> = ({ to }) => {
	const nodeRef = useRef<HTMLSpanElement>(null)

	const from = to * 0.2

	useEffect(() => {
		const node = nodeRef.current

		const controls = animate(from, to, {
			duration: 1.8,
			onUpdate(value) {
				if (node) node.textContent = Math.round(value).toLocaleString()
			},
		})

		return () => controls.stop()
	}, [from, to])

	const setRefs = (node: HTMLSpanElement) => {
		if (nodeRef) {
			// @ts-ignore
			nodeRef.current = node
		}
	}

	return <motion.span {...FADE_IN} ref={setRefs} />
}

export default AnimatedCounter
