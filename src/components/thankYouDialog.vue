<template>
  <div class="confirmation-dialog" v-if="isOpen">
    <div class="confirmation-overlay" @click.self="$emit('back')"></div>

    <div class="confirmation-content">
      <!-- Checkmark icon -->
      <div class="confirmation-icon">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="32" fill="#D87D4A" />
          <path
            d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
            stroke="white"
            stroke-width="4"
          />
        </svg>
      </div>

      <h2 class="confirmation-title">THANK YOU FOR YOUR ORDER</h2>
      <p class="confirmation-subtext">
        You will receive an email confirmation shortly.
      </p>

      <!--body-->

      <div class="order-summary-flex">
        <!-- Left side - Items list -->
        <div class="items-column">
          <!-- Display only the first item -->
          <div class="order-item" v-if="items.length">
            <div class="item-image">
              <img :src="items[0]?.image" :alt="items[0]?.name" />
            </div>
            <div class="item-info">
              <span class="item-name">{{ items[0]?.name.slice(0, 13) }}</span>
              <span class="item-price"
                >$ {{ items[0]?.price.toLocaleString() }}</span
              >
            </div>
            <span class="item-quantity">x{{ items[0]?.quantity }}</span>
          </div>

          <!-- Show "and X other item(s)" if more than 1 -->
          <div v-if="items?.length > 1" class="other-items-summary">
            and {{ items?.length - 1 }} other item<span
              v-if="items?.length - 1 > 1"
              >s</span
            >
          </div>
        </div>

        <!-- Right side - Totals (black background) -->
        <div class="totals-column">
          <div class="total-row">
            <span class="total-label">GRAND TOTAL</span>
          </div>
          <span class="total-value">$ {{ grandTotal?.toLocaleString() }}</span>
        </div>
      </div>

      <!--body-->

      <button class="back-home-btn" @click="$emit('close')">
        BACK TO HOME
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
  shipping: {
    type: Number,
    default: 50,
  },
  vatRate: {
    type: Number,
    default: 0.2,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const total = computed(() => {
  return props.items?.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
});

const vat = computed(() => {
  return Math.round(total.value * props.vatRate);
});

const grandTotal = computed(() => {
  return total.value + props.shipping;
});
</script>

<style scoped>
.confirmation-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.cart-dialog--open {
  opacity: 1;
  visibility: visible;
}

.confirmation-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.confirmation-content {
  position: relative;
  width: 100%;
  max-width: 540px;
  background-color: white;
  border-radius: 8px;
  padding: 48px;
  text-align: left;
  z-index: 1;
}

.confirmation-icon {
  margin-bottom: 32px;
}

.confirmation-title {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.15px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #000;
}

.confirmation-subtext {
  font-size: 15px;
  opacity: 0.5;
  margin-bottom: 32px;
}

.cart-item__image {
  width: 64px;
  height: 64px;
  margin-right: 16px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.back-home-btn {
  width: 100%;
  padding: 15px 0;
  background-color: #d87d4a;
  color: white;
  border: none;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.back-home-btn:hover {
  background-color: #fbaf85;
}

/*body css */

.order-summary-flex {
  display: flex;
  margin-bottom: 46px;
  border-radius: 8px;
  overflow: hidden;
  height: 140px; /* Fixed height as shown in screenshot */
}

.items-column {
  width: 60%;
  background: #f1f1f1;
  padding: 16px 24px;
}

.totals-column {
  width: 40%;
  background: #000;
  padding: 24px;
  color: white;
}

.order-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
  gap: 1.5rem;
}

.order-item:last-child {
  margin-bottom: 10px;
}

.other-items-summary {
  text-align: center;
  font-weight: 600;
  opacity: 0.4;
  margin-top: 0.5rem;
}

.item-info {
  display: flex;
  flex-direction: column;
}

.item-image img {
  width: 50px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  margin-right: 1px;
}

.item-name {
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
}

.item-quantity {
  font-size: 14px;
  opacity: 0.5;
  font-weight: 700;
  margin-bottom: 15px;
  margin-left: 10px;
}

.item-price {
  font-weight: 700;
  font-size: 14px;
  opacity: 0.5;
}

.total-row {
  margin-bottom: 20px;
}

.total-label {
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 15px;
}

.total-value {
  font-weight: 700;
  font-size: 18px;
}

.grand-total {
  margin-top: 12px;
}


/* Mobile responsive */
@media (max-width: 768px) {
  .order-summary-flex {
    flex-direction: column;
    height: auto;
  }

  .items-column {
    border-radius: 8px 8px 0 0;
  }

  .totals-column {
    border-radius: 0 0 8px 8px;
  }
}

@media (max-width: 768px) {
  .order-summary-container {
    flex-direction: column;
  }

  .order-items {
    border-radius: 8px 8px 0 0;
  }

  .order-totals {
    width: 100%;
    border-radius: 0 0 8px 8px;
  }
}

@media (max-width: 768px) {
  .confirmation-content {
    padding: 32px 24px;
  }

  .confirmation-title {
    font-size: 24px;
  }
}
</style>
