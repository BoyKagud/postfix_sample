import React from 'react';
import { store } from '../globals';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ItemCard from './ItemCard';

export default class OperatorScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			itemStack: store.postfix.displayStack,
			elementStack: [],
			postfixResult: store.postfix.result,
			operator: "",
			operand: 0
		};

		this.refreshUI();
	}

	pushOperation = () => {
		store.postfix.push(this.state.operand);
		store.postfix.push(this.state.operator);
		this.setState(this.state);
		this.refreshUI();
	}

	handleChange = (e) => {
		console.log(e.target.value, e.target.name);
		switch(e.target.name) {
			case 'operator': this.state.operator = e.target.value; break;
			case 'operand': this.state.operand = parseInt(e.target.value); break;
			default: break;
		}
	}

	refreshUI = () => {
		this.state.itemStack = store.postfix.displayStack;
		this.state.elementStack = this.state.itemStack.map((value, index) => {
			return <ItemCard value={value}></ItemCard>
		})
		this.state.postfixResult = store.postfix.result;
		this.setState(this.state);
	}

	render() {
		return (
			<div>
				<div className="el-stack">
					{this.state.elementStack}
				</div>
				<div className="clear"></div>
				<div className="el-eqseparator">
					<span>=</span>
				</div>
				<div className="clear"></div>
				<div className="el-pfresult">
					<span>{this.state.postfixResult}</span>
				</div>
				<div className="clear"></div>
				<footer>
					<div className="op-container">    
						<div className="half-width">  
							<FormControl variant="outlined" fullWidth={true}>
								<InputLabel htmlFor="outlined-age-native-simple">
									Operator
								</InputLabel>
								<Select
									onChange={this.handleChange}
									name="operator"
									native
									>
									<option value="" />
									<option value={"+"}>+</option>
									<option value={"-"}>-</option>
									<option value={"*"}>*</option>
									<option value={"/"}>/</option>
								</Select>
							</FormControl>
						</div>
						<div className="half-width">  
							<TextField name="operand" onChange={this.handleChange} fullWidth={true} type="number" id="outlined-basic" label="Operand" variant="outlined" />
						</div>
					</div>
					<div className="op-btn-container">
						<Button className="pf-btn" fullWidth={true} variant="contained" color="primary" onClick={this.pushOperation}>Add Operation</Button>
					</div>
				</footer>
			</div>			
		);
	}

}