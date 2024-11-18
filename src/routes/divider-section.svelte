<script lang="ts">
  import Section from './section.svelte';
  import { Divider } from "$lib/divider/index.ts";
  import { List, ListItem } from "$lib/list/index.ts";

  // MARK: Types
  // ------------------------------------------------
  // MARK: Components
  // ------------------------------------------------
  // MARK: Stores
  // ------------------------------------------------
  // MARK: Properties
  // ------------------------------------------------
  // MARK: Methods
  // ------------------------------------------------
  // MARK: Constants
  // ------------------------------------------------
  // MARK: Variables
  // ------------------------------------------------
  let debug = $state(false);
  let expand = $state(false);

  // MARK: Contexts
  // ------------------------------------------------
  // MARK: Subscriptions
  // ------------------------------------------------
  // MARK: Reactive Rules
  // ------------------------------------------------
  // MARK: Events
  // ------------------------------------------------
  // MARK: Lifecycle
  // ------------------------------------------------
</script>

{#snippet header()}
<h2>Dividers</h2>
{/snippet}

{#snippet supportingText()}
<p>A divider is a thin line that groups content in lists and containers.</p>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  {#if expand}
    <div class="hero">
      <List>
        <ListItem>
          <img data-slot="start" alt="" class="hero-img" src="https://picsum.photos/seed/one/100/50" />
          <div data-slot="headline">A Year in Ecuador</div>
          <div data-slot="supporting-text">10 episodes</div>
          <div data-slot="trailing-supporting-text">68 min</div>
        </ListItem>
        <Divider inset />
        <ListItem>
          <img data-slot="start" alt="" class="hero-img" src="https://picsum.photos/seed/two/100/50" />
          <div data-slot="headline">Wizards & Winona</div>
          <div data-slot="supporting-text">86 episodes</div>
          <div data-slot="trailing-supporting-text">109 min</div>
        </ListItem>
        <Divider inset />
        <ListItem>
          <img data-slot="start" alt="" class="hero-img" src="https://picsum.photos/seed/three/100/50" />
          <div data-slot="headline">Gamer Course</div>
          <div data-slot="supporting-text">79 episodes</div>
          <div data-slot="trailing-supporting-text">57 min</div>
        </ListItem>
        <Divider inset />
        <ListItem>
          <img data-slot="start" alt="" class="hero-img" src="https://picsum.photos/seed/four/100/50" />
          <div data-slot="headline">Song Histories</div>
          <div data-slot="supporting-text">38 episodes</div>
          <div data-slot="trailing-supporting-text">46 min</div>
        </ListItem>
      </List>
    </div>
    <h3>Usage</h3>
  {/if}

  <p>Lorem ipsum...</p>
  <Divider />
  <p>Lorem ipsum...</p>

  {#if expand}
    <h3>Inset</h3>

    <p>Material 2</p>
    <Divider inset />
    <p>Material 3</p>
  {/if}
</Section>