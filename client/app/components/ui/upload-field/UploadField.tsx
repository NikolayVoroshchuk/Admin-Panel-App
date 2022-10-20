import { IUploadField } from './upload-field.interface'
import { useUploadFile } from './useUploadFile'
import { FC } from 'react'

import styles from './UploadField.module.scss'

const UploadField: FC<IUploadField> = ({ onChange, folder, value }) => {
	const { uploadFile } = useUploadFile(onChange, folder)

	return (
		<div className={styles.file}>
			{value && (
				//eslint-disable-next-line @next/next/no-img-element
				<img
					src={value}
					alt=""
					width={150}
					height={150}
					className="mb-5 rounded"
				/>
			)}
			<label className="block">
				<span className="sr-only">Choose file</span>
				<input type="file" onChange={uploadFile} />
			</label>
		</div>
	)
}

export default UploadField
