// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript

const removeDuplicateWords = (s) => Array.from(new Set (s.split(' '))).join(' ');
