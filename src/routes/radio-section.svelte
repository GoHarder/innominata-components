<script lang="ts">
  import Section from './section.svelte';
  import { Radio } from "$lib/radio/index.ts";

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
  let test = $state(false);

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
<h2>Radio buttons</h2>
{/snippet}

{#snippet supportingText()}
<div>
  <p>Radio buttons allow users to select one option from a set.</p>
  <p>They're a selection control that often appears when users are asked to make decisions for select a choice from options.</p>
</div>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  <form class="hero">
    <Radio bind:checked={test} id="ring-none" name="ringtone" value="none" />
    <label for="ring-none">None</label>

    <Radio bind:checked={test} id="ring-callisto" name="ringtone" value="callisto" />
    <label for="ring-callisto">Callisto</label>

    <Radio bind:checked={test} id="ring-ganymede" name="ringtone" value="ganymede" />
    <label for="ring-ganymede">Ganymede</label>

    <Radio bind:checked={test} id="ring-luna" name="ringtone" value="luna" />
    <label for="ring-luna">Luna</label>
  </form>

  {#if expand}
    <h3>Usage</h3>
    <form>
      <Radio name="animals" value="cats" />
      <Radio name="animals" value="dogs" />
      <Radio name="animals" value="birds" checked />
    </form>

    <h3>Label</h3>
    <form>
      <md-radio id="cats-radio" name="animals" value="cats"></md-radio>
      <label for="cats-radio">Cats</label>

      <md-radio id="dogs-radio" name="animals" value="dogs"></md-radio>
      <label for="dogs-radio">Dogs</label>
    </form>
  {/if}
</Section>

<style>
  .hero {
    display: grid;
    grid-template-columns: 20px max-content;
    gap: 10px;
    /* width: 100%; */
  }
</style>
