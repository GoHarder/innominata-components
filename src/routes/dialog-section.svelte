<script lang="ts">
  import Section from './section.svelte';
  import { Button } from "$lib/button/index.ts";
  import { Dialog } from "$lib/dialog/index.ts";
  import { Radio } from "$lib/radio/index.ts";

  // MARK: Types
  // ------------------------------------------------
  // MARK: Components
  // ------------------------------------------------
  // MARK: Stores
  // ------------------------------------------------
  // MARK: Properties
  // ------------------------------------------------
  // MARK: Methods
  // ------------------------------------------------
  // MARK: Constants
  // ------------------------------------------------
  // MARK: Variables
  // ------------------------------------------------
  let debug = $state(false);
  let expand = $state(false);
  let open = $state(false);

  // MARK: Contexts
  // ------------------------------------------------
  // MARK: Subscriptions
  // ------------------------------------------------
  // MARK: Reactive Rules
  // ------------------------------------------------
  // MARK: Events
  // ------------------------------------------------
  function onClick() {
    open = !open;
  }

  // MARK: Lifecycle
  // ------------------------------------------------
</script>

{#snippet header()}
<h2>Dialogs</h2>
{/snippet}

{#snippet supportingText()}
<p>They can require an action, communicate information for making decisions, or help users accomplish a focused task.</p>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  <div class="hero">
    <Button onClick={onClick} data-index="1">Ringtone</Button>
    <Dialog bind:open={open}>
      <div data-slot="headline">Phone ringtone</div>
      <form data-slot="content" id="phone-ringtone-form" method="dialog">
        <Radio id="ring-none" name="ringtone" value="none" />
        <label for="ring-none">None</label>

        <Radio id="ring-callisto" name="ringtone" value="callisto" />
        <label for="ring-callisto">Callisto</label>

        <Radio id="ring-ganymede" name="ringtone" value="ganymede" />
        <label for="ring-ganymede">Ganymede</label>

        <Radio id="ring-luna" name="ringtone" value="luna" />
        <label for="ring-luna">Luna</label>
      </form>
      <div data-slot="actions">
        <Button variant="text" value="cancel" form="phone-ringtone-form">Cancel</Button>
        <Button variant="text" value="ok" form="phone-ringtone-form">Ok</Button>
      </div>
    </Dialog>
  </div>
</Section>

<style>
    #phone-ringtone-form {
    display: grid;
    grid-template-columns: 20px max-content;
    gap: 10px;
    /* width: 100%; */
  }
</style>
