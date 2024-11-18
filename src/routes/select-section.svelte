<script lang="ts">
  import Section from './section.svelte';
  import { Option, Select } from '$lib/select/index.ts';

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

  let value1 = $state('');
  let value2 = $state('');

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
  <h2>Select</h2>
{/snippet}

{#snippet supportingText()}
  <p>Select menus display a list of choices on temporary surfaces and display the currently selected menu item above the menu.</p>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  <Select label="Label" bind:value={value1} outlined>
    <Option value="1">
      <div data-slot="headline">Item 1</div>
    </Option>
    <Option value="2">
      <div data-slot="headline">Item 2</div>
    </Option>
    <Option value="3">
      <div data-slot="headline">Item 3</div>
    </Option>
  </Select>

  {#if expand}
    <h3>Required</h3>
    <Select label="Label" bind:value={value2} required>
      <Option value="1">
        <div data-slot="headline">Item 1</div>
      </Option>
      <Option value="2">
        <div data-slot="headline">Item 2</div>
      </Option>
    </Select>
  {/if}
</Section>

<!-- <style>
</style> -->
