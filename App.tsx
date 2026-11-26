import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistModal } from './components/WishlistModal';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PRODUCTS } from './data/products';
import { Product, CartItem, ActivePage } from './types';
import { BRAND_CONFIG } from './data/config';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Cart state stored in localStorage for persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('lovellaa_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state stored in localStorage
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('lovellaa_wishlist');
      return saved ? JSON.parse(saved) : ['lov-001', 'lov-003'];
    } catch {
      return ['lov-001', 'lov-003'];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [shopCategoryInitial, setShopCategoryInitial] = useState('Tous');

  useEffect(() => {
    try {
      localStorage.setItem('lovellaa_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('lovellaa_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const handleAddToCart = (product: Product, size: string, color: string, quantity: number) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedSize === size && item.selectedColor === color
      );
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      }
      return [...prev, { product, selectedSize: size, selectedColor: color, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleDirectWhatsAppOrder = (product: Product, size: string, color: string, quantity: number) => {
    let message = `*COMMANDE DIRECTE - LOVELLAA CREATION*\n\n`;
    message += `*Article:* ${product.name}\n`;
    message += `*Quantité:* ${quantity}\n`;
    message += `*Taille:* ${size}\n`;
    if (color) message += `*Couleur:* ${color}\n`;
    message += `*Prix:* ${(product.price * quantity).toLocaleString()} ${BRAND_CONFIG.currency}\n\n`;
    message += `*Paiement à la livraison dans les 58 Wilayas.*`;

    const url = `https://wa.me/${BRAND_CONFIG.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems(prev => {
      const copy = [...prev];
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds(prev => 
      prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id]
    );
  };

  const wishlistProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));

  // Handle category shortcut pages
  const renderPage = () => {
    if (activePage === 'home') {
      return (
        <Home
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onAddToCartQuick={(p) => {
            setSelectedProduct(p);
          }}
          setActivePage={setActivePage}
          setSelectedCategory={(cat) => {
            setShopCategoryInitial(cat);
          }}
        />
      );
    }
    if (activePage === 'shop') {
      return (
        <Shop
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onAddToCartQuick={(p) => setSelectedProduct(p)}
          initialCategory={shopCategoryInitial}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      );
    }
    if (activePage === 'pyjamas') {
      return (
        <Shop
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onAddToCartQuick={(p) => setSelectedProduct(p)}
          initialCategory="Pyjamas"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      );
    }
    if (activePage === 'robes') {
      return (
        <Shop
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onAddToCartQuick={(p) => setSelectedProduct(p)}
          initialCategory="Robes"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      );
    }
    if (activePage === 'lingerie') {
      return (
        <Shop
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onAddToCartQuick={(p) => setSelectedProduct(p)}
          initialCategory="Lingerie"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      );
    }
    if (activePage === 'nouveautes') {
      return (
        <Shop
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onAddToCartQuick={(p) => setSelectedProduct(p)}
          initialCategory="Nouveautés"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      );
    }
    if (activePage === 'about') {
      return <About />;
    }
    if (activePage === 'contact') {
      return <Contact />;
    }
    return <Home products={PRODUCTS} onSelectProduct={setSelectedProduct} wishlistIds={wishlistIds} onToggleWishlist={handleToggleWishlist} onAddToCartQuick={setSelectedProduct} setActivePage={setActivePage} setSelectedCategory={setShopCategoryInitial} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCEEF3] font-sans text-[#3D2933] antialiased">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={(q) => {
          setSearchQuery(q);
          if (q && activePage !== 'shop') {
            setActivePage('shop');
          }
        }}
      />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setActivePage={setActivePage} />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onDirectWhatsAppOrder={handleDirectWhatsAppOrder}
          isWishlisted={wishlistIds.includes(selectedProduct.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onOpenCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderComplete={() => {
          setCartItems([]);
          setIsCheckoutOpen(false);
        }}
      />

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistProducts}
        onSelectProduct={(p) => {
          setSelectedProduct(p);
          setIsWishlistOpen(false);
        }}
        onRemoveFromWishlist={handleToggleWishlist}
      />
    </div>
  );
}
