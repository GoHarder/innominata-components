<script lang="ts">
  import '@material/web/radio/radio.js';
  import { onDestroy, onMount } from 'svelte';

  // MARK: Types
  // ------------------------------------------------
  import type { MdRadio } from '@material/web/radio/radio.js';

  type Props = {
    /**
     * Whether or not the radio is required.
     * If any radio is required in a group, all radios are implicitly required.
     */
    required?: boolean;
    /** The element value to use in form submission when checked. */
    value?: string;
    /** Whether or not the radio is checked. */
    checked?: boolean;
    /** Whether or not the radio is disabled. */
    disabled?: boolean;
    /** The name of the radio group. */
    name?: string;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { required = false, value = 'on', checked = $bindable(), disabled = undefined, name = undefined, ...props }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdRadio | undefined = $state();

  // MARK: Events
  // ------------------------------------------------
  function onChange() {
    if (!component) return;
    checked = component.checked;
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

<md-radio bind:this={component} {required} {value} {checked} {disabled} {name} {...props}></md-radio>
