<script>
  import Section from './section.svelte';
  import { AssistChip, ChipSet, FilterChip, InputChip, SuggestionChip } from "$lib/chip/index.ts";
  import { Divider } from "$lib/divider/index.ts";
  import { Icon } from "$lib/icon/index.ts";

  // Components
  // Stores
  // Properties
  // Methods
  // Constants
  // Variables
  let debug = $state(false);
  let expand = $state(false);
  let selected = $state(false);

  // Contexts
  // Subscriptions
  // Reactive Rules
  // Events
  // Lifecycle
</script>

{#snippet header()}
<h2>Chips</h2>
{/snippet}

{#snippet supportingText()}
<p>Chips help people enter information, make selections, filter content, or trigger actions.</p>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  {#if expand}
    <div class="hero">
      <div class="label">
        <Icon>star</Icon>
        <p>Amenities</p>
      </div>
      <ChipSet>
        <FilterChip label="Washer/Dryer" /> 
        <FilterChip label="Ramp access" bind:selected /> 
        <FilterChip label="Garden" /> 
        <FilterChip label="Cats OK" selected /> 
        <FilterChip label="Dogs Ok" /> 
        <FilterChip label="Smoke-free" /> 
      </ChipSet> 
      <Divider /> 
      <div class="label">
        <Icon>map</Icon>
        <p>Neighborhoods</p>
      </div>
      <ChipSet>
        <FilterChip label="Eaglehead" selected /> 
        <FilterChip label="Rabbit Island" selected /> 
        <FilterChip label="Downtown" /> 
        <FilterChip label="Clinton Hill" /> 
        <FilterChip label="Downtown Brooklyn" /> 
      </ChipSet>
    </div>
    <h3>Usage</h3>
  {/if}

  <ChipSet>
    <AssistChip label="Assist" />
    <FilterChip label="Filter"/> 
    <InputChip label="Input" />
    <!-- <SuggestionChip label="Suggestion" /> -->
  </ChipSet>

  {#if expand}
    <h3>Chip Sets</h3>
    <p>New Event</p>
    <ChipSet>
      <FilterChip label="All day"/> 
      <AssistChip label="Add to calendar" />
      <AssistChip label="Set a reminder" />
    </ChipSet>
    <h3>Icons</h3>
    <ChipSet>
      <AssistChip label="Add to calendar">
        <Icon data-slot="icon">event</Icon>
      </AssistChip>
      <InputChip label="Ping Qiang" avatar>
        <img data-slot="icon" alt="Some person" src="https://i.pravatar.cc/300?img=3" />
      </InputChip>
    </ChipSet>
    <h3>Elevated</h3>
    <div>
      <img alt="Some person" src="https://i.pravatar.cc/100?img=10" />
      <ChipSet>
        <SuggestionChip label="Share" elevated />
        <SuggestionChip label="Favorite" elevated />
      </ChipSet>
    </div>

    <h3>Focusable and Disabled</h3>
    <ChipSet aria-label="Actions">
      <AssistChip label="Copy" disabled alwaysFocusable />
      <AssistChip label="Paste" disabled alwaysFocusable />
    </ChipSet>
    PUT TEXT FIELD HERE 
  {/if} 
</Section>

<style lang="scss">
  .hero {
    width: 400px;
    display: flex;
    flex-direction: column;
    // flex: 1 0 0;
    gap: 12px;
  }

  .label {
    display: flex;
    align-items: center;
    gap: 6px;

    p {
      margin: 0;
    }
  }
</style>
