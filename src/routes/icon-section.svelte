<script lang="ts">
  import Section from './section.svelte';
  import { Icon } from '$lib/icon/index.ts';

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
<h2>Icons</h2>
{/snippet}

{#snippet supportingText()}
<p>Icons can be used to represent common actions.</p>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  <Icon>settings</Icon>
  <Icon>check_box</Icon>
  <Icon>home</Icon>
</Section>
