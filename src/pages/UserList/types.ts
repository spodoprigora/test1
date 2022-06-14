export type User = {
	id: number,
	name: string,
	username: string,
	email: string,
	address: Address
}

export type Address = {
	city: string,
	street: string,
	suite: string,
}
