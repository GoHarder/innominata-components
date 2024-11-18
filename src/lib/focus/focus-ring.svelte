<script lang="ts">
  import '@material/web/focus/md-focus-ring.js';

  // MARK: Types
  // ------------------------------------------------
  type Props = {
    /** Makes the focus ring visible. */
    visible?: boolean;
    /** Makes the focus ring animate inwards instead of outwards. */
    inward?: boolean;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { visible = false, inward = false, ...props }: Props = $props();
</script>

<md-focus-ring {visible} {inward} {...props}></md-focus-ring>

<style global>
  @media (prefers-reduced-motion: reduce) {
    md-focus-ring {
      --md-focus-ring-duration: 0s;
    }
  }
</style>
