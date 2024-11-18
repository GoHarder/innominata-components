<script lang="ts">
  import Section from './section.svelte';
  // MARK: Types
  // ------------------------------------------------
  // MARK: Components
  // ------------------------------------------------
  import { Icon } from '$lib/icon/index.ts';
  import { Slider } from '$lib/slider/index.ts';

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

  let value = $state(50);
  let valueStart = $state(20);
  let valueEnd = $state(60);

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
  <h2>Sliders</h2>
{/snippet}

{#snippet supportingText()}
  <p>Sliders allow users to make selections from a range of values.</p>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  <div class="hero">
    <div class="volume">
      <Icon style="grid-area: icon;">search</Icon>
      <label style="grid-area: label;" for="media-vol">Media volume</label>
      <Slider style="grid-area: slider;" id="media-vol" value={62} />
    </div>

    <div class="volume">
      <Icon style="grid-area: icon;">search</Icon>
      <label style="grid-area: label;" for="call-vol">Call Volume</label>
      <Slider style="grid-area: slider;" id="call-vol" value={52} />
    </div>
    <div class="volume">
      <Icon style="grid-area: icon;">notifications</Icon>
      <label style="grid-area: label;" for="ring-vol">Ring volume</label>
      <Slider style="grid-area: slider;" id="ring-vol" value={46} />
    </div>
    <div class="volume">
      <Icon style="grid-area: icon;">search</Icon>
      <label style="grid-area: label;" for="alarm-vol">Alarm volume</label>
      <Slider style="grid-area: slider;" id="alarm-vol" value={62} />
    </div>
  </div>

  {#if expand}
    <h3>Usage</h3>
    <Slider />
    <Slider ticks bind:value />
    <Slider range bind:valueStart bind:valueEnd />

    <h3>Continuous</h3>
    <Slider min={0} max={100} value={50} />

    <h3>Discrete</h3>
    <Slider step={5} ticks min={0} max={20} />

    <h3>Range</h3>
    <Slider range valueStart={25} valueEnd={50} />

    <h3>Value Label</h3>
    <Slider labeled />
  {/if}
</Section>

<style lang="scss">
  .volume {
    display: grid;
    grid-template-areas:
      'icon label'
      'icon slider';
    grid-template-columns: 24px 1fr;
    align-items: center;

    label {
      padding: 10px 0 0 18px;
    }
  }
</style>
