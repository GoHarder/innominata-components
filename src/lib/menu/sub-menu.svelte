<script lang="ts">
  import '@material/web/menu/sub-menu.js';
  import { setSlots } from "../internal/lib.ts";

  // MARK: Types
  // ------------------------------------------------
  import type { MdSubMenu } from '@material/web/menu/sub-menu.js';

  type Props = {
    /**
     * The child elements to render.
     * 
     * Available slots:
     * - `item`: The item to render.
     * - `menu`: The menu to render.
     */
    children: Function;
    /** The anchorCorner to set on the submenu. */
    anchorCorner?: MdSubMenu['anchorCorner'];
    /** The menuCorner to set on the submenu. */
    menuCorner?: MdSubMenu['menuCorner'];
    /** The delay between mouseenter and submenu opening. */
    hoverOpenDelay?: number;
    /** The delay between pointerleave and the submenu closing. */
    hoverCloseDelay?: number;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { 
    children, 
    anchorCorner = 'start-end',
    menuCorner = 'start-start',
    hoverOpenDelay = 400,
    hoverCloseDelay = 400,
    ...props 
  }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdSubMenu | undefined = $state();

  // MARK: Effects
  // ------------------------------------------------
  $effect.pre(() => {
    setSlots(component);
  })  
</script>

<md-sub-menu bind:this={component} {anchorCorner} {menuCorner} {hoverOpenDelay} {hoverCloseDelay} {...props}>
  {@render children()}  
</md-sub-menu>
