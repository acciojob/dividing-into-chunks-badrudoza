const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res=[];
	let temp=[];
	let len=arr.length;
	for(let i=0;i<len-1;i++){
		temp.push(arr[i]);
		let sum=temp.reduce((ac,el)=>ac+el);
		if(sum<=n && sum+arr[i+1]>n ) {
			res.push(temp);
			temp=[];
		}
		if(i===len-2){
			temp.push(arr[i+1]);
			res.push(temp);
		temp=[];
		}
	}
	return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
