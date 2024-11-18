<script lang="ts">
  import '@material/web/progress/linear-progress.js';

  // MARK: Types
  // ------------------------------------------------
  type Props = {
    /**
     * Buffer amount to display, a fraction between 0 and max.
     * If the value is 0 or negative, the buffer is not displayed.
     */
    buffer?: number;
    /** Progress to display, a fraction between 0 and max. */
    value: number;
    /** Maximum progress to display, defaults to 1. */
    max?: number;
    /** Whether or not to display indeterminate progress, which gives no indication to how long an activity will take. */
    indeterminate: boolean;
    /** Whether or not to render indeterminate mode using 4 colors instead of one. */
    fourColor?: boolean;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { buffer = 0, value = 0, max = 1, indeterminate = false, fourColor = false }: Props = $props();

  // MARK: Methods
  // ------------------------------------------------
  // MARK: Constants
  // ------------------------------------------------
  // MARK: Variables
  // ------------------------------------------------
  // MARK: Contexts
  // ------------------------------------------------
  // MARK: Subscriptions
  // ------------------------------------------------
  // MARK: Reactive Rules
  // ------------------------------------------------
  // MARK: Events
  // ------------------------------------------------
  // MARK: Lifecycle
  // ------------------------------------------------
</script>

<md-linear-progress {buffer} {value} {max} {indeterminate} {fourColor}></md-linear-progress>

<!-- <style>
</style> -->
