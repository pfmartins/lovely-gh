import {render} from '@testing-library/react';
import FindUser from './FindUser';

test('render header tag', () => {
  const {container} = render(<FindUser />);
  const header = container.querySelector('header');
  expect(header).toBeDefined();
});
