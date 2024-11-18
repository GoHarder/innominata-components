<script lang="ts">
  // MARK: Types
  // ------------------------------------------------
  // MARK: Components
  // ------------------------------------------------
  import Section from './section.svelte';
  import { Button } from "$lib/button/index.js"; 
  import { Icon } from "$lib/icon/index.js";

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
  let debug = $state(false)
  let expand = $state(false)

  // MARK: Contexts
  // ------------------------------------------------
  // MARK: Subscriptions
  // ------------------------------------------------
  // MARK: Reactive Rules
  // ------------------------------------------------
  // MARK: Events
  // ------------------------------------------------
  function onClick(index: number) {
    if (debug) console.log(index);
  }

  // MARK: Lifecycle
  // ------------------------------------------------
</script>

{#snippet header()}
<h2>Buttons</h2>
{/snippet}

{#snippet supportingText()}
<p>Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.</p>
{/snippet}

<Section bind:debug bind:expand {header} {supportingText} >
  {#if expand}
  <div class="hero">
    <Button variant="filled">Make Payment</Button>
  </div>
  <h3>Types</h3>
  {/if}

  <div class="button-grid">
    <Button onClick={()=>{onClick(1)}}>
      <Icon data-slot="icon">add</Icon>
      Elevated
    </Button>
    <Button onClick={()=>{onClick(2)}} variant="filled">Filled</Button>
    <Button onClick={()=>{onClick(3)}} variant="filled-tonal">Tonal</Button>
    <Button onClick={()=>{onClick(4)}} variant="outlined">Outlined</Button>
    <Button onClick={()=>{onClick(5)}} variant="text">Text</Button>
  </div>

  {#if expand}
  <h3>Usage</h3>
  <Button variant="outlined">Back</Button>
  <Button variant="filled">Complete</Button>

  <h3>Icon</h3>
  <Button variant="filled-tonal">
    <Icon data-slot="icon">send</Icon>
    Send
  </Button>
  <Button variant="filled" trailingIcon>
    <Icon data-slot="icon">open_in_new</Icon>
    Open
  </Button>

  <h3>Disabled</h3>
  <div class="button-grid">
    <Button disabled>Elevated</Button>
    <Button disabled variant="filled">Filled</Button>
    <Button disabled variant="filled-tonal">Tonal</Button>
    <Button disabled variant="outlined">Outlined</Button>
    <Button disabled variant="text">Text</Button>
  </div>
  {/if}
</Section>

<style>
  .hero {
    display: grid;
    width: 200px;
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(5, min-content);
    grid-template-rows: auto;
    gap: 8px;
    justify-items: center;
  }
</style>