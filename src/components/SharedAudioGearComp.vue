<template>
  <section class="audio-gear">
    <div class="container">
      <div class="text">
        <h2>Bringing you the <span>best</span> audio gear</h2>
        <p>
          Limited at: Per tear to New York City Assignible in the per tear
          school is lightest heretaking new enrollments, speeches and audio
          accessories. Neither a large showroom and luxury demonstration rooms
          available for your listeners and supervisors who range of our
          products. Also by our store or restaurant the fantastic people who
          make Australia the bars over to buy your portable online equipment
        </p>
      </div>
      <div class="image-wrapper">
        <img
          src="../assets/shared/desktop/image-best-gear.jpg"
          alt="Person enjoying audio gear"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.audio-gear {
  padding: 6rem 2rem;
  background: white;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.text {
  flex: 1 1 45%;
}

.text h2 {
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 1.5rem;
}

.text h2 span {
  color: #d87d4a;
}

.text p {
  color: #7d7d7d;
  line-height: 1.8;
}

.image-wrapper {
  flex: 1 1 45%;
}

.image-wrapper img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

/* Mobile responsive tweaks */
@media (max-width: 768px) {
  .container {
    flex-direction: column-reverse;
    text-align: center;
  }

  .text,
  .image-wrapper {
    flex: 1 1 100%;
  }
}
</style>
