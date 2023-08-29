//secretWord("sadbpstcrdvaefikkgoenqrt", 5) -> "brake"
// sa(dbp)st(crd)(vae)f(ikk)g(oen)qrt
// The values of the triplets in parentheses are 22, 25, 28, 31, 34.
// An arithmetic series with difference of 3.

//secretWord("aheiayd", 3) -> "hey"
//(a[he)i](ayd)
//The triplets with the secret letters can overlap.
// ahe=14, hei=22, ayd=30; a series with a difference of 8.

function secretWord(str, len) 
{
	var arr = [];
	var final = [];
	for (var i = 0; i <= str.length-3; i++)
	{
		var ob = {};
		var sub = str.substring(i,i+3);
		ob["sub"] = sub[1];
		var val = sub[0].charCodeAt(0)+sub[1].charCodeAt(0)+sub[2].charCodeAt(0)-288;
		ob["value"] = val;
		arr.push(ob);
	}
	var values = arr.map(a => a["value"]);
	for (var i = 0; i < values.length; i++)
	{
		var v = values[i];
		for (var diff = 1; diff < Math.max(...values)-Math.min(...values); diff++)
		{
			var ids = [i];
			var lastId = i+1;
			var aL = [i+1];
			for (var j = 1; j < len; j++)
			{
				var id = values.slice(lastId).indexOf(v+diff*j);
				if (id != -1)
				{
					lastId += id;
					ids.push(lastId);
				}
			}
			if (ids.length == len)
			{
				final = ids;
				break;
			}
		}
	}
	var word = "";
	for (var i = 0; i < final.length; i++)
	{
		word += arr[final[i]]["sub"];	
	}
	return word;
}
// Test the function
console.log(secretWord("sadbpstcrdvaefikkgoenqrt", 5));  // Should return "brake"
console.log(secretWord("aheiayd", 3));  // Should return "hey"
