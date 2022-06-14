import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from './App';
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


global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(mockUsers),
	})
);

beforeEach(() => {
	fetch.mockClear();
});

it('render home page', () => {
  const  history = createMemoryHistory();
  const { getByText } = render(
    <Router location={ history.location } navigator={ history }>
		<App />
    </Router>
  );

  screen.debug()

  expect(getByText('Users list')).toBeInTheDocument();
});




it('get home page data', async () => {
	const  history = createMemoryHistory();
	const { getByText, findAllByRole } = render(
		<Router location={ history.location } navigator={ history }>
			<App />
		</Router>

	);
	screen.debug()


	expect(getByText('Users list')).toBeInTheDocument();
	/*  expect(screen.queryByRole('table')).toBeNull();*/
});
