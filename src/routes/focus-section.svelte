<script lang="ts">
  import Section from './section.svelte';
  import { FocusRing } from "$lib/focus/index.ts";
  import { onMount } from 'svelte';

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

  let content: HTMLDivElement | undefined = $state();

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
  onMount(() => {
    if (!content) return;
    const targets = content.querySelectorAll<HTMLDivElement>('div.target');
    for (const target of targets) {
      target.tabIndex = 0;
    }
  });
</script>

{#snippet header()}
<h2>Focus rings</h2>
{/snippet}

{#snippet supportingText()}
<p>Focus rings are accessible outlines for components to show keyboard focus.</p>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  <div bind:this={content} class="hero">
    <div class="wrapper">
      <div class="target" >
        <FocusRing class="ring" />
        <p>Focus 1</p>
      </div>   
    </div>

    <div class="wrapper">
      <div class="target" >
        <FocusRing class="ring" />
        <p>Focus 2</p>
      </div> 
    </div>

    <div class="wrapper">
      <div class="target" >
        <FocusRing class="ring" />
        <p>Focus 3</p>
      </div> 
    </div>
  </div> 


  {#if expand}
  <h3>Usage</h3>
  <div class="wrapper">
    <div class="target">
      <FocusRing class="ring" />
      <p>Usage</p>
    </div>
  </div>

  <h3>Inward</h3>
  <div class="target">
    <FocusRing inward style="--md-focus-ring-shape: 8px" />
    <p>Focus</p>
    <p>Inward</p>
  </div>
{/if}
</Section>

<style lang="scss">
  .hero {
    display: flex;
    gap: 1em;
  }

  .wrapper {
    position: relative;
    display: flex;
  }

  :global(.ring) {
    --md-focus-ring-shape: 1em;
  }

  .target {
    height: 50px;
    width: 80px;
    background-color: var(--md-sys-color-surface-container-highest);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
  }
</style>