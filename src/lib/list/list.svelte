<script lang="ts">
  import '@material/web/list/list.js';

  // MARK: Types
  // ------------------------------------------------
  type Props = {
    /** The child elements to render. */
    children: Function;
    [key: string]: any;
  }

  // MARK: Components
  // ------------------------------------------------
  // MARK: Stores
  // ------------------------------------------------
  // MARK: Properties
  // ------------------------------------------------
  let { children, ...props }: Props = $props();
  
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

<md-list {...props}>
  {@render children()} 
</md-list>