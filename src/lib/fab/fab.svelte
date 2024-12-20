<script lang="ts">
  import '@material/web/fab/branded-fab.js';
  import '@material/web/fab/fab.js';
  import { onDestroy, onMount } from 'svelte';
  import { setSlots } from '../internal/lib.js';

  // MARK: Types
  // ------------------------------------------------
  import type { MdFab } from '@material/web/fab/fab.js';
  import type { MdBrandedFab } from '@material/web/fab/branded-fab.js';

  type MdComp = MdFab | MdBrandedFab;

  type Props = {
    /**
     * The child elements to render.
     *
     * Available slots:
     * - `icon`: The icon to render.
     */
    children: Function;
    /** The on click event handler. */
    onClick?: (event: MouseEvent) => void;
    /** Whether or not the fab is branded. */
    branded?: boolean;
    /** The FAB color variant to render. */
    variant?: MdComp['variant'];
    /**
     * The size of the FAB.
     *
     * NOTE: Branded FABs cannot be sized to small, and Extended FABs do not have different sizes.
     */
    size?: MdComp['size'];
    /** The text to display on the FAB. */
    label?: string;
    /** Lowers the FAB's elevation. */
    lowered?: boolean;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { children, onClick, branded = false, variant = 'surface', size = 'medium', label = '', lowered = false, ...props }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdComp | undefined = $state();

  // MARK: Effects
  // ------------------------------------------------
  $effect.pre(() => {
    setSlots(component);
  });

  // MARK: Events
  // ------------------------------------------------
  // MARK: Lifecycle
  // ------------------------------------------------
  onMount(() => {
    if (component && onClick) component.addEventListener('click', onClick);
  });

  onDestroy(() => {
    if (component && onClick) component.removeEventListener('click', onClick);
  });
</script>

{#if branded}
  <md-branded-fab bind:this={component} {branded} {variant} {size} {label} {lowered} {...props}>
    {@render children()}
  </md-branded-fab>
{:else}
  <md-fab bind:this={component} {branded} {variant} {size} {label} {lowered} {...props}>
    {@render children()}
  </md-fab>
{/if}
