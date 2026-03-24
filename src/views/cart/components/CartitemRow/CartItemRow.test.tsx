// src/features/cart/components/CartItemRow.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import { CartItemRow } from './CartItemRow';

describe('CartItemRow Component', () => {
  // 1. Mock de los datos y las funciones (Spies)
  const mockItem = {
    id: '123',
    title: 'Producto de Prueba',
    description: 'Una descripción corta',
    price: 50.00,
    stock: 10,
    quantity: 2,
  };

  // Creamos funciones espía para verificar que se llamen
  const mockOnIncrease = vi.fn();
  const mockOnDecrease = vi.fn();
  const mockOnRemove = vi.fn();

  const renderComponent = (item = mockItem) => {
    return render(
      <CartItemRow
        item={item}
        onIncrease={mockOnIncrease}
        onDecrease={mockOnDecrease}
        onRemove={mockOnRemove}
      />
    );
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should render title and image from product', () => {
    renderComponent();
    
    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    const image = screen.getByAltText(mockItem.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://img.icons8.com/ios7/1200/image--v2.jpg');
  });

  test('should make calc and render total', () => {
    renderComponent();
    
    // 50.00 * 2 = 100.00
    const expectedTotal = '$100.00';
    expect(screen.getByText(expectedTotal)).toBeInTheDocument();
  });

  test('should call onRemove with ID', () => {
    renderComponent();
    
    const removeButton = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeButton);

    expect(mockOnRemove).toHaveBeenCalledTimes(1);
    expect(mockOnRemove).toHaveBeenCalledWith(mockItem.id);
  });

  test('should render the component successfull to IncrementButton', () => {
    renderComponent();
    
    expect(screen.getByText(mockItem.quantity.toString())).toBeInTheDocument();
  });
});