<script lang="ts" module>
  let context = false;
  let reducedMotion: boolean | undefined = undefined;
  let style: SvelteContext['style']['select'] = undefined;
</script>

<script lang="ts">
  import '@material/web/select/filled-select.js';
  import '@material/web/select/outlined-select.js';
  import { getContext, onDestroy, onMount } from 'svelte';

  // MARK: Types
  // ------------------------------------------------
  import type { Select } from '@material/web/select/internal/select.js';
  import type { SvelteContext } from '../internal/lib.js';

  type Props = {
    /** The child elements to render. */
    children?: Function;
    outlined?: boolean;
    /** Opens the menu synchronously with no animation. */
    quick?: boolean;
    /** Whether or not the select is required. */
    required?: boolean;
    /**
     * The error message that replaces supporting text when `error` is true.
     * If `errorText` is an empty string, then the supporting text will continue to show.
     * This error message overrides the error message displayed by `reportValidity()`.
     */
    errorText?: string;
    /** The floating label for the field. */
    label: string;
    /** Disables the asterisk on the floating label, when the select is required. */
    noAsterisk?: boolean;
    /** Conveys additional information below the select, such as how it should be used. */
    supportingText?: string;
    /**
     * Gets or sets whether or not the select is in a visually invalid state.
     * This error state overrides the error state controlled by `reportValidity()`.
     */
    error?: boolean;
    /**
     * Whether or not the underlying md-menu should be position: fixed to display in a top-level manner, or position: absolute.
     * position: fixed is useful for cases where select is inside of another element with stacking context and hidden overflows such as `md-dialog`.
     */
    menuPositioning?: Select['menuPositioning'];
    /** Clamps the menu-width to the width of the select. */
    clampMenuWidth?: boolean;
    /** The max time between the keystrokes of the typeahead select / menu behavior before it clears the typeahead buffer. */
    typeaheadDelay?: number;
    /** Whether the menu should be aligned to the start or the end of the select's textbox. */
    menuAlign?: Select['menuAlign'];
    value?: string;
    selectedIndex?: number;
  };

  // MARK: Properties
  // ------------------------------------------------
  let {
    children,
    outlined = false,
    quick = false,
    required = false,
    errorText = '',
    label = '',
    noAsterisk = false,
    supportingText = '',
    error = false,
    menuPositioning = 'popover',
    clampMenuWidth = false,
    typeaheadDelay = 200,
    menuAlign = 'start',
    value = $bindable(undefined),
    selectedIndex = $bindable(undefined),
  }: Props = $props();
  // MARK: State
  // ------------------------------------------------
  let component: Select | undefined = $state();

  // MARK: Contexts
  // ------------------------------------------------
  if (!context) {
    style = getContext<SvelteContext['style']>('style')?.select;
    reducedMotion = getContext('reducedMotion');
    context = true;
  }

  if (reducedMotion) quick = true;

  if (style?.variant !== undefined) outlined = style.variant === 'outlined';

  // MARK: Events
  // ------------------------------------------------
  async function onChange() {
    if (!component) return;
    await component.getUpdateComplete();
    value = component.value;
    selectedIndex = component.selectedIndex;
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

{#if outlined}
  <md-outlined-select
    bind:this={component}
    {quick}
    {required}
    {errorText}
    {label}
    {noAsterisk}
    {supportingText}
    {error}
    {menuPositioning}
    {clampMenuWidth}
    {typeaheadDelay}
    {menuAlign}
    {value}
  >
    {@render children?.()}
  </md-outlined-select>
{:else}
  <md-filled-select
    bind:this={component}
    {quick}
    {required}
    {errorText}
    {label}
    {noAsterisk}
    {supportingText}
    {error}
    {menuPositioning}
    {clampMenuWidth}
    {typeaheadDelay}
    {menuAlign}
    {value}
  >
    {@render children?.()}
  </md-filled-select>
{/if}

<style>
</style>
