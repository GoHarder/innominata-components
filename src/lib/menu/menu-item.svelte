<script lang="ts">
  import '@material/web/menu/menu-item.js';
  import { setSlots } from '../internal/lib.js';

  // MARK: Types
  // ------------------------------------------------
  import type { MdMenuItem } from '@material/web/menu/menu-item.js';

  type Props = {
    /**
     * The child elements to render.
     *
     * Available slots:
     * - `headline`: The text to display in the menu item.
     * - `end`: The element to display at the end of the menu item.
     */
    children: Function;
    /** Disables the item and makes it non-selectable and non-interactive. */
    disabled?: boolean;
    /** Sets the behavior and role of the menu item, defaults to "menuitem". */
    type?: MdMenuItem['type'];
    /** Sets the underlying HTMLAnchorElement's href resource attribute. */
    href?: string;
    /** Sets the underlying HTMLAnchorElement's target attribute when href is set. */
    target?: MdMenuItem['target'];
    /** Keeps the menu open if clicked or keyboard selected. */
    keepOpen?: boolean;
    /** Sets the item in the selected visual state when a submenu is opened. */
    selected?: boolean;
    typeaheadText?: string;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { children, disabled = false, type = 'menuitem', href = '', target = '', keepOpen = false, selected = false, typeaheadText = undefined, ...props }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdMenuItem | undefined = $state();

  // MARK: Effects
  // ------------------------------------------------
  $effect.pre(() => {
    setSlots(component);
  });
</script>

<md-menu-item bind:this={component} {disabled} {type} {href} {target} {keepOpen} {selected} {typeaheadText} {...props}>
  {@render children()}
</md-menu-item>
