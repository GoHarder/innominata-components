<script lang="ts">
  import '@material/web/chips/input-chip.js';
  import { onDestroy, onMount } from 'svelte';
  import { setSlots } from '../internal/lib.js';

  // MARK: Types
  // ------------------------------------------------
  import type { MdInputChip } from '@material/web/chips/input-chip.js';

  type Props = {
    /**
     * The child elements to render.
     *
     * Available slots:
     * - `icon`
     */
    children?: Function;
    avatar?: boolean;
    href?: string;
    target?: string;
    removeOnly?: boolean;
    selected?: boolean;
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
    avatar = false,
    href = '',
    target = '',
    removeOnly = false,
    selected = $bindable(false),
    disabled = false,
    alwaysFocusable = false,
    label = '',
    ...props
  }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdInputChip | undefined = $state();

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

<md-input-chip bind:this={component} {avatar} {href} {target} {removeOnly} {selected} {disabled} {alwaysFocusable} {label} {...props}>
  {@render children?.()}
</md-input-chip>
