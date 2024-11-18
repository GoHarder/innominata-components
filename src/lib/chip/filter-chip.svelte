<script lang="ts">
  import '@material/web/chips/filter-chip.js';
  import { onDestroy, onMount } from 'svelte';
  import { setSlots } from '../internal/lib.ts';

  // MARK: Types
  // ------------------------------------------------
  import type { MdFilterChip } from '@material/web/chips/filter-chip.js';

  type Props = {
    /**
     * The child elements to render.
     *
     * Available slots:
     * - `icon`
     * - `selected-icon`
     */
    children?: Function;
    removable?: boolean;
    selected?: boolean;
    elevated?: boolean;
    href?: string;
    target?: string;
    /**
     * Whether or not the chip is disabled.
     * Disabled chips are not focusable, unless always-focusable is set.
     */
    disabled?: boolean;
    /**
     * When true, allow disabled chips to be focused with arrow keys.
     * Add this when a chip needs increased visibility when disabled.
     * See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
     */
    alwaysFocusable?: boolean;
    /** The label of the chip. */
    label?: string;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let {
    children,
    removable = false,
    selected = $bindable(false),
    elevated = false,
    href = '',
    target = '',
    disabled = false,
    alwaysFocusable = false,
    label = '',
    ...props
  }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdFilterChip | undefined = $state();

  // MARK: Effects
  // ------------------------------------------------
  $effect.pre(() => {
    setSlots(component);
  });

  // MARK: Events
  // ------------------------------------------------
  function onClick() {
    if (!component) return;
    selected = component.selected;
  }

  // MARK: Lifecycle
  // ------------------------------------------------
  onMount(() => {
    if (component && onClick) component.addEventListener('click', onClick);
  });

  onDestroy(() => {
    if (component && onClick) component.removeEventListener('click', onClick);
  });
</script>

<md-filter-chip bind:this={component} {removable} {selected} {elevated} {href} {target} {disabled} {alwaysFocusable} {label} {...props}>
  {@render children?.()}
</md-filter-chip>
