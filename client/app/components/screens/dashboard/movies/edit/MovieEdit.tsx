import { useMovieEdit } from './useMovieEdit'
import { FC } from 'react'
import { Controller } from 'react-hook-form'

import Loader from '@/components/ui/Loader'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import Heading from '@/components/ui/heading/Heading'
import Layout from '@/components/ui/layout/Layout'
import UploadField from '@/components/ui/upload-field/UploadField'

import { IMediaResponse } from '@/services/media.service'

const MovieEdit: FC = () => {
	const { isLoading, register, onSubmit, errors, control, handleSubmit } =
		useMovieEdit()

	return (
		<Layout title="Movie Edit">
			<Heading>Edit movie</Heading>
			{isLoading ? (
				<Loader count={4} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className="w-1/3">
					<Field
						{...register('name', {
							required: 'Name is required',
						})}
						placeholder="Name"
						error={errors.name}
					/>
					<Field
						{...register('fees', {
							required: 'Fees is required',
							valueAsNumber: true,
						})}
						type="number"
						placeholder="Fees"
						error={errors.fees}
					/>
					<div className="my-8">
						<Controller
							control={control}
							name="poster"
							render={({ field: { onChange, value } }) => (
								<UploadField
									folder="posters"
									onChange={(value: IMediaResponse) => {
										onChange(value.url)
									}}
									value={value}
								/>
							)}
						/>
					</div>
					<Button>Save</Button>
				</form>
			)}
		</Layout>
	)
}

export default MovieEdit
