// src/js/useCart.js
export function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.id === product.id);

  let updatedCart;
  if (existingItem) {
    updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    updatedCart = [...cart, { ...product, quantity: 1 }];
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("storage")); // triggers update in Header
}

export function useCartCount() {
  const [cartCount, setCartCount] = React.useState(0);

  const updateCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  };

  React.useEffect(() => {
    updateCount();
    window.addEventListener("storage", updateCount);
    return () => window.removeEventListener("storage", updateCount);
  }, []);

  return cartCount;
}
