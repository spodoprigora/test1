import React, { useEffect, useContext } from 'react';
import { request } from '../../services/request';
import { UserList } from './components/UserList';
import { ContextProvider } from '../../services/contextProvider';

export const UserListWrapper= () => {
	const { users, setUsers }  = useContext(ContextProvider);

	useEffect(() => {
		const getUsers = async () => {
			const users = await request('https://jsonplaceholder.typicode.com/users');
			setUsers(users);
		};

		if (!users.length) {
			getUsers();
		}
	}, [setUsers, users.length]);

	return (
		<div>
			<h3>Users list</h3>
			<UserList />
		</div>
	);
};
