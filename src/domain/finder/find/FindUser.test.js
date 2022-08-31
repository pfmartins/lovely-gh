import {render} from '@testing-library/react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FindUser from './FindUser';

test('render header tag', () => {
  const {container} = render(<BrowserRouter><Routes><Route path="/" element={<FindUser />} /></Routes></BrowserRouter>);
  const header = container.querySelector('header');
  expect(header).toBeDefined();
});

test('render footer tag', () => {
  const {container} = render(<BrowserRouter><Routes><Route path="/" element={<FindUser />} /></Routes></BrowserRouter>);
  const footer = container.querySelector('footer');
  expect(footer).toBeDefined();
});

test('render component body element', () => {
  const {container} = render(<BrowserRouter><Routes><Route path="/" element={<FindUser />} /></Routes></BrowserRouter>);
  const body = container.querySelector('find-user__body');
  expect(body).toBeDefined();
});
