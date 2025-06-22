<template>
  <div class="checkout-container">
    <div class="checkout-header">
      <button class="back-button" @click="goBack">Go Back</button>
      <h1 class="checkout-title">CHECKOUT</h1>
    </div>

    <div class="checkout-grid">
      <div class="checkout-form">
        <!-- Billing Details -->
        <section class="form-section">
          <h2 class="section-title">BILLING DETAILS</h2>
          <div class="form-grid">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                placeholder="Alexei Ward"
              />
              <span
                v-if="errors.name"
                class="validate-input"
                >{{ errors.name }}</span
              >
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                placeholder="alexei@mail.com"
              />
              <span
                v-if="errors.email"
                class="validate-input"
                >{{ errors.email }}</span
              >
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                placeholder="1 202-555-0135"
              />
              <span
                v-if="errors.phone"
                class="validate-input"
                >{{ errors.phone }}</span
              >
            </div>
          </div>
        </section>

        <!-- Shipping Info -->
        <section class="form-section">
          <h2 class="section-title">SHIPPING INFO</h2>
          <div class="form-grid">
            <div class="form-group full-width">
              <label for="address">Address</label>
              <input
                type="text"
                id="address"
                v-model="formData.address"
                placeholder="1137 Williams Avenue"
              />
              <span
                v-if="errors.address"
                class="validate-input"
                >{{ errors.address }}</span
              >
            </div>
            <div class="form-group">
              <label for="zip">ZIP Code</label>
              <input
                type="text"
                id="zip"
                v-model="formData.zip"
                placeholder="10001"
              />
              <span v-if="errors.zip" class="validate-input">{{
                errors.zip
              }}</span>
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input
                type="text"
                id="city"
                v-model="formData.city"
                placeholder="New York"
              />
              <span
                v-if="errors.city"
                class="validate-input"
                >{{ errors.city }}</span
              >
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input
                type="text"
                id="country"
                v-model="formData.country"
                placeholder="United States"
              />
              <span
                v-if="errors.country"
                class="validate-input"
                >{{ errors.country }}</span
              >
            </div>
          </div>
        </section>

        <!-- Payment Details -->
        <section class="form-section">
          <h2 class="section-title">PAYMENT DETAILS</h2>
          <div class="form-grid">
            <div class="payment-method">
              <h1>Payment Method</h1>
              <div class="radio-group">
                <div
                  class="radio-option"
                  :class="{ selected: formData.paymentMethod === 'eMoney' }"
                  @click="formData.paymentMethod = 'eMoney'"
                >
                  <input
                    type="radio"
                    id="eMoney"
                    v-model="formData.paymentMethod"
                    value="eMoney"
                  />
                  <label for="eMoney" class="input-label">e-Money</label>
                </div>
                <div
                  class="radio-option"
                  :class="{ selected: formData.paymentMethod === 'cash' }"
                  @click="formData.paymentMethod = 'cash'"
                >
                  <input
                    type="radio"
                    id="cash"
                    v-model="formData.paymentMethod"
                    value="cash"
                  />
                  <label for="cash" class="input-label">Cash on Delivery</label>
                </div>
              </div>
            </div>
            
           <div class="e-money-parent">
            <div
              v-if="formData.paymentMethod === 'eMoney'"
            >
              <label for="eMoneyNumber">e-Money Number</label>
              <input
                type="text"
                id="eMoneyNumber"
                v-model="formData.eMoneyNumber"
                placeholder="238521993"
              />
              <span
                v-if="errors.eMoneyNumber"
                class="validate-input"
                >{{ errors.eMoneyNumber }}</span>
            </div>

            <div
              v-if="formData.paymentMethod === 'eMoney'"
            >
              <label for="eMoneyPIN">e-Money PIN</label>
              <input
                type="text"
                id="eMoneyPIN"
                v-model="formData.eMoneyPIN"
                placeholder="6891"
              />
              <span
                v-if="errors.eMoneyPIN"
                class="validate-input"
                >{{ errors.eMoneyPIN }}</span>
            </div>
           </div>

          </div>
        </section>
      </div>

      <!-- Order Summary -->
      <div class="order-summary">
        <h2 class="summary-title">SUMMARY</h2>
        <div class="cart-items">
          <div
            v-for="(item, index) in cartStore.items"
            :key="index"
            class="cart-item"
          >
            <div class="item-info">
              <div class="cart-item__image">
                <img :src="item.image" :alt="item.name" />
              </div>
              <div class="item-details">
                <p class="item-name">{{ item.name.slice(0, 13) }}</p>
                <p class="item-price">${{ item.price.toLocaleString() }}</p>
              </div>
            </div>
            <div class="item-quantity">
              <span>x{{ item.quantity }}</span>
            </div>
          </div>
        </div>

        <div class="summary-totals">
          <div class="total-row">
            <span>TOTAL</span>
            <span>${{ total.toLocaleString() }}</span>
          </div>
          <div class="total-row">
            <span>SHIPPING</span>
            <span>${{ shipping.toLocaleString() }}</span>
          </div>
          <div class="total-row">
            <span>VAT (INCLUDED)</span>
            <span>${{ vat.toLocaleString() }}</span>
          </div>
          <div class="total-row grand-total">
            <span>GRAND TOTAL</span>
            <span>${{ grandTotal.toLocaleString() }}</span>
          </div>
        </div>

        <button class="checkout-button" @click="submitOrder">
          CONTINUE & PAY
        </button>
      </div>
    </div>

    <thankyouDialog
      @close="backHome"
      @back="backtoCart"
      :items="cartStore.items"
      :isOpen="cartStore.thankyouStatus"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/store/cart-store";
