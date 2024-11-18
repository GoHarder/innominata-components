<script lang="ts">
  import '@material/web/list/list-item.js';

  // MARK: Types
  // ------------------------------------------------
  import type { MdListItem } from '@material/web/list/list-item.js';
  import { setSlots } from "../internal/lib.ts";

  type Props = {
    /**
     * The child elements to render.
     *
     * Available slots:
     * - `start`: The icon to render at the start of the item.
     * - `end`: The icon to render at the end of the item.
     * - `headline`: The headline text to render in the item.
     * - `supporting-text`: The supporting text to render in the item.
     */
    children: Function;
    /** Disables the item and makes it non-selectable and non-interactive. */
    disabled?: boolean;
    /**
     * Sets the behavior of the list item, defaults to "text".
     * Change to "link" or "button" for interactive items.
     */
    type?: MdListItem['type'];
    /** Sets the underlying `HTMLAnchorElement`'s `href` resource attribute. */
    href?: string;
    /** Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is set. */
    target?: MdListItem['target'];
  };

  // MARK: Properties
  // ------------------------------------------------
  let { children, disabled = false, type = 'text', href = '', target = '' }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdListItem | undefined = $state();

  // MARK: Effects
  // ------------------------------------------------
  $effect.pre(() => {
    setSlots(component);
  })  

  // MARK: Events
  // ------------------------------------------------
  // MARK: Lifecycle
  // ------------------------------------------------
</script>

<md-list-item bind:this={component} {disabled} {type} {href} {target}>
  {@render children()}
</md-list-item>
