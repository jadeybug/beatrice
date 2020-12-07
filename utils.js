"use strict";

/**
 * Allows for ease of building html class strings without having to worry about 
 * missing a space, bracketing a condition wrong, etc.
 * @param {object} classes An object in the format {className: isAdded}, where isAdded is a boolean value
 * or an expression that evaluates to a boolean value. If isAdded === true, the class is added to the returned className string.
 * @returns {string}
 */
export function ClassBuilder(classes) {
	return Object.entries(classes).filter(classPair => classPair[1]).reduce((acc, cur, ind, arr) => acc += cur[0] + (ind + 1 < arr.length ? " " : ""), "");
}

/**
 * Receives an object and returns null if empty. Used primarily in function calls where 
 * returning an empty object instead of null could cause confusion.
 * @param {object} obj
 * @returns If the object is empty, returns null. If not empty, returns the object.
 */
export function NullifyEmptyObject(obj) {
	return (Object.keys(obj).length === 0 && obj.constructor === Object) ? null : obj;
}

/**
 * use with the spread operator (...) to pass props easily from a component to a child component
 * @param {object} props the props object from the parent component.
 * @param {...string} propNames from 1 to n prop names.
 * @returns a new object with only the filtered props included
 */
export function FilterProps(props, ...propNames) {
	return Object.entries(props).filter(prop => propNames.includes(prop[0])).reduce((newProps, currentPropArray) => Object.assign(newProps, {[currentPropArray[0]]: currentPropArray[1]}), {});
}

export function HandlerThatDoesAlmostNothing() {
	console.info("The HandlerThatDoesAlmostNothing has been executed.");
}

export function SetCookie(cookieObject) {
	document.cookie = Object.entries(cookieObject).reduce((cookieString, cookieParamArray) => cookieString += (cookieParamArray[0] + "=" + cookieParamArray[1] + "; "), "");
}

export function GetCookie(cookieName) {
	const cookies = document.cookie.split(";").reduce((acc, cur) => {
		const keyval = cur.split("=");
		acc[keyval[0].trim()] = keyval[1];
		return acc;
	}, {});

	return cookies[cookieName];
}

export function HandleError(error) {
	return new Promise((resolve) => {
		console.error(error);
		resolve(error);
	})
}

export function IsObject (variable) {
	return Object.prototype.toString.call(variable) === '[object Object]';
}

export function ExtractFromNestedObject(obj, nestedProperties) {
	const nestedPropertiesArr = Array.isArray(nestedProperties) ? nestedProperties : [nestedProperties];
	return nestedPropertiesArr.reduce((acc, cur) => {
		if (Array.isArray(cur)) {
			const [ first, ...rest ] = cur;
			return ExtractFromNestedObject(first, rest);
		}
		return acc[cur];
	}, obj)
}

export function articleVowelAgreementGrammarizer(followingWord, exceptions=[], articlePrecedingVowel="an", articlePrecedingConsonant="a") {
  const vowels = ["a", "e", "i", "o", "u", "and-sometimes-y"]; //that last one is just for giggles, it *should* never match.
  const isFirstLetterVowel = vowels.includes(followingWord.toLowerCase().charAt(0));
  const useVowelArticle = (isFirstLetterVowel && !exceptions.includes(followingWord)) || (!isFirstLetterVowel && exceptions.includes(followingWord))
	return useVowelArticle ? articlePrecedingVowel : articlePrecedingConsonant;
}
