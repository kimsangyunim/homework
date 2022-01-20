// Polyfill closest
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		var el = this;
		do {
			if (Element.prototype.matches.call(el, s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}

// Polyfill entries
if(!Object.entries) {
	Object.entries = function(obj) {
		return Object.keys(obj).reduce(function(arr, key) {
			arr.push([key, obj[key]]);
			return arr;
		}, []);
	}
}

// Polyfill get Siblings
var getSiblings = function(e) {
	// for collecting siblings
	let siblings = []; 
	// if no parent, return no sibling
	if(!e.parentNode) {
		return siblings;
	}
	// first child of the parent node
	let sibling  = e.parentNode.firstChild;
	// collecting siblings
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== e) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling;
	}
	return siblings;
};

// Polyfill numberWithCommas
function numberWithCommas(num){
	var len, point, str; 
	num = num + ""; 
	point = num.length % 3 ;
	len = num.length; 

	str = num.substring(0, point); 
	while (point < len) { 
		if (str != "") str += ","; 
		str += num.substring(point, point + 3); 
		point += 3; 
	}
	return str;
}