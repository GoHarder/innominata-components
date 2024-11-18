<script lang="ts">
  import '@material/web/switch/switch.js';
  import { onDestroy, onMount } from 'svelte';

  // MARK: Types
  // ------------------------------------------------
  import type { MdSwitch } from '@material/web/switch/switch.js';

  type Props = {
    /** Puts the switch in the selected state and sets the form submission value to the value property. */
    selected?: boolean;
    /** Shows both the selected and deselected icons. */
    icons?: boolean;
    /**
     * Shows only the selected icon, and not the deselected icon.
     * If true, overrides the behavior of the icons property.
     */
    showOnlySelectedIcon?: boolean;
    /**
     * When true, require the switch to be selected when participating in form submission.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation)
     */
    required?: boolean;
    /**
     * The value associated with this switch on form submission.
     * `null` is submitted when selected is false.
     */
    value?: string;
    disabled?: boolean;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { selected = $bindable(false), icons = false, showOnlySelectedIcon = false, required = false, value = $bindable('on'), disabled = false, ...props }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdSwitch | undefined = $state();

  // MARK: Events
  // ------------------------------------------------
  function onChange() {
    if (!component) return;
    selected = component.selected;
    value = component.value;
  }

  // MARK: Lifecycle
  // ------------------------------------------------
  onMount(() => {
    if (component) component.addEventListener('change', onChange);
  });

  onDestroy(() => {
    if (component) component.removeEventListener('change', onChange);
  });
</script>

<md-switch bind:this={component} {selected} {icons} {showOnlySelectedIcon} {required} {value} {disabled} {...props}></md-switch>
