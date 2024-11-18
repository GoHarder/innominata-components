<script lang="ts">
  import Section from './section.svelte';
  import { Icon } from '$lib/icon/index.ts';
  import { IconButton } from '$lib/icon-button/index.ts';

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
  let selected = $state(false);

  // MARK: Contexts
  // ------------------------------------------------
  // MARK: Subscriptions
  // ------------------------------------------------
  // MARK: Reactive Rules
  // ------------------------------------------------
  // MARK: Events
  // ------------------------------------------------
  function onClick() {
    console.log('clicked');
  }

  // MARK: Lifecycle
  // ------------------------------------------------
</script>

{#snippet header()}
  <h2>Icon buttons</h2>
{/snippet}

{#snippet supportingText()}
  <p>Icon buttons help people take supplementary actions with a single tap.</p>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  {#if expand}
    <div class="hero">
      <IconButton on:click={onClick}>
        <Icon>arrow_back</Icon>
      </IconButton>
      <span>
        <IconButton on:click={onClick}>
          <Icon>favorite</Icon>
        </IconButton>
        <IconButton on:click={onClick}>
          <Icon>share</Icon>
        </IconButton>
        <IconButton on:click={onClick}>
          <Icon>more_vert</Icon>
        </IconButton>
      </span>
    </div>
    <h3>Usage</h3>
  {/if}

  <IconButton on:click={onClick}>
    <Icon>check</Icon>
  </IconButton>
  <IconButton variant="filled">
    <Icon>check</Icon>
  </IconButton>
  <IconButton variant="filled-tonal">
    <Icon>check</Icon>
  </IconButton>
  <IconButton variant="outlined">
    <Icon>check</Icon>
  </IconButton>

  {#if expand}
    <h3>Links</h3>
    <IconButton variant="outlined" href="https://learn.svelte.dev" target="_blank">
      <Icon>link</Icon>
    </IconButton>

    <h3>Toggle</h3>
    <IconButton variant="outlined" toggle bind:selected>
      <Icon>close</Icon>
      <Icon slot="selected">check</Icon>
    </IconButton>

    <IconButton toggle>
      <Icon>check</Icon>
    </IconButton>
    <IconButton variant="filled" toggle>
      <Icon>check</Icon>
    </IconButton>
    <IconButton variant="filled-tonal" toggle>
      <Icon>check</Icon>
    </IconButton>
  {/if}
</Section>

<style>
  .hero {
    display: flex;
    justify-content: space-between;
    min-width: 200px;
  }
</style>
