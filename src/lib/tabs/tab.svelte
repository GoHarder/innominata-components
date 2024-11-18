<script lang="ts">
  import '@material/web/tabs/primary-tab.js';
  import '@material/web/tabs/secondary-tab.js';
  import { setSlots } from '../internal/lib.ts';

  // MARK: Types
  // ------------------------------------------------
  type Props = {
    /**
     * The child elements to render.
     *
     * Available slots:
     * - `icon`: The icon to render.
     */
    children: Function;
    /** Renders the tab as a secondary tab. */
    secondary?: boolean;
    /** Whether or not the icon renders inline with label or stacked vertically. */
    inlineIcon?: boolean;
    /**
     * The attribute `md-tab` indicates that the element is a tab for the parent element, `<md-tabs>`.
     * Make sure if you're implementing your own `md-tab` component that you have an `md-tab` attribute set.
     */
    isTab?: boolean;
    /** Whether or not the tab is selected. */
    active?: boolean;
    selected?: boolean;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { children, secondary = false, inlineIcon = false, isTab = true, active = false, selected = undefined, ...props }: Props = $props();

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

{#if !secondary}
  <md-primary-tab {inlineIcon} {isTab} {active} {selected} {...props}>
    {@render children()}
  </md-primary-tab>
{:else}
  <md-secondary-tab {isTab} {active} {selected} {...props}>
    {@render children()}
  </md-secondary-tab>
{/if}
