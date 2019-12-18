export class Postfix {

	constructor() {
		this.displayStack = [];
		this.operatingStack = [];
		this.result = 0;
	}

	push = (item) => {
		this.displayStack.push(item);

		var parsedItem = parseInt(item);
		if(parsedItem) {
			this.operatingStack.push(parsedItem);
		} else {
			switch(item) {
				case '+':
					this.result = this.operatingStack.pop() + this.operatingStack.pop();
					break;
				case '-':
					this.result = this.operatingStack.pop() - this.operatingStack.pop();
					break;
				case '*':
					this.result = this.operatingStack.pop() * this.operatingStack.pop();
					break;
				case '/':
					this.result = this.operatingStack.pop() / this.operatingStack.pop();
					break;
				default: break; // missing error handle
			}
			this.operatingStack.push(this.result);
		}
		console.log(this.result, this.operatingStack, this.displayStack);
	}

	arrayCopy = () => {
		this.operatingStack = [];
		for(var i in this.stack) {
			this.operatingStack.push(this.stack[i]);
		}
		console.log(this.operatingStack, this.stack);
	}
}

export const store = {
	postfix: new Postfix()
}