import React from 'react';
import './header.css';

const HeaderComponent = (props) => {
	const { title, number } = props;
	return (
		<div className="header">
			<h3 className="title">
				{title}- {number}
			</h3>
		</div>
	);
};

export default HeaderComponent;
