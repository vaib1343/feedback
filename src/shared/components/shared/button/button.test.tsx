import Button from './button';
import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event'

describe("Button Component", () => {
    test("should render component", () => {
        render(<Button>Hello world</Button>);
        const buttonEle = screen.getByRole('button', {
            name: 'Hello world'
        });
        expect(buttonEle).toBeInTheDocument();
    })

    test("should work onClick", () => {
        user.setup();
        const handleClick = jest.fn();
        render(<Button value="hello" onAbort={() => {}} onClick={() => {}}/>);
        const buttonEle = screen.getByRole('button');
        user.click(buttonEle);
        screen.debug()
        // expect(handleClck).toBeCalled()
    })
})