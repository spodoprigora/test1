import React, { FC, useState } from 'react';
import { User } from '../pages/UserList/types';
import { Album } from '../pages/UserAlbums/types';
import { Photo } from '../pages/AlbumPhotos/types';

type ContextProviderType = {
	users: Array<User>,
	albums: Array<Album>,
	photos: Array<Photo>,
	setUsers: (users: Array<User>) => void,
	setAlbums: (albums: Array<Album>) => void,
	setPhotos: (photos: Array<Photo>) => void,
}

export const ContextProvider = React.createContext<ContextProviderType>({
	users: [],
	albums: [],
	photos: [],
	setUsers: () => {},
	setAlbums: () => {},
	setPhotos: () => {},
});

export const AppContextProvider: FC<{ children: React.ReactElement}> = ({ children }) => {
	const [users, setUsers] = useState<Array<User>>([]);
	const [albums, setAlbums] = useState<Array<Album>>([]);
	const [photos, setPhotos] = useState<Array<Photo>>([]);

	return (
		<ContextProvider.Provider value={{ users, albums, photos, setUsers, setAlbums, setPhotos}}>
			{children}
		</ContextProvider.Provider>
	)
};

