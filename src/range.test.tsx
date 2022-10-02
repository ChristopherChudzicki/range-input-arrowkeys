import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event"

test("Range input keyboard events", async () => {
  const onChange = vi.fn()
  const onKeyDown = vi.fn()
  const onKeyUp = vi.fn()
  render(<input
    aria-label="Example"
    type="range"
    onChange={onChange}
    onKeyDown={onKeyDown}
    onKeyUp={onKeyUp}
  />)
  const range = screen.getByLabelText("Example")
  range.focus()
  await user.keyboard('{ArrowRight}')
  
  expect(onKeyDown).toHaveBeenCalled()
  expect(onKeyUp).toHaveBeenCalled()

  // This throws an error; it should not
  expect(onChange).toHaveBeenCalled()
})