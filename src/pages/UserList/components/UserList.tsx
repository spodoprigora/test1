import React, { useContext } from "react";
import UserRow from './UserRow';
import { TableHeader } from './TableHeader';
import { ContextProvider } from '../../../services/contextProvider';

export const UserList = () => {
	const { users }  = useContext(ContextProvider);

	if (users.length) {
		return (
			<table>
				<TableHeader />
				<tbody>
				{users.map((user) => (
					<UserRow key={ user.id } user={ user }/>
				))}
				</tbody>
			</table>
		);
	}

	return null;
};
