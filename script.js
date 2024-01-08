function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	let c=0;
	if(num === 1)
	{
		return a;
	}
	else if(num===2)
	{
		return b;
	}
	else
	{
		for(let i=1;i<num-1;i++)
			{
				c=a+b;
				a=b;
				b=c;
			}
		return c;
	}
}

module.exports = fibonacci;
