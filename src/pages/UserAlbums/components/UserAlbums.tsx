import React, {useContext} from 'react';
import { Button } from '../../../components/Button/Button';
import { TableHeader } from './TableHeader';
import { AlbumRow } from './AlbumRow';
import { ContextProvider} from '../../../services/contextProvider';

export const UserAlbums = () => {
	const { albums }  = useContext(ContextProvider);
	return (
		<div>
			<Button to='/' title="Back" />
			<table>
				<TableHeader />
				<tbody>
				{albums.map((album, i) => (
					<AlbumRow
						key={album.id}
						album={ album }
						index={ i }
					/>))}
				</tbody>
			</table>
		</div>
	);
};
