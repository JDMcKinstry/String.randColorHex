;(function() {	//	String.randColorHex	//	Returns Hex Color Code
	var a = '0123456789ABCDEF'.split(''),
		b = a.length;
	function mathRand(min, max) { var r = Math.random() * (max - min + 1); return ~~r + ~~min; }
	function randColorHex() {
		var c = mathRand(0, 100) % 2 ? 3 : 6, d = [ '#' ];
		for (var i=0;i<c;i++) d.push(a[mathRand(0, b-1)]);
		return d.join('');
	}
	Object['defineProperty'] && !String.hasOwnProperty('randColorHex')
		? Object.defineProperty(String, 'randColorHex', { value: randColorHex })
			: String.randColorHex = randColorHex;
})();
