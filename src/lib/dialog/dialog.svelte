<script lang="ts" module>
  let context = false;
  let reducedMotion: boolean | undefined;
</script>

<script lang="ts">
  import '@material/web/dialog/dialog.js';
  import { getContext } from 'svelte';
  import { onDestroy, onMount } from "svelte";
  import { setSlots } from "../internal/lib.ts";

  // MARK: Types
  // ------------------------------------------------
  import type { MdDialog } from '@material/web/dialog/dialog.js';

  type Props = {
    /** 
     * The child elements to render. 
     *
     * Available slots:
     * - `headline`: The headline to render.
     * - `content`: The content to render.
     * - `actions`: The actions to render.
     */
    children: Function;
    /** Skips the opening and closing animations. */
    quick?: boolean;
    /** 
     * Gets or sets the dialog's return value, usually to indicate which button a user pressed to close it. 
     * 
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue)
     */
    returnValue?: string;
    /** 
     * The type of dialog for accessibility. 
     * Set this to alert to announce a dialog as an alert dialog. 
     */
    type?: 'alert';
    /** 
     * Disables focus trapping, which by default keeps keyboard Tab navigation within the dialog.
     * When disabled, after focusing the last element of a dialog, pressing Tab again will release focus from the window back to the browser (such as the URL bar).
     * Focus trapping is recommended for accessibility, and should not typically be disabled. 
     * Only turn this off if the use case of a dialog is more accessible without focus trapping.
     */
    noFocusTrap?: boolean; 
    open?: boolean;
    [key: string]: any;
  }

  // MARK: Properties
  // ------------------------------------------------
  let { 
    children, 
    quick = false, 
    returnValue = '',
    type = undefined,
    noFocusTrap = false,
    open = $bindable(false),
    ...props 
  }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdDialog | undefined = $state();

  // MARK: Contexts
  // ------------------------------------------------
  if (!context) reducedMotion = getContext('reducedMotion');

  if (reducedMotion) quick = true;

  // MARK: Effects
  // ------------------------------------------------
  $effect.pre(() => {
    setSlots(component);
  })  

  // MARK: Events
  // ------------------------------------------------
  function onClosed() {
    if (!component) return;
    open = component.open;
  }

  // MARK: Lifecycle
  // ------------------------------------------------
  onMount(() => {
    if (component) component.addEventListener('closed', onClosed);    
  })

  onDestroy(() => {
    if (component) component.removeEventListener('closed', onClosed);
  })
</script>

<md-dialog bind:this={component} {quick} {returnValue} {type} {noFocusTrap} {open} {...props}>
  {@render children()}
</md-dialog>
