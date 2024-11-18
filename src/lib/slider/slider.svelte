<script lang="ts">
  import '@material/web/slider/slider.js';
  import { onDestroy, onMount } from 'svelte';

  // MARK: Types
  // ------------------------------------------------
  import type { MdSlider } from '@material/web/slider/slider.js';

  type Props = {
    /** The slider minimum value. */
    min?: number;
    /** The slider maximum value. */
    max?: number;
    /** The slider value displayed when range is false. */
    value?: number;
    /** The slider start value displayed when range is true. */
    valueStart?: number;
    /** The slider end value displayed when range is true. */
    valueEnd?: number;
    /**
     * An optional label for the slider's value displayed when range is false;
     * if not set, the label is the value itself.
     */
    valueLabel?: string;
    /**
     * An optional label for the slider's start value displayed when range is true;
     * if not set, the label is the valueStart itself.
     */
    valueLabelStart?: string;
    /**
     * An optional label for the slider's end value displayed when range is true;
     * if not set, the label is the valueEnd itself.
     */
    valueLabelEnd?: string;
    /** Aria label for the slider's start handle displayed when range is true. */
    ariaLabelStart?: string;
    /** Aria value text for the slider's start value displayed when range is true. */
    ariaValueTextStart?: string;
    /** Aria label for the slider's end handle displayed when range is true. */
    ariaLabelEnd?: string;
    /** Aria value text for the slider's end value displayed when range is true. */
    ariaValueTextEnd?: string;
    /** The step between values. */
    step?: number;
    /** Whether or not to show tick marks. */
    ticks?: boolean;
    /** Whether or not to show a value label when activated. */
    labeled?: boolean;
    /**
     * Whether or not to show a value range.
     * When false, the slider displays a slide-able handle for the value property;
     * when true, it displays slide-able handles for the valueStart and valueEnd properties.
     */
    range?: boolean;
    disabled?: boolean;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let {
    min = 0,
    max = 100,
    value = $bindable(undefined),
    valueStart = $bindable(undefined),
    valueEnd = $bindable(undefined),
    valueLabel = '',
    valueLabelStart = '',
    valueLabelEnd = '',
    ariaLabelStart = '',
    ariaValueTextStart = '',
    ariaLabelEnd = '',
    ariaValueTextEnd = '',
    step = 1,
    ticks = false,
    labeled = false,
    range = false,
    disabled = false,
    ...props
  }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdSlider | undefined = $state();

  // MARK: Events
  // ------------------------------------------------
  function onChange() {
    if (!component) return;
    value = component.value;
    valueEnd = component.valueEnd;
    valueStart = component.valueStart;
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

<md-slider
  bind:this={component}
  {min}
  {max}
  {value}
  {valueStart}
  {valueEnd}
  {valueLabel}
  {valueLabelStart}
  {valueLabelEnd}
  {ariaLabelStart}
  {ariaValueTextStart}
  {ariaLabelEnd}
  {ariaValueTextEnd}
  {step}
  {ticks}
  {labeled}
  {range}
  {disabled}
  {...props}
></md-slider>
