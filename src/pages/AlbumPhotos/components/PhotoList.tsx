import React, { useContext } from 'react';
import styles from './Photo.module.css';
import { ContextProvider } from '../../../services/contextProvider';
import { PhotoItem } from './PhotoItem';

export const PhotoList = () => {
	const { photos }  = useContext(ContextProvider);

	return (
		<ul className={styles.photoWrapper}>
			{photos.map((photo) => <PhotoItem key={ photo.id } photo={ photo }/>)}
		</ul>
	);
};

