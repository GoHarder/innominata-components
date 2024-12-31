<script lang="ts">
  import '../sass/index.scss';
  import { setContext } from 'svelte';
  import ButtonSect from './button-section.svelte';
  import CheckboxSect from './checkbox-section.svelte';
  import ChipSect from './chip-section.svelte';
  import DialogSect from './dialog-section.svelte';
  import DividerSect from './divider-section.svelte';
  import ElevationSect from './elevation-section.svelte';
  import FabSect from './fab-section.svelte';
  import FocusSect from './focus-section.svelte';
  import IconSect from './icon-section.svelte';
  import IconButtonSect from './icon-button-section.svelte';
  import ListSect from './list-section.svelte';
  import MenuSect from './menu-section.svelte';
  import ProgressSect from './progress.section.svelte';
  import RadioSect from './radio-section.svelte';
  import RippleSect from './ripple-section.svelte';
  import SelectSect from './select-section.svelte';
  import SliderSect from './slider-section.svelte';
  import SwitchSect from './switch-section.svelte';
  import TabsSect from './tabs-section.svelte';
  import TextFieldSect from './text-field-section.svelte';

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
  // MARK: Contexts
  // ------------------------------------------------
  setContext('style', {
    textField: {
      // noAsterisk: true,
      // variant: 'outlined',
    },
  });

  // MARK: Subscriptions
  // ------------------------------------------------
  // MARK: Reactive Rules
  // ------------------------------------------------
  // MARK: Events
  // ------------------------------------------------
  // MARK: Lifecycle
  // ------------------------------------------------
</script>

<h1>Component Library</h1>
<main>
  <ButtonSect />
  <CheckboxSect />
  <ChipSect />
  <DialogSect />
  <DividerSect />
  <ElevationSect />
  <FabSect />
  <FocusSect />
  <IconSect />
  <IconButtonSect />
  <ListSect />
  <MenuSect />
  <ProgressSect />
  <RadioSect />
  <RippleSect />
  <SelectSect />
  <SliderSect />
  <SwitchSect />
  <TabsSect />
  <TextFieldSect />
</main>

<style lang="scss">
  h1 {
    // Layout
    margin: 16px 8px;
    // Text
    font: var(--md-sys-typescale-headline-large);
  }

  main {
    // Layout
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
</style>
