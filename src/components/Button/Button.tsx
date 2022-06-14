import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type Props = {
	to: string,
	title: string,
}
export const Button: FC<Props> = ({ to, title }) => {
	return (
		<div className={styles.button}>
			<Link to={ to }>{ title }</Link>
		</div>
	);
};