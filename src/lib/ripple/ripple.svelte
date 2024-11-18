<script lang="ts">
  import '@material/web/ripple/ripple';

  // MARK: Types
  // ------------------------------------------------
  type Props = {
    /** Whether or not the ripple is disabled. */
    disabled?: boolean;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { disabled = false }: Props = $props();
</script>

<md-ripple {disabled}></md-ripple>
