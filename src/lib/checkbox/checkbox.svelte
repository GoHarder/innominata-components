<!--
  @component
  TODO: Add markdown link to the component documentation
-->

<script lang="ts">
  import '@material/web/checkbox/checkbox.js';
  import { genId } from '../internal/lib.js';

  // MARK: Types
  // ------------------------------------------------
  import type { MdCheckbox } from '@material/web/checkbox/checkbox.js';

  type Props = {
    id?: string;
    /** Whether or not the checkbox is selected. */
    checked?: boolean;
    /** Whether or not the checkbox is disabled. */
    disabled?: boolean;
    /**
     * Whether or not the checkbox is indeterminate.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)
     */
    indeterminate?: boolean;
    /**
     * When true, require the checkbox to be selected when participating in form submission.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation)
     */
    required?: boolean;
    /**
     * The value of the checkbox that is submitted with a form when selected.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value)
     */
    value?: string;
    name?: string;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let {
    id = genId('checkbox'),
    checked = $bindable(false),
    disabled = false,
    indeterminate = false,
    required = false,
    value = 'on',
    name = undefined,
    ...props
  }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdCheckbox | undefined = $state();

  // MARK: Events
  // ------------------------------------------------
  function onChange() {
    if (!component) return;
    checked = component.checked;
  }
</script>

<md-checkbox bind:this={component} onchange={onChange} {id} {checked} {disabled} {indeterminate} {required} {value} {name} {...props}></md-checkbox>
