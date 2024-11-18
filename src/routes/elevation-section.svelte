<script lang="ts">
  import Section from './section.svelte';
  import { Elevation } from "$lib/elevation/index.ts";

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
<h2>Elevations</h2>
{/snippet}

{#snippet supportingText()}
<p>Elevation is the relative distance between two surfaces along the z-axis.</p>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  <div class="surface-1">
    <Elevation />
    <p>Elevation</p>
  </div>
</Section>

<style>
  .surface-1 {
    position: relative;
    height: 64px;
    width: 100px;
    border-radius: 8px;
    --md-elevation-level: 3;

    display: grid;
    justify-items: center;
    align-items: center;

    transition-duration: 250ms;
    transition-timing-function: ease-in-out;
  }

  .surface-1:hover {
    --md-elevation-level: 0;
  }
</style>
