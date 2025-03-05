<script lang="ts" module>
  let context = false;
  let style: StyleContext['textField'];
</script>

<script lang="ts">
  import { getContext } from 'svelte';
  import '@material/web/textfield/filled-text-field.js';
  import '@material/web/textfield/outlined-text-field.js';
  import { setSlots, type StyleContext } from '../internal/lib.js';

  // MARK: Types
  // ------------------------------------------------
  import { MdFilledTextField } from '@material/web/textfield/filled-text-field.js';
  import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field.js';

  type MdComp = MdFilledTextField | MdOutlinedTextField;

  type Props = {
    /**
     * The child elements to render.
     *
     * Available slots:
     * - `leading-icon`: The leading icon to render.
     * - `trailing-icon`: The trailing icon to render.
     */
    children?: Function;
    /** Render an outlined text input. */
    outlined?: boolean;
    /**
     * Gets or sets whether or not the text field is in a visually invalid state.
     * This error state overrides the error state controlled by `reportValidity()`.
     */
    error?: boolean;
    /**
     * The error message that replaces supporting text when `error` is true.
     * If `errorText` is an empty string, then the supporting text will continue to show.
     * This error message overrides the error message displayed by `reportValidity()`.
     */
    errorText?: string;
    /**
     * The floating Material label of the textfield component.
     * It informs the user about what information is requested for a text field.
     * It is aligned with the input text, is always visible, and it floats when focused or when text is entered into the textfield.
     * This label also sets accessibility labels, but the accessible label is overridden by `aria-label`.
     *
     * Learn more about floating labels from the Material Design guidelines:
     * [Link](https://m3.material.io/components/text-fields/guidelines)
     */
    label?: string;
    /** Disables the asterisk on the floating label, when the text field is required. */
    noAsterisk?: boolean;
    /**
     * Indicates that the user must specify a value for the input before the owning form can be submitted and will render an error state when `reportValidity()` is invoked when value is empty.
     * Additionally the floating label will render an asterisk `"*"` when true.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required)
     */
    required?: boolean;
    /** The current value of the text field. It is always a string. */
    value?: string;
    /** The current value of the text field as a number.  */
    valueAsNumber?: number;
    /** An optional prefix to display before the input value. */
    prefixText?: string;
    /** An optional suffix to display after the input value. */
    suffixText?: string;
    /** Conveys additional information below the text field, such as how it should be used. */
    supportingText?: string;
    /**
     * Override the input text CSS `direction`.
     * Useful for RTL languages that use LTR notation for fractions.
     */
    textDirection?: 'ltr' | 'rtl' | '';
    /**
     * The number of rows to display for a `type="textarea"` text field.
     * Defaults to 2.
     */
    rows?: number;
    /**
     * The number of cols to display for a `type="textarea"` text field.
     * Defaults to 20.
     */
    cols?: number;
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | '';
    /**
     * Defines the greatest value in the range of permitted values.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max)
     */
    max?: string;
    /**
     * The maximum number of characters a user can enter into the text field.
     * Set to -1 for none.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength)
     */
    maxLength?: number;
    /**
     * Defines the most negative value in the range of permitted values.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min)
     */
    min?: string;
    /**
     * The minimum number of characters a user can enter into the text field.
     * Set to -1 for none.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength)
     */
    minLength?: number;
    /** When true, hide the spinner for `type="number"` text fields. */
    noSpinner?: boolean;
    /**
     * A regular expression that the text field's value must match to pass constraint validation.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern)
     */
    pattern?: string;
    /**
     * Defines the text displayed in the textfield when it has no value.
     * Provides a brief hint to the user as to the expected type of data that should be entered into the control.
     * Unlike `label`, the placeholder is not visible and does not float when the textfield has a value.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder)
     */
    placeholder?: string;
    /**
     * Indicates whether or not a user should be able to edit the text field's value.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly)
     */
    readOnly?: boolean;
    /**
     * Indicates that input accepts multiple email addresses.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple)
     */
    multiple?: boolean;
    /**
     * Returns or sets the element's step attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step)
     */
    step?: string;
    /**
     * The `<input>` type to use, defaults to "text".
     * The type greatly changes how the text field behaves.
     *
     * Text fields support a limited number of `<input>` types:
     *
     * - `text`
     * - `textarea`
     * - `email`
     * - `number`
     * - `password`
     * - `search`
     * - `tel`
     * - `url`
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
     */
    type?: MdComp['type'];
    /**
     * Describes what, if any, type of autocomplete functionality the input should provide.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
     */
    autocomplete?: string;
    disabled?: boolean;
    name?: string;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let {
    children,
    outlined = false,
    error = false,
    errorText = '',
    label = '',
    noAsterisk = false,
    required = false,
    value = $bindable(''),
    valueAsNumber = $bindable(),
    prefixText = '',
    suffixText = '',
    supportingText = '',
    textDirection = '',
    rows = 2,
    cols = 20,
    inputMode = '',
    max = '',
    maxLength = -1,
    min = '',
    minLength = -1,
    noSpinner = false,
    pattern = '',
    placeholder = '',
    readOnly = false,
    multiple = false,
    step = '',
    type = 'text',
    autocomplete = '',
    disabled = false,
    name = '',
    ...props
  }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdComp | undefined = $state();

  // MARK: Effects
  // ------------------------------------------------
  $effect(() => {
    if (!(type === 'number')) return;
    value = `${valueAsNumber}`;
  });

  $effect.pre(() => {
    setSlots(component);
  });

  // MARK: Contexts
  // ------------------------------------------------
  if (!context) {
    style = getContext<StyleContext>('style')?.textField;
    context = true;
  }

  if (style) {
    noAsterisk = style.noAsterisk || noAsterisk;
    outlined = style.variant === 'outlined' || outlined;
    noSpinner = style.noSpinner || noSpinner;
  }

  // MARK: Events
  // ------------------------------------------------
  function oninput(event: InputEvent) {
    const inputType = outlined ? MdOutlinedTextField : MdFilledTextField;
    if (!(event.target instanceof inputType)) return;
    value = event.target.value;
    valueAsNumber = Number(event.target.value);
  }
</script>

{#if outlined}
  <md-outlined-text-field
    bind:this={component}
    {oninput}
    {error}
    {errorText}
    {label}
    {noAsterisk}
    {required}
    {value}
    {prefixText}
    {suffixText}
    {supportingText}
    {textDirection}
    {rows}
    {cols}
    {inputMode}
    {max}
    {maxLength}
    {min}
    {minLength}
    {noSpinner}
    {pattern}
    {placeholder}
    {readOnly}
    {multiple}
    {step}
    {type}
    {autocomplete}
    {disabled}
    {name}
    {...props}
  >
    {@render children?.()}
  </md-outlined-text-field>
{:else}
  <md-filled-text-field
    bind:this={component}
    {oninput}
    {error}
    {errorText}
    {label}
    {noAsterisk}
    {required}
    {value}
    {prefixText}
    {suffixText}
    {supportingText}
    {textDirection}
    {rows}
    {cols}
    {inputMode}
    {max}
    {maxLength}
    {min}
    {minLength}
    {noSpinner}
    {pattern}
    {placeholder}
    {readOnly}
    {multiple}
    {step}
    {type}
    {autocomplete}
    {disabled}
    {name}
    {...props}
  >
    {@render children?.()}
  </md-filled-text-field>
{/if}
