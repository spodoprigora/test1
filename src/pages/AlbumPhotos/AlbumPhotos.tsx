import React, {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { request } from '../../services/request';
import { Button } from '../../components/Button/Button';
import { ContextProvider} from '../../services/contextProvider';
import { PhotoList } from './components/PhotoList';

export const AlbumPhotos = () => {
	const { userId, albumId } = useParams();
	const { setPhotos }  = useContext(ContextProvider);

	useEffect(() => {
		const getPhotos = async() => {
			const photos = await request(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);

			setPhotos(photos);
		};
		getPhotos()
	}, [albumId, setPhotos]);

	return (
		<div>
			<Button to={`/user/${userId}/albums`} title="Back" />
			<PhotoList />
		</div>
	);
};
