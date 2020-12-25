
function arrayIn(){
var arr=["Fruits","Vegetables","Clothes"];
        document.writeln("<br><Br>Original Array is: ");
	for(i=0;i<arr.length;i++)
	document.writeln("<b>"+arr[i]+"</b>");
	arraySize(arr);
}

//Size of Array
function arraySize(arr){
	document.writeln("<br><br>Size of array is: "+arr.length);
	arrayReverse(arr);
}

//Array reverse
function arrayReverse(arr){
	
	
	arr.reverse();
	document.writeln("<br><br>Reversed Array Elements are: ");
	for(i=0;i<arr.length;i++)
	document.writeln("<b>"+arr[i]+"</b>");
}
