<script lang="ts">
  // MARK: Types
  // ------------------------------------------------
  // MARK: Components
  // ------------------------------------------------
  import Section from './section.svelte';
  import { Switch } from '$lib/switch/index.ts';

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
  <h2>Switches</h2>
{/snippet}

{#snippet supportingText()}
  <p>Switches toggle the state of a single item on or off.</p>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  <div class="hero">
    <p>General</p>
    <div class="switch">
      <label for="wifi-switch">Wi-Fi</label>
      <Switch id="wifi-switch" selected icon showOnlySelectedIcon />
    </div>
    <div class="switch">
      <label for="bluetooth-switch">Bluetooth</label>
      <Switch id="bluetooth-switch" icon showOnlySelectedIcon />
    </div>
  </div>

  {#if expand}
    <h3>Usage</h3>
    <Switch />
    <Switch selected />

    <h3>Icons</h3>
    <Switch icons />
    <Switch icons selected />

    <Switch icons showOnlySelectedIcon />
    <Switch icons showOnlySelectedIcon selected />

    <h3>Label</h3>
    <label for="switch">Bluetooth</label>
    <Switch id="switch" />
  {/if}
</Section>

<style lang="scss">
  .hero {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > p {
      padding: 0;
      margin: 0;
    }

    > .switch {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
  }
</style>