import thankyouDialog from "@/components/thankYouDialog.vue";

const router = useRouter();
const cartStore = useCartStore();

const backHome = () => {
  router.push("/");
  cartStore.setThankyouStatus(false);
};

const backtoCart = () => {
  cartStore.setThankyouStatus(false);
};

const formData = ref({
  name: "",
  email: "",
  phone: "",
  address: "",
  zip: "",
  city: "",
  country: "",
  paymentMethod: "eMoney",
  eMoneyNumber: "",
  eMoneyPIN: "",
});

const errors = ref({});

function validateForm() {
  errors.value = {}; // Clear previous

  if (!formData.value.name.trim()) errors.value.name = "Name is required.";
  if (!formData.value.email.trim()) {
    errors.value.email = "Email is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.value.email)) {
    errors.value.email = "Enter a valid email.";
  }
  if (!formData.value.phone.trim())
    errors.value.phone = "Phone number is required.";
  if (!formData.value.address.trim())
    errors.value.address = "Address is required.";
  if (!formData.value.zip.trim()) errors.value.zip = "ZIP code is required.";
  if (!formData.value.city.trim()) errors.value.city = "City is required.";
  if (!formData.value.country.trim())
    errors.value.country = "Country is required.";

  if (formData.value.paymentMethod === "eMoney") {
    if (!formData.value.eMoneyNumber.trim())
      errors.value.eMoneyNumber = "e-Money number is required.";
    if (!formData.value.eMoneyPIN.trim())
      errors.value.eMoneyPIN = "e-Money PIN is required.";
  }

  return Object.keys(errors.value).length === 0;
}

const shipping = ref(50);
const vatRate = 0.2;

const total = computed(() => {
  return cartStore.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

const vat = computed(() => Math.round(total.value * vatRate));
const grandTotal = computed(() => total.value + shipping.value);

const goBack = () => router.go(-1);

const submitOrder = () => {
  if (!validateForm()) return;

  console.log("Order submitted:", formData.value);
  cartStore.setThankyouStatus(true);
};
</script>

<style scoped>
.checkout-container {
  max-width: 1110px;
  margin: 0 auto;
  padding: 24px;
  background-color: #fafafa;
}

.validate-input{
  color: red;
  font-weight: 200;
}

.checkout-header {
  margin-bottom: 40px;
}

.cart-item__image {
  width: 64px;
  height: 64px;
  margin-right: 16px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.cart-item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  font-size: 15px;
  font-weight: 500;
  color: #000000;
  opacity: 0.5;
  cursor: pointer;
  padding: 0;
  margin-bottom: 24px;
}

.back-button:hover {
  color: #d87d4a;
}

.checkout-title {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.15px;
  text-transform: uppercase;
  margin: 0;
}

.checkout-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.form-section {
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 32px;
}

.section-title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.93px;
  text-transform: uppercase;
  color: #d87d4a;
  margin-bottom: 16px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.form-group.full-width {
  grid-column: span 2;
}

label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.21px;
}

input {
  height: 56px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.25px;
}

input:focus {
  border-color: #d87d4a;
  outline: none;
}

.payment-method {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
}

.e-money-parent {
  display: flex;
  grid-column: span 2; /* Make it span both columns in the grid */
  width: 100%;
  gap: 10px;
}

.e-money-parent > div {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.e-money-parent input {
  width: 85%;
}


.radio-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.radio-option {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.radio-option input[type="radio"] {
  width: 20px;
  height: 20px;
  margin-right: 1rem;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
}

.radio-option input[type="radio"]::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #d87d4a;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.2s ease-in-out;
}

.radio-option input[type="radio"]:checked::after {
  transform: translate(-50%, -50%) scale(1);
}

.radio-option input {
  display: block;
}

.radio-option label {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.25px;
  cursor: pointer;
}

.order-summary {
  background: #ffffff;
  border-radius: 8px;
  padding: 32px;
  align-self: flex-start;
}

.summary-title {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.29px;
  text-transform: uppercase;
  margin-bottom: 31px;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.item-image {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  color: #000000;
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.item-name {
  font-size: 15px;
  font-weight: 700;
  margin: 0;
}

.item-price {
  font-size: 14px;
  font-weight: 700;
  opacity: 0.5;
  margin: 0;
}

.item-quantity {
  font-size: 15px;
  font-weight: 700;
  opacity: 0.5;
}

.summary-totals {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
}

.total-row {
  display: flex;
  justify-content: space-between;
}

.total-row span:first-child {
  font-size: 15px;
  font-weight: 500;
  opacity: 0.5;
  text-transform: uppercase;
}

.total-row span:last-child {
  font-size: 18px;
  font-weight: 700;
}

.grand-total span:last-child {
  color: #d87d4a;
}

.checkout-button {
  width: 100%;
  height: 48px;
  background: #d87d4a;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-button:hover {
  background: #fbaf85;
}

@media (max-width: 768px) {
  .checkout-grid {
    grid-template-columns: 1fr;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .payment-method {
    grid-template-columns: 1fr;
  }

  .form-group.full-width {
    grid-column: span 1;
  }
}
</style>
