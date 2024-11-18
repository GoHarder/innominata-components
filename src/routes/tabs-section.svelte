<script lang="ts">
  // MARK: Types
  // ------------------------------------------------
  // MARK: Components
  // ------------------------------------------------
  import Section from './section.svelte';
  import { Icon } from '$lib/icon/index.ts';
  import { Tab, Tabs } from '$lib/tabs/index.ts';

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

  let index = $state(0);

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
  <h2>Tabs</h2>
{/snippet}

{#snippet supportingText()}
  <p>Tabs organize and support navigation between groups of related content at the same level of hierarchy.</p>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  <div class="hero">
    <Tabs aria-label="Content to view" bind:activeTabIndex={index}>
      <Tab id="videos-tab" aria-controls="videos-panel">
        <Icon data-slot="icon">videocam</Icon>
        Videos
      </Tab>
      <Tab id="photos-tab" aria-controls="photos-panel">
        <Icon data-slot="icon">image</Icon>
        Photos
      </Tab>

      <Tab id="audio-tab" aria-controls="music-panel">
        <Icon data-slot="icon">music_note</Icon>
        Audio
      </Tab>
    </Tabs>
    <div class="panel" id="videos-panel" role="tabpanel" aria-labelledby="videos-tab" hidden={index !== 0}>
      <p>Video Panel</p>
    </div>
    <div class="panel" id="photos-panel" role="tabpanel" aria-labelledby="photos-tab" hidden={index !== 1}>
      <p>Photos Panel</p>
    </div>
    <div class="panel" id="audio-panel" role="tabpanel" aria-labelledby="music-tab" hidden={index !== 2}>
      <p>Audio Panel</p>
    </div>

    {#if expand}
      <h3>Usage</h3>
      <Tabs>
        <Tab>Videos</Tab>
        <Tab>Photos</Tab>
        <Tab>Audio</Tab>
      </Tabs>

      <Tabs>
        <Tab secondary>Birds</Tab>
        <Tab secondary>Cats</Tab>
        <Tab secondary>Dogs</Tab>
      </Tabs>

      <h3>Selection</h3>
      <Tabs>
        <Tab>Video</Tab>
        <Tab active>Photos</Tab>
        <Tab>Audio</Tab>
      </Tabs>

      <h3>Icons</h3>
      <Tabs>
        <Tab>
          <Icon data-slot="icon">piano</Icon>
          Keyboard
        </Tab>
        <Tab>
          <Icon data-slot="icon">tune</Icon>
          Guitar
        </Tab>
      </Tabs>
      <Tabs>
        <Tab>
          <Icon data-slot="icon">piano</Icon>
        </Tab>
        <Tab>
          <Icon data-slot="icon">tune</Icon>
        </Tab>
      </Tabs>
      <h3>Inline icons</h3>
      <Tabs>
        <Tab inlineIcon>
          <Icon data-slot="icon">piano</Icon>
          Keyboard
        </Tab>
        <Tab inlineIcon>
          <Icon data-slot="icon">tune</Icon>
          Guitar
        </Tab>
      </Tabs>
    {/if}
  </div>
</Section>

<style>
  .panel {
    min-width: 300px;
  }
</style>
