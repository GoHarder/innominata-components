<script lang="ts">
  import '@material/web/chips/assist-chip.js';
  import { setSlots } from "../internal/lib.ts";

  // MARK: Types
  // ------------------------------------------------
  import type { MdAssistChip } from '@material/web/chips/assist-chip.js';

  type Props = {
    /** The child elements to render. */
    children?: Function;
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
  let component: MdAssistChip | undefined = $state();

  // MARK: Effects
  // ------------------------------------------------
  $effect.pre(() => {
    setSlots(component);
  })  
</script>

<md-assist-chip bind:this={component} {elevated} {href} {target} {disabled} {label} {...props}>
  {@render children?.()}
</md-assist-chip>
