import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Album } from '../types';

type Props = {
	album: Album,
	index: number,
}

export const AlbumRow: FC<Props> = ({ album, index }) => {
	const { userId } = useParams();
	return (
		<tr>
			<td>{++index}</td>
			<td>{album.title}</td>
			<td>
				<Link to={`/user/${userId}/albums/${album.id}`}>Open</Link>
			</td>
		</tr>
	);
};
