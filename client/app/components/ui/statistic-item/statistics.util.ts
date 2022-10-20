import { IconType } from 'react-icons'
import {
	AiOutlineEye,
	AiOutlineFire,
	AiOutlineTeam,
	AiOutlineVideoCamera,
} from 'react-icons/ai'

export const getIcon = (id: number): IconType => {
	switch (id) {
		case 1:
			return AiOutlineEye
		case 2:
			return AiOutlineFire
		case 3:
			return AiOutlineVideoCamera
		case 4:
			return AiOutlineTeam
		default:
			return AiOutlineEye
	}
}
