<script lang="ts">
  import '@material/web/select/select-option.js';
  import { setSlots } from "../internal/lib.ts";

  // MARK: Types
  // ------------------------------------------------
  import type { MdSelectOption } from "@material/web/select/select-option.js";

  type Props = {
    /** 
     * The children dom content.
     * 
     * Available slots:
     * - default
     * - end
     * - headline
     * - overline
     * - start
     * - supporting-text
     * - trailing-supporting-text    
     */
    children: Function;
    /** Disables the item and makes it non-selectable and non-interactive. */
    disabled?: boolean;
    /** Sets the item in the selected visual state when a submenu is opened. */
    selected?: boolean;
    /** Form value of the option. */
    value: string;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { 
    children, 
    disabled = false, 
    selected = false, 
    value = '' 
  }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdSelectOption | undefined = $state();

  // MARK: Effects
  // ------------------------------------------------
  $effect.pre(() => {
    setSlots(component);
  })  
</script>

<md-select-option bind:this={component} {disabled} {selected} {value}>
  {@render children?.()}
</md-select-option>
