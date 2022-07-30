function cutHex(hex) {
	return hex.charAt(0) == '#' ? hex.substring(1, 7) : hex;
}

function hexToR(hex) {
	return parseInt(cutHex(hex).substring(0, 2), 16);
}

function hexToG(hex) {
	return parseInt(cutHex(hex).substring(2, 4), 16);
}

function hexToB(hex) {
	return parseInt(cutHex(hex).substring(4, 6), 16);
}

function hexToRGB(hex) {
	hex = hex.trim().replace('#', ''); // cleanup input

	if (hex.length == 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	if (hex == '') {
		return '';
	} // maintain new lines
	else {
		var R = ('   ' + hexToR(hex)).slice(-3);
		var G = ('   ' + hexToG(hex)).slice(-3);
		var B = ('   ' + hexToB(hex)).slice(-3);

		return '#' + hex + '    rgb(' + R + ', ' + G + ', ' + B + ')';
	}
}

function go() {
	var input = document.getElementById('input').value;
	var output = '';

	var input_array = input.split('\n');
	// splits input based on line and stores it in temp array

	for (i = 0; i < input_array.length; i++) {
		output = output + hexToRGB(input_array[i]);

		if (i < input_array.length - 1) {
			output = output + '\n';
		}
	}

	return (document.getElementById('output').value = output);
}
