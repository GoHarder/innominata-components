<script lang="ts">
  import '@material/web/divider/divider.js';

  // MARK: Types
  // ------------------------------------------------
  type Props = {
    /** Indents the divider with equal padding on both sides. */
    inset?: boolean;
    /** Indents the divider with padding on the leading side. */
    insetStart?: boolean;
    /** Indents the divider with padding on the trailing side. */
    insetEnd?: boolean;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { inset = false, insetStart = false, insetEnd = false, ...props }: Props = $props();
</script>

<md-divider {inset} {insetStart} {insetEnd} {...props}></md-divider>
