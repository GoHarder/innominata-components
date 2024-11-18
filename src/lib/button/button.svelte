<script lang="ts">
  import '@material/web/button/elevated-button.js';
  import '@material/web/button/filled-button.js';
  import '@material/web/button/filled-tonal-button.js';
  import '@material/web/button/outlined-button.js';
  import '@material/web/button/text-button.js';
  import { onDestroy, onMount } from 'svelte';
  import { setSlots } from '../internal/lib.js';

  // MARK: Types
  // ------------------------------------------------
  import type { MdElevatedButton } from '@material/web/button/elevated-button.js';
  import type { MdFilledButton } from '@material/web/button/filled-button.js';
  import type { MdFilledTonalButton } from '@material/web/button/filled-tonal-button.js';
  import type { MdOutlinedButton } from '@material/web/button/outlined-button.js';
  import type { MdTextButton } from '@material/web/button/text-button.js';

  type MdComp = MdElevatedButton | MdFilledButton | MdFilledTonalButton | MdOutlinedButton | MdTextButton;
  type Variant = 'elevated' | 'filled' | 'filled-tonal' | 'outlined' | 'text';

  type Props = {
    /**
     * The child elements to render.
     *
     * Available slots:
     * - `icon`: The icon to render.
     */
    children: Function;
    /** The on click event handler. */
    onClick?: (event: MouseEvent) => void;
    /** The variant of button to render. */
    variant?: Variant;
    /** Whether or not the button is disabled. */
    disabled?: boolean;
    /** Whether the button is "soft-disabled" (disabled but still focusable). */
    softDisabled?: boolean;
    /** The URL that the link button points to. */
    href?: string;
    /**
     * Where to display the linked `href` URL for a link button.
     * Common options include `_blank` to open in a new tab.
     */
    target?: MdComp['target'];
    /**
     * Whether to render the icon at the inline end of the label rather than the inline start.
     *
     * NOTE: Link buttons cannot have trailing icons.
     */
    trailingIcon?: boolean;
    /** The default behavior of the button. May be "button", "reset", or "submit" (default). */
    type?: MdComp['type'];
    /** The value added to a form with the button's name when the button submits a form. */
    value?: string;
    name?: string;
    form?: string;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let {
    children,
    onClick,
    variant = 'elevated',
    disabled = false,
    softDisabled = false,
    href = '',
    target = '',
    trailingIcon = false,
    type = 'submit',
    value = '',
    name = undefined,
    form = undefined,
    ...props
  }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdComp | undefined = $state();

  // MARK: Effects
  // ------------------------------------------------
  $effect.pre(() => {
    setSlots(component);
  });

  // MARK: Lifecycle
  // ------------------------------------------------
  onMount(() => {
    if (component && onClick) component.addEventListener('click', onClick);
  });

  onDestroy(() => {
    if (component && onClick) component.removeEventListener('click', onClick);
  });
</script>

{#if variant === 'filled'}
  <md-filled-button bind:this={component} {disabled} {softDisabled} {href} {target} {trailingIcon} {type} {value} {name} {form} {...props}>
    {@render children()}
  </md-filled-button>
{:else if variant === 'filled-tonal'}
  <md-filled-tonal-button bind:this={component} {disabled} {softDisabled} {href} {target} {trailingIcon} {type} {value} {name} {form} {...props}>
    {@render children()}
  </md-filled-tonal-button>
{:else if variant === 'outlined'}
  <md-outlined-button bind:this={component} {disabled} {softDisabled} {href} {target} {trailingIcon} {type} {value} {name} {form} {...props}>
    {@render children()}
  </md-outlined-button>
{:else if variant === 'text'}
  <md-text-button bind:this={component} {disabled} {softDisabled} {href} {target} {trailingIcon} {type} {value} {name} {form} {...props}>
    {@render children()}
  </md-text-button>
{:else}
  <md-elevated-button bind:this={component} {disabled} {softDisabled} {href} {target} {trailingIcon} {type} {value} {name} {form} {...props}>
    {@render children()}
  </md-elevated-button>
{/if}
