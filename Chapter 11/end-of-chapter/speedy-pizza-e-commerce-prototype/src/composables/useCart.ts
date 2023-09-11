import { computed, ref } from "vue";
import type { Ref } from "vue";
import { v4 } from 'uuid'

export type CartItem = {
  id: number;
  name: string;
  qty: number;
  price: number;
  extras?: string[];
};

export type Cart = Ref<{
  id: string,
  items: CartItem[];
}>;

export const taxPercent = 20

const cart: Cart = ref({
  id: v4(),
  items: [],
});

export function useCart() {
  function isCartItem(item: any): item is CartItem {
    if ((item as CartItem).id) {
      return true
    }
    return false
  }
  function addItem(item: CartItem): Cart {
    if (isCartItem(item)) {
      cart.value.items.push(item);
      return cart;
    }
    throw new Error("Incorrect type supplied")
  }

  function removeItem(index: number): Cart {
    cart.value.items = cart.value.items.filter((e, i) => (i === index)? false : e)
    return cart;
  }

  function getCart(): Cart {
    return cart;
  }

  function updateCart(items: CartItem[] = []): Cart {
    cart.value.items = items;
    return cart;
  }

  const subtotal = computed(() =>
    cart.value.items.reduce((acc, { qty, price }) => acc + (qty * price), 0).toFixed(2)
  );
  const tax = computed(() => (Number(subtotal.value) * (taxPercent / 100)).toFixed(2));
  const delivery = computed(() => (cart.value.items.length > 0 ? 5 : 0).toFixed(2));
  const total = computed(() => (Number(subtotal.value) + Number(tax.value) + Number(delivery.value)).toFixed(2));


  return {
    addItem,
    removeItem,
    updateCart,
    getCart,
    subtotal,
    tax,
    delivery,
    total,
    taxPercent
  };
}
