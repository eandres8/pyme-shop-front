/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';

import { CartPage } from './CartPage';
import { useCartPage } from './cart-page';
import { useAuth } from '@/views/core/hooks';
import type { TCartItem } from '@/app/types';

// Mocks de hooks
vi.mock('../../hooks/useCartPage');
vi.mock('../../hooks/useAuth');

// Mocks de componentes secundarios
vi.mock('@/views/core/components', () => ({ Navbar: () => <div>Navbar</div> }));
vi.mock('../../components', () => ({ CartList: ({ items }: any) => <div>CartList-{items.length}</div> }));
vi.mock('@/views/core/components', () => ({ AuthCard: () => <div>AuthCard</div> }));
vi.mock('../../components', () => ({ CartSummary: () => <div>CartSummary</div> }));


describe('CartPage', () => {
  const mockUseCartPage = useCartPage as any;
  const mockUseAuth = useAuth as any;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render Navbar', () => {
    mockUseCartPage.mockReturnValue({ listItems: () => [], hasItems: false });
    mockUseAuth.mockReturnValue({
        isAuthenticated: false,
        logout: () => null as any,
        handleSignIn: () => null as any,
        handleRegister: () => null as any
    });

    render(<CartPage />);
    expect(screen.getByText('Navbar')).toBeInTheDocument();
  });

  it('should show message when cart is empty', () => {
    mockUseCartPage.mockReturnValue({ listItems: () => [], hasItems: false });
    mockUseAuth.mockReturnValue({
        isAuthenticated: false,
        logout: () => null as any,
        handleSignIn: () => null as any,
        handleRegister: () => null as any
    });

    render(<CartPage />);

    expect(screen.getByText('No hay productos seleccionados')).toBeInTheDocument();
  });

  it('should show CartList when there are items', () => {
    const items: TCartItem[] = [{ id: '1', title: 'Product 1' } as TCartItem, { id: '2', title: 'Product 2' } as TCartItem];
    mockUseCartPage.mockReturnValue({ listItems: () => items, hasItems: true });
    mockUseAuth.mockReturnValue({
        isAuthenticated: false,
        logout: () => null as any,
        handleSignIn: () => null as any,
        handleRegister: () => null as any
    });

    render(<CartPage />);

    expect(screen.getByText('CartList-2')).toBeInTheDocument();
  });

  it('should show AuthCard when user is not authenticated', () => {
    mockUseCartPage.mockReturnValue({ listItems: () => [], hasItems: false });
    mockUseAuth.mockReturnValue({
        isAuthenticated: false,
        logout: () => null as any,
        handleSignIn: () => null as any,
        handleRegister: () => null as any
    });

    render(<CartPage />);

    expect(screen.getByText('AuthCard')).toBeInTheDocument();
    expect(screen.queryByText('CartSummary')).not.toBeInTheDocument();
  });

  it('should show CartSummary when user is authenticated', () => {
    mockUseCartPage.mockReturnValue({ listItems: () => [], hasItems: false });
    mockUseAuth.mockReturnValue({
        isAuthenticated: true,
        logout: () => null as any,
        handleSignIn: () => null as any,
        handleRegister: () => null as any
    });

    render(<CartPage />);

    expect(screen.getByText('CartSummary')).toBeInTheDocument();
    expect(screen.queryByText('AuthCard')).not.toBeInTheDocument();
  });
});