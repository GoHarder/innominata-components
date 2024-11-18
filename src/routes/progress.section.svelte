<script lang="ts">
  import Section from './section.svelte';
  import { CircularProgress, LinearProgress } from '$lib/progress/index.ts';

  // MARK: Types
  // ------------------------------------------------
  type Frames = typeof lFrames;

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
  const lFrames = [
    { time: 2000 },
    { buffer: 0.1, indeterminate: false, time: 2200 },
    { buffer: 0.25, value: 0.1, time: 2400 },
    { buffer: 0.75, value: 0.25, time: 10000 },
    { buffer: 1, time: 19000 },
    { value: 1, time: 20000 },
    { time: -1 },
  ];

  // MARK: Variables
  // ------------------------------------------------
  let debug = $state(false);
  let expand = $state(false);

  let lStop = $state(false);
  let lUpdate = $state(0);
  let lRender = $state(0);

  let li = $state(false);
  let lb = $state(0);
  let lv = $state(0);

  let ci = $state(false);
  let cv = $state(0);

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
  <h2>Progress indicators</h2>
{/snippet}

{#snippet supportingText()}
  <div>
    <p>Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.</p>
    <p>They communicate an app's state and indicate available actions, such as wether users can navigate away from the current screen.</p>
  </div>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  <div class="hero">
    <CircularProgress indeterminate={ci} value={cv} />
    <LinearProgress indeterminate={li} buffer={lb} value={lv} />
    <!-- visible class="full-width" -->
  </div>
</Section>

<style>
  .hero {
    display: grid;
    gap: 12px;
    grid-template-columns: 48px 300px;
  }
</style>
