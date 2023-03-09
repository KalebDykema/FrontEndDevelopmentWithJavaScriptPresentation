<script>
export default {
  name: 'Home',
}
</script>

<template>
  <div :class="$style.home" class="container">
    <main>
      <section>
        <h3>This is my site!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
          voluptatem voluptas possimus. Eum laudantium, magnam voluptas veniam
          inventore aperiam. Neque excepturi iure odio praesentium nulla
          incidunt modi quam repellendus doloribus.
        </p>
      </section>

      <section>
        <h3>Section Explaining Something</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          cumque at ut harum vitae, alias sapiente aut reiciendis iure impedit
          repellendus placeat dolore veniam ea illum deserunt dignissimos ad
          totam.
        </p>
      </section>
    </main>

    <h1>Newsletter</h1>
  </div>
</template>

<style lang="scss" module>
.home {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  :global(main) {
    flex: 2;
    min-width: 30rem;
  }
}
</style>
