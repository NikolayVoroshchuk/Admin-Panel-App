import { useMovie } from './useMovie'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'
import Heading from '@/components/ui/heading/Heading'
import Layout from '@/components/ui/layout/Layout'
import Table from '@/components/ui/table/Table'

const MovieList: FC = () => {
	const { response, isLoading, mutate, create } = useMovie()

	return (
		<Layout title="Movie List">
			<div className="flex justify-between">
				<Heading isMargin={false}>Movie List</Heading>
				<Button onClick={() => create()}>Add Movie</Button>
			</div>
			<Table
				items={
					response?.data.length
						? response.data.map((movie) => ({
								id: movie.id,
								name: movie.name,
								image: movie.poster,
								viewLink: `/movie/${movie.id}`,
								editLink: `/manage/movies/edit/${movie.id}`,
								removeHandler: () => mutate(movie.id),
						  }))
						: []
				}
				isLoading={isLoading}
			/>
		</Layout>
	)
}

export default MovieList
