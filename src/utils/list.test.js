import '@testing-library/jest-dom';
import { splitTodosIntoDays } from "./list";

describe('splitTodosIntoDays', () => {
	test('splits todos into correct days', () => {
	  const todos = [
		{ text: 'Måndag todo', day: 'mo' },
		{ text: 'Tisdag todo', day: 'ti' },
		{ text: 'Onsdag todo', day: 'on' },
		{ text: 'Torsdag todo', day: 'to' },
		{ text: 'Fredag todo', day: 'fr' },
		{ text: 'Lördag todo', day: 'lö' },
		{ text: 'Söndag todo', day: 'sö' }
	  ];
  
	  const [mo, ti, on, to, fr, lö, sö] = splitTodosIntoDays(todos);
  
	  expect(mo).toEqual([{ text: 'Måndag todo', day: 'mo' }]);
	  expect(ti).toEqual([{ text: 'Tisdag todo', day: 'ti' }]);
	  expect(on).toEqual([{ text: 'Onsdag todo', day: 'on' }]);
	  expect(to).toEqual([{ text: 'Torsdag todo', day: 'to' }]);
	  expect(fr).toEqual([{ text: 'Fredag todo', day: 'fr' }]);
	  expect(lö).toEqual([{ text: 'Lördag todo', day: 'lö' }]);
	  expect(sö).toEqual([{ text: 'Söndag todo', day: 'sö' }]);
	});
  
	test('can emty the todo list', () => {
	  const todos = [];
	  const result = splitTodosIntoDays(todos);
  
	  expect(result).toEqual([[], [], [], [], [], [], []]);
	});
  
	test('handles days with no todo', () => {
	  const todos = [
		{ text: 'Måndag todo', day: 'mo' },
		{ text: 'Onsdag todo', day: 'on' },
		{ text: 'Fredag todo', day: 'fr' }
	  ];
  
	  const [mo, ti, on, to, fr, lö, sö] = splitTodosIntoDays(todos);
  
	  expect(mo).toEqual([{ text: 'Måndag todo', day: 'mo' }]);
	  expect(ti).toEqual([]);
	  expect(on).toEqual([{ text: 'Onsdag todo', day: 'on' }]);
	  expect(to).toEqual([]);
	  expect(fr).toEqual([{ text: 'Fredag todo', day: 'fr' }]);
	  expect(lö).toEqual([]);
	  expect(sö).toEqual([]);
	});
  
	test('handles multiple todos at the same day', () => {
	  const todos = [
		{ text: 'Måndag todo 1', day: 'mo' },
		{ text: 'Måndag todo 2', day: 'mo' },
		{ text: 'Tisdag todo', day: 'ti' }
	  ];
  
	  const [mo, ti, on, to, fr, lö, sö] = splitTodosIntoDays(todos);
  
	  expect(mo).toEqual([
		{ text: 'Måndag todo 1', day: 'mo' },
		{ text: 'Måndag todo 2', day: 'mo' }
	  ]);
	  expect(ti).toEqual([{ text: 'Tisdag todo', day: 'ti' }]);
	  expect(on).toEqual([]);
	  expect(to).toEqual([]);
	  expect(fr).toEqual([]);
	  expect(lö).toEqual([]);
	  expect(sö).toEqual([]);
	});
  });