<script lang="ts">
  // Components
  import Section from './section.svelte';
  import { Divider } from "$lib/divider/index.js";
  import { Icon } from "$lib/icon/index.js";
  import { IconButton } from "$lib/icon-button/index.js";
  import { List, ListItem } from "$lib/list/index.js";

  // Stores
  // Properties
  // Methods
  // Constants
  // Variables
  let debug = $state(false);
  let expand = $state(false);

  // Contexts
  // Subscriptions
  // Reactive Rules
  // Events
  // Lifecycle
</script>

{#snippet header()}
<h2>Lists</h2>
{/snippet}

{#snippet supportingText()}
<p>Lists are continuous, vertical indexes of text and images.</p>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  <List>
    <ListItem>
      <img data-slot="start" alt="" class="hero-img" src="https://picsum.photos/seed/one/48/48" />
      <div data-slot="headline">Fresh baked breads</div>
      <IconButton data-slot="end">
        <Icon>more_horiz</Icon>
      </IconButton>
    </ListItem>
    <Divider />
    <ListItem>
      <img data-slot="start" alt="" class="hero-img" src="https://picsum.photos/seed/two/48/48" />
      <div data-slot="headline">Tacos</div>
      <IconButton data-slot="end">
        <Icon>more_horiz</Icon>
      </IconButton>
    </ListItem>
    <Divider />
    <ListItem>
      <img data-slot="start" alt="" class="hero-img" src="https://picsum.photos/seed/three/48/48" />
      <div data-slot="headline">Salads</div>
      <IconButton data-slot="end">
        <Icon>more_horiz</Icon>
      </IconButton>
    </ListItem>
  </List>

  {#if expand}
    <h3>Usage</h3>
    <List style="max-width: 300px;">
      <ListItem>Fruits</ListItem>
      <Divider />
      <ListItem>Apple</ListItem>
      <ListItem>
        <div data-slot="headline">Banana</div>
        <div data-slot="supporting-text">Banana is a yellow fruit</div>
      </ListItem>
      <ListItem>
        <div data-slot="headline">Cucumber</div>
        <div data-slot="supporting-text">Cucumbers are long green fruits that are just as long as this multi-line description</div>
      </ListItem>
      <ListItem type="link" href="https://google.com/search?q=buy+kiwis&tbm=shop" target="_blank">
        <div data-slot="headline">Shop for Kiwis</div>
        <div data-slot="supporting-text">This will link you out in a new tab</div>
        <Icon data-slot="end">open_in_new</Icon>
      </ListItem>
    </List>

    <h3>Icon Items</h3>
    <List>
      <ListItem>
        <svg data-slot="start" style="height: 24px" viewBox="0 0 160 200">
          <path
            fill="currentColor"
            d="m160 80v80l-40-40zm-40 40v80l40-40zm0-80v80l-40-40zm-40 40v80l40-40zm-40-40v80l40-40zm40-40v80l-40-40zm-40 120v80l-40-40zm-40-40v80l40-40z"
          />
        </svg>
        Lit
      </ListItem>
      <Divider />
      <ListItem>
        <Icon data-slot="start">polymer</Icon>
        Polymer
      </ListItem>
      <Divider />
      <ListItem>
        Angular
        <svg data-slot="start" style="height: 24px" viewBox="0 0 250 250">
          <polygon points="108,135.4 125,135.4 125,135.4 125,135.4 142,135.4 125,94.5   " />
          <path
            d="M125,30L125,30L125,30L31.9,63.2l14.2,123.1L125,230l0,0l0,0l78.9-43.7l14.2-123.1L125,30z M183.1,182.6h-21.7h0
            l-11.7-29.2H125h0h0h-24.7l-11.7,29.2h0H66.9h0L125,52.1l0,0l0,0l0,0l0,0L183.1,182.6L183.1,182.6z"
          />
        </svg>
      </ListItem>
    </List>

    <h3>Image Items</h3>
    <List style="max-width: 300px;">
      <ListItem>
        Cat
        <img data-slot="start" alt="Cat" style="width: 56px" src="https://placekitten.com/112/112" />
      </ListItem>
      <Divider />
      <ListItem>
        Kitty Cat
        <img data-slot="start" alt="Kitty Cat" style="width: 56px" src="https://placekitten.com/114/114" />
      </ListItem>
      <Divider />
      <ListItem>
        Cate
        <img data-slot="start" alt="Cate" style="width: 56px" src="https://placekitten.com/116/116" />
      </ListItem>
    </List>
  {/if}
</Section>
