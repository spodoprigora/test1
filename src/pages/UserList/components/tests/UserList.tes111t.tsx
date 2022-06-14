import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { UserList } from '../UserList';
import { UserAddress } from '../UserAdress';
import { ContextProvider } from '../../../../services/contextProvider';

const mockUsers = [
	{
		id: 1,
		name: 'Name',
		username: 'UserName',
		email: 'Email',
		address: {
			city: 'City',
			street: 'street',
			suite: 'suite',
		}
	},
	{
		id: 2,
		name: 'Name2',
		username: 'UserName2',
		email: 'Email2',
		address: {
			city: 'City2',
			street: 'street2',
			suite: 'suite2',
		}
	}
];



describe('UserList', () => {
	/*it('userList should exist', () => {
		const  history = createMemoryHistory();
		const { getByText } = render(
			<Router location={ history.location } navigator={ history }>
				<ContextProvider.Provider value={{users: mockUsers} }>
						<UserList />
					</ContextProvider.Provider>
			</Router>
		);
		screen.debug()
		expect(getByText('Users list')).toBeInTheDocument();
	});*/



/*
	beforeEach(() => {
		userList = mount(
			<MemoryRouter>
				<UserList />
			</MemoryRouter>
		, {context: { users: mockUsers}})
	});

	test('userList should exist', () => {
		expect(userList).toBeTruthy();
	});

	test('should correct userList render', () => {
		expect(userList).toMatchSnapshot();
	});

	test('it has equal count rows', () => {
		userList.setContext({ users: mockUsers });
		const rows = userList.find('tbody').find('tr');

		expect(rows).toHaveLength(mockUsers.length);
	});*/

	/*test('it has equal count cells', () => {
		const cells = userList.find('tbody').find('tr').first().find('td');

		expect(cells).toHaveLength(6);
	});*/

});

describe('UserList', () => {
	test('it has correct address', () => {
		const { getByText } = render(<UserAddress address={ mockUsers[0].address } />);

		expect(getByText(`${mockUsers[0].address.city} ${mockUsers[0].address.street} ${mockUsers[0].address.suite}`)).toBeInTheDocument();
	})
});




