import React, { FC } from 'react';
import { Address } from '../types';

type Props = {
	address: Address
}

export const UserAddress: FC<Props> = ({ address }) => {
	return (
		<>
			{`${address.city} ${address.street} ${address.suite}`}
		</>
	);
};
