import React, {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { request } from '../../services/request';
import { UserAlbums } from './components/UserAlbums';
import { ContextProvider } from '../../services/contextProvider';

export const UserAlbumsWrapper = () => {
	const { userId } = useParams();
	const { setAlbums }  = useContext(ContextProvider);

	useEffect(() => {
		const getAlbums = async () => {
			const albums = await request(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
			setAlbums(albums)
		};
		getAlbums();
	}, [userId, setAlbums]);

	return (
		<div>
			<h3>User albums</h3>
			<UserAlbums />
		</div>
	);
};