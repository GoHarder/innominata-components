<script lang="ts">
  import '@material/web/chips/chip-set.js';
  // MARK: Types
  // ------------------------------------------------
  type Props = {
    /** The child elements to render. */
    children: Function;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------

  let { children, ...props }: Props = $props();
</script>

<md-chip-set {...props}>
  {@render children()} 
</md-chip-set>
