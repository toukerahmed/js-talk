import React from 'react';
import './header.css';

const HeaderComponent = (props) => {
	const { title } = props;
	return (
		<div className="header">
			<h3 className="title">{title}</h3>
		</div>
	);
};

export default HeaderComponent;
