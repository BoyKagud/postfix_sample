import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { store } from '../globals';

export default class OperandScreen extends React.Component {

	startPostfixEval = () => {
		store.postfix.push(this.state.operand);
		this.props.history.push("/step-2");
	}

	handleChange = (e) => {
		this.setState({
			operand: e.target.value
		});
	}

	render() {
		return (
			<div>
				<div className="app-title">
					Expression<br/>Evaluator
				</div>
				<div className="clear"></div>
				<div className="s1-inputs-container">
					<div className="s1-inputs">
						<TextField onChange={this.handleChange} fullWidth={true} type="number" id="outlined-basic" label="Please Enter a Number" variant="outlined" />
					</div>
					<div className="s1-inputs">
						<Button className="pf-btn" fullWidth={true} variant="contained" color="primary" onClick={this.startPostfixEval}>Add Number</Button>
					</div>
				</div>
			</div>			
		);
	}

}