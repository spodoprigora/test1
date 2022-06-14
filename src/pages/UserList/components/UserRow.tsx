import React, { FC } from 'react';
import { UserAddress } from './UserAdress';
import { Link } from 'react-router-dom';
import { User } from '../types';

type Props = {
	user: User
}

const UserRow: FC<Props> = ({ user }) => {
	return (
		<tr>
			<td>{user.id}</td>
			<td>{user.name}</td>
			<td>{user.username}</td>
			<td>{user.email}</td>
			<td>
				<UserAddress address={ user.address }/>
			</td>
			<td>
				<Link to={`/user/${user.id}/albums`}>Show albums</Link>
			</td>
		</tr>
	);
};

export default UserRow;
