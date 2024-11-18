<script lang="ts">
  import Section from './section.svelte';
  import { Icon } from "$lib/icon/index.ts";
  import { Fab } from "$lib/fab/index.ts";

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
  function onClick() {
    console.log('onClick');
  }

  // MARK: Lifecycle
  // ------------------------------------------------
</script>

{#snippet header()}
<h2>Floating action buttons (FAB)</h2>
{/snippet}

{#snippet supportingText()}
<div>
  <p>FABs help people take primary actions.</p>
  <p>They're used to represent the most important action on a screen.</p>
</div>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  {#if expand}
  <Fab onClick={onClick}> 
    <Icon data-slot="icon">edit</Icon>
  </Fab>

  <h3>Lowered</h3>
  <Fab lowered>
    <Icon data-slot="icon">edit</Icon>
  </Fab>

  <h3>Label</h3>
  <Fab label="Edit"> 
    <Icon data-slot="icon">edit</Icon>
  </Fab>

  <h3>Color</h3>
  {/if}

  <Fab>
    <Icon data-slot="icon">edit</Icon>
  </Fab>
  <Fab variant="primary">
    <Icon data-slot="icon">edit</Icon>
  </Fab>
  <Fab variant="secondary">
    <Icon data-slot="icon">edit</Icon>
  </Fab>
  <Fab variant="tertiary">
    <Icon data-slot="icon">edit</Icon>
  </Fab>

  {#if expand}
  <h3>Sizes</h3>
  <Fab size="small">
    <Icon data-slot="icon">edit</Icon>
  </Fab>
  <Fab size="medium">
    <Icon data-slot="icon">edit</Icon>
  </Fab>
  <Fab size="large">
    <Icon data-slot="icon">edit</Icon>
  </Fab>

  <h3>Branded</h3>
  <Fab branded>
    <svg data-slot="icon" viewBox="0 0 36 36">
      <path fill="#34A853" d="M16 16v14h4V20z" />
      <path fill="#4285F4" d="M30 16H20l-4 4h14z" />
      <path fill="#FBBC05" d="M6 16v4h10l4-4z" />
      <path fill="#EA4335" d="M20 16V6h-4v14z" />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  </Fab>

  <h3>Extended</h3>
  <Fab branded label="Add">
    <svg data-slot="icon" viewBox="0 0 36 36">
      <path fill="#34A853" d="M16 16v14h4V20z" />
      <path fill="#4285F4" d="M30 16H20l-4 4h14z" />
      <path fill="#FBBC05" d="M6 16v4h10l4-4z" />
      <path fill="#EA4335" d="M20 16V6h-4v14z" />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  </Fab>

  <h3>Sizes</h3>
  <Fab branded>
    <svg data-slot="icon" viewBox="0 0 36 36">
      <path fill="#34A853" d="M16 16v14h4V20z" />
      <path fill="#4285F4" d="M30 16H20l-4 4h14z" />
      <path fill="#FBBC05" d="M6 16v4h10l4-4z" />
      <path fill="#EA4335" d="M20 16V6h-4v14z" />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  </Fab>

  <Fab branded size="large">
    <svg data-slot="icon" viewBox="0 0 36 36">
      <path fill="#34A853" d="M16 16v14h4V20z" />
      <path fill="#4285F4" d="M30 16H20l-4 4h14z" />
      <path fill="#FBBC05" d="M6 16v4h10l4-4z" />
      <path fill="#EA4335" d="M20 16V6h-4v14z" />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  </Fab>
  {/if}
</Section>

<!-- <style>
</style> -->
