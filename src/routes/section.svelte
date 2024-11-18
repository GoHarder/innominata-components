<script lang="ts">
  // MARK: Types
  // ------------------------------------------------
  type Props = {
    children: Function;
    header: Function;
    supportingText: Function;
    expand?: boolean;
    debug?: boolean;
  };

  // MARK: Components
  // ------------------------------------------------
  import { Elevation } from '$lib/elevation/index.js';
  import { Icon } from '$lib/icon/index.js';
  import { IconButton } from '$lib/icon-button/index.js';

  // MARK: Stores
  // ------------------------------------------------
  // MARK: Properties
  // ------------------------------------------------
  let { children, header, supportingText, expand = $bindable(false), debug = $bindable(false) }: Props = $props();

  // MARK: Methods
  // ------------------------------------------------
  // MARK: Constants
  // ------------------------------------------------
  // MARK: Variables
  // ------------------------------------------------
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

<section>
  <Elevation />
  <header>
    <div id="row-1">
      {@render header()}
      <div>
        <IconButton bind:selected={debug} toggle>
          <Icon>bug_report</Icon>
        </IconButton>
        <IconButton bind:selected={expand} toggle>
          <Icon>expand_all</Icon>
          <Icon data-slot="selected">collapse_all</Icon>
        </IconButton>
      </div>
    </div>
    {#if expand}
      {@render supportingText?.()}
    {/if}
  </header>
  <div id="content">
    {@render children()}
  </div>
</section>

<style lang="scss">
  section {
    // Variables
    --md-elevation-level: 1;
    // Layout
    position: relative;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 8px;
    max-width: 900px;
    width: max-content;
    // Appearance
    // background-color: var(--md-sys-color-surface-container-low);
    background-color: var(--md-sys-color-surface-container-high);
    // Other
    border-radius: var(--md-sys-shape-corner-extra-large);
  }

  header {
    // Layout
    padding: 12px 16px;
    width: 100%;
    // Appearance
    color: var(--md-sys-color-on-surface);
  }

  #row-1 {
    // Layout
    display: flex;
    align-items: center;
    justify-content: space-between;

    :global(h2) {
      // Layout
      margin: 0;
      // Text
      font: var(--md-sys-typescale-title-medium);
      // Appearance
      color: var(--md-sys-color-on-surface);
    }

    div {
      margin-left: 12px;
    }
  }

  #content {
    // Layout
    align-self: stretch;
    min-height: 20px;
    padding: 12px 16px;

    // Appearance
    // background-color: var(--md-sys-color-surface-container-high);
    background-color: var(--md-sys-color-surface-container);

    // Other
    border-radius: 12px;

    :global(h3) {
      // Text
      font: var(--md-sys-typescale-title-small);
    }
  }
</style>
