const arr = [4,3,2,1];

const divide = (arr, n) => {
  // Write your code here
	let temp=[];
	let res=[];
	let sum=0;
	for(let i=0;i<arr.length;i++){
		if(sum+arr[i]<=n)
		{ 
			temp.push(arr[i]);
			sum+=arr[i];
		}
		else{
			if(temp.length>0) res.push(temp);
			temp=[arr[i]];
			sum=arr[i];
		}
	}
	if(temp.length>0) res.push(temp);
	return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
