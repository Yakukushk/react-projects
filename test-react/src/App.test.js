import { render, screen } from '@testing-library/react';
import App from './App';
import Grettings from './components/Grettings';
import userEvent from '@testing-library/user-event';
import Async from './components/Async';


describe('Getting Component', () => {
  test('renders Hello World as a Text', () => {
    render(<Grettings/>);
    const resultScreen = screen.getByText('Hello World');
    expect(resultScreen).toBeInTheDocument();
  });

  test('check if text not was changed', () => {
    render(<Grettings/>);
    const resultScreen = screen.getByText("It's good to see you", {exact : false});
    expect(resultScreen).toBeInTheDocument();
  });
  test('check if text was changed', () => {
    render(<Grettings/>);
    const resultScreen = screen.getByText("Change Text", {exact : false});
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)
    expect(resultScreen).toBeInTheDocument();
  })
  test('check if text not was changed after click', () => {
    render(<Grettings/>);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    const resultScreen = screen.queryByText("It's good to see you", {exact : false});
    expect(resultScreen).toBeNull();
  })
});

describe('Async Component', () => {
  test('renders post if request succeeds', async() => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async() => [{id: 'p1', title: 'First Posts'}]
    });
    render(<Async/>);
    const list = await screen.findAllByRole('listitem');
    // console.log(list);
    expect(list).not.toHaveLength(0);
  })
});

