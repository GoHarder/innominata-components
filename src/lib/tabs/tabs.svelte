<script lang="ts">
  import '@material/web/tabs/tabs.js';
  import { onDestroy, onMount } from 'svelte';

  // MARK: Types
  // ------------------------------------------------
  import type { MdTabs } from '@material/web/tabs/tabs.js';

  type Props = {
    /** The child elements to render. */
    children: Function;
    /** Whether or not to automatically select a tab when it is focused. */
    autoActivate?: boolean;
    activeTabIndex?: number;
    [key: string]: any;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { children, autoActivate = false, activeTabIndex = $bindable(undefined), ...props }: Props = $props();

  // MARK: State
  // ------------------------------------------------
  let component: MdTabs | undefined = $state();

  // MARK: Events
  // ------------------------------------------------
  function onChange() {
    if (!component) return;
    activeTabIndex = component.activeTabIndex;
  }

  // MARK: Lifecycle
  // ------------------------------------------------
  onMount(() => {
    if (component) component.addEventListener('change', onChange);
  });

  onDestroy(() => {
    if (component) component.removeEventListener('change', onChange);
  });
</script>

<md-tabs bind:this={component} {autoActivate} {activeTabIndex} {...props}>
  {@render children()}
</md-tabs>
