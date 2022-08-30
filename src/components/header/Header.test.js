import {render} from '@testing-library/react';
import Header from './Header';

test('render header tag', () => {
    const {container} = render(<Header />);
    const header = container.querySelector('header')

    expect(header).toBeDefined();
});

test('render img into header', () => {
    const {container} = render(<Header />);
    const img = container.querySelector('img');

    expect(img).toBeDefined();
    expect(img.src.includes('octocat')).toBeTruthy();
});

test('render text into header', () => {
    const {container} = render(<Header />);
    const title = 'Github Finder';
    const header = container.querySelector('header');
    const text = header.textContent;

    expect(text).toBeDefined();
    expect(text).toEqual(title);
});