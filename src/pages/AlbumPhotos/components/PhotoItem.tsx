import React, { FC } from 'react';
import { Photo } from '../types';
import styles from './Photo.module.css';

type Props = {
	photo: Photo,
}

export const PhotoItem: FC<Props> = ({ photo }) => {
	return (
		<li className={styles.photo}>
			<img
				width={ 150 }
				height={ 150 }
				src={ photo.thumbnailUrl }
				alt={ photo.title }
			/>
		</li>
	);
};
