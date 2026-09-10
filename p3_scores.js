// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
// 홀수만 남기기 > 2배하기 > 내림차순 정렬 > 앞쪽 절반 자르기
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// (a)
const odd = scores.filter(x => x%2!==0);
console.log("keep odd numbers",odd);
const double = odd.map(x => x*2);
console.log("double them", double);
const sort = double.sort((a, b) => b-a);
console.log("sort descending", sort);
const half = sort.slice(0, Math.ceil(sort.length / 2));
console.log("keep the first half", half);
// (b)
const result = scores
    .filter(x => x%2!==0)
    .map(x => x*2)
    .sort((a, b) => b-a)
    .slice(0, Math.ceil(scores.filter(x => x % 2 !== 0).length / 2));
console.log("result:", result);
// (c)
console.log("scores:",scores);
