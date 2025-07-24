test('shows error when submitting without selecting a date', () => {
  const mockRegister = jest.fn();
  render(<Register onRegister={mockRegister} />);
  
  // Fill other fields
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
  
  // Leave date empty and submit
  fireEvent.click(screen.getByText('Register'));
  
  // Check for error message
  expect(screen.getByRole('alert')).toHaveTextContent('Date is required');
});
