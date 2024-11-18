<script lang="ts">
  // MARK: Types
  // ------------------------------------------------
  // MARK: Components
  // ------------------------------------------------
  import Section from './section.svelte';
  import { Icon } from '$lib/icon/index.ts';
  import { IconButton } from '$lib/icon-button/index.ts';
  import { TextField } from '$lib/text-field/index.ts';

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
  let expand = $state(true);

  let hero = $state({
    firstName: 'John',
    lastName: 'Doe',
    phone: '555-555-5555',
    address: '123 Main St.',
  });

  let icons = $state({
    val1: '',
    val2: '',
    val3: '',
  });

  let selected = $state(false);

  let fieldType: 'text' | 'password' = $derived(selected ? 'text' : 'password');

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

{#snippet header()}
  <h2>Text Fields</h2>
{/snippet}

{#snippet supportingText()}
  <div>
    <p>Text fields allow users to enter text into a UI.</p>
    <p>They typically appear in forms and dialogs.</p>
  </div>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  <form id="hero">
    <Icon style="grid-area: person-icon;">person</Icon>
    <TextField bind:value={hero.firstName} label="First name" outlined style="grid-area: first-name;" autocomplete="given-name" />
    <TextField bind:value={hero.lastName} label="Last name" outlined style="grid-area: last-name;" autocomplete="family-name" />
    <Icon style="grid-area: call-icon;">call</Icon>
    <TextField bind:value={hero.phone} label="Phone" outlined style="grid-area: phone;" type="tel" autocomplete="tel" />
    <Icon style="grid-area: location-on-icon;">location_on</Icon>
    <TextField bind:value={hero.address} label="Address" outlined style="grid-area: address;" autocomplete="street-address" />
  </form>

  {#if expand}
    <h3>Usage</h3>
    <TextField label="Label" value="Value" />
    <TextField label="Label" outlined value="Value" />

    <h3>Input types</h3>
    <TextField label="Username" type="email" />
    <TextField label="Password" type="password" />

    <h3>Text area</h3>
    <TextField label="Vertical resize" type="textarea" style="resize: vertical;" />

    <h3>Icons</h3>
    <TextField bind:value={icons.val1} placeholder="Search for messages" type="search" outlined>
      <Icon data-slot="leading-icon">search</Icon>
    </TextField>

    <TextField bind:value={icons.val2} label="Password" type={fieldType} required autocomplete="current-password">
      <IconButton bind:selected data-slot="trailing-icon" type="button" toggle>
        <Icon>visibility</Icon>
        <Icon slot="selected">visibility_off</Icon>
      </IconButton>
    </TextField>

    <TextField bind:value={icons.val3} label="Username" outlined error errorText="Username not available">
      <Icon data-slot="trailing-icon">error</Icon>
    </TextField>

    <h3>Prefix and suffix</h3>
    <TextField value="0" label="Dollar amount" outlined prefixText="$" suffixText=".00" />

    <h3>Supporting text</h3>
    <TextField label="Comments" supportingText="Provide comments for the issue" />
    <TextField label="Name" required supportingText="*required" errorText="Please fill out this field" />

    <h3>Character counter</h3>
    <TextField label="Title" value="Short" maxLength={10} />

    <h3>Number</h3>
    <!-- <NumberField label="Number" type="weight" metric /> -->
    <!-- <NumberField outlined label="Number" type="weight" metric /> -->

    <h3>Length</h3>
    <!-- <LengthField label="Length" /> -->
    <!-- <LengthField outlined={true} label="Length" /> -->
  {/if}
</Section>

<style>
  #hero {
    display: grid;
    grid-template-areas:
      'person-icon first-name'
      '. last-name'
      'call-icon phone'
      'location-on-icon address';
    grid-template-columns: 24px 213px;
    grid-auto-rows: 56px;
    align-items: center;
    gap: 12px;
  }
</style>
