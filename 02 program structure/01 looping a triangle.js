/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

for (let i = 1; i <= 7; i += 1) {
	let text = "";
	for (let j = 1; j <= i; j += 1) {
		text += "#";
	}
	console.log(text);
}