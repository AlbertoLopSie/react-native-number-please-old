import * as React from 'react';
import renderer from 'react-test-renderer';
import NumberPlease from '../NumberPlease';

it('renders correctly', () => {
  const pizzas = { pizzas: 0 };
  const pizzaNumbers = [{ id: 'pizza', label: '🍕', min: 0, max: 99 }];

  const Picker = renderer
    .create(
      <NumberPlease
        pickers={pizzaNumbers}
        values={pizzas}
        onChange={(values: any) => console.log(values)}
      />
    )
    .toJSON();

  expect(Picker).toMatchSnapshot();
});
