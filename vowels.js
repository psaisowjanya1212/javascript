var name=prompt("Enter String");
vowel(name);


function vowel(name){

var count = 0;
var a = [];

for(var i=0,j=0;i<name.length;i++,j++)
{
if(name[i]=='a' || name[i]=='e' || name[i]=='i' || name[i]=='o' || name[i]=='u'
   || name[i]=='A' || name[i]=='E' || name[i]=='I' || name[i]=='O' || name[i]=='U')
   {
	document.write("<b> "+name[i]+"</b>");
	count++;
	
    }

}

if(count==0)
{

	document.write("no vowels");
	
}
	
else
{

	document.write(" are Vowels in <b>"+name+"</b>");
}
 
}

