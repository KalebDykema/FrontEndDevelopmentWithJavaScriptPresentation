<script>
export default {
  name: 'Home',
}
</script>

<template>
  <div :class="$style.about" class="container">
    <main>
      <h3>About</h3>
      <div>
        <img
          src="/GordonFreeman.jpg"
          alt="picture of man with long red hair"
          width="200"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
          voluptatem voluptas possimus. Eum laudantium, magnam voluptas veniam
          inventore aperiam. Neque excepturi iure odio praesentium nulla
          incidunt modi quam repellendus doloribus.
        </p>
      </div>
    </main>

    <section>
      <h3>Lorem, ipsum dolor.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cumque at
        ut harum vitae, alias sapiente aut reiciendis iure impedit repellendus
        placeat dolore veniam ea illum deserunt dignissimos ad totam.
      </p>
    </section>
  </div>
</template>

<style lang="scss" module>
.about {
  :global(main div) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
}
</style>
