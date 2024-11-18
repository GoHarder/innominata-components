<script lang="ts">
  import Section from './section.svelte';

  // MARK: Types
  // ------------------------------------------------
  // MARK: Components
  // ------------------------------------------------
  import { Button } from '$lib/button/index.ts';

  // MARK: Stores
  // ------------------------------------------------
  // MARK: Properties
  // ------------------------------------------------
  // MARK: Methods
  // ------------------------------------------------
  // MARK: Constants
  // ------------------------------------------------
  // MARK: State
  // ------------------------------------------------
  let debug = $state(false);
  let expand = $state(true);

  let users = $state([
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 },
  ]);

  let clicks = $state(0);

  let total = $derived(users.reduce((total, user) => total + user.age, 0));

  // MARK: Contexts
  // ------------------------------------------------
  // MARK: Subscriptions
  // ------------------------------------------------
  // MARK: Reactive Rules
  // ------------------------------------------------
  // MARK: Events
  // ------------------------------------------------
  function onClick() {
    if (clicks === 0) users[0].age++;
    if (clicks === 1) users.push({ name: 'Gary', age: 12 });
    if (clicks === 2) users.pop();
    if (clicks > 2) clicks = -1;

    console.log($state.snapshot(users));

    clicks++;
  }

  // MARK: Lifecycle
  // ------------------------------------------------
</script>

{#snippet header()}
  <h2>Runes</h2>
{/snippet}

{#snippet supportingText()}
  <p>A sandbox for testing the new runes system.</p>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  {#each users as user}
    <p>{user.name} is {user.age} years old.</p>
  {/each}
  <p>Total: {total}</p>
  <Button {onClick}>Click Me</Button>
</Section>

<!-- <style>
</style> -->
