<script lang="ts">
  import Section from './section.svelte';
  import { Ripple } from "$lib/ripple/index.ts";

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
<h2>Ripples</h2>
{/snippet}

{#snippet supportingText()}
<div>
  <p>Ripples are state layers used to communicate the status of a component or interactive element.</p>
  <p>A state layer is a semi-transparent covering on an element that indicates its state.</p>
  <p>A layer can be applied to an entire element or in a circular shape.</p>
</div>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  <div class="target">
    <Ripple />
    <p>Ripple</p>
  </div>
</Section>

<style lang="scss">
  .target {
    position: relative;
    width: 75px;
    height: 75px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid var(--md-sys-color-outline-variant);

    p {
      margin: 0;
      padding: 0;
    }
  }
</style>
