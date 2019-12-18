import React from 'react';

export default class ItemCard extends React.Component {
	render() {
		return (
			<div class="itemcard">
				{this.props.value}
			</div>
		);
	}
}