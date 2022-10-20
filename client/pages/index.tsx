import type { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/home.interface'

import { MovieService } from '@/services/movie.service'

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps<IHome> = async () => {
	try {
		const { data: newMovies } = await MovieService.getAll()

		return {
			props: {
				newMovies,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {
				newMovies: [],
			},
		}
	}
}

export default HomePage
