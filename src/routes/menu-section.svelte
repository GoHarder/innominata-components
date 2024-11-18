<script lang="ts">
  import Section from './section.svelte';
  import { Button } from "$lib/button/index.ts";
  import { Icon } from "$lib/icon/index.ts";
  import { IconButton } from "$lib/icon-button/index.ts";
  import { Menu, MenuItem, SubMenu } from "$lib/menu/index.ts";

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

  let open1 = $state(false);
  let open2 = $state(false);
  let open3 = $state(false);
  let open4 = $state(false);

  // MARK: Contexts
  // ------------------------------------------------
  // MARK: Subscriptions
  // ------------------------------------------------
  // MARK: Reactive Rules
  // ------------------------------------------------
  // MARK: Events
  // ------------------------------------------------
  function toggle1() {
    open1 = !open1;
  }

  function toggle2() {
    open2 = !open2;
  }

  function toggle3() {
    open3 = !open3;
  }

  function toggle4() {
    open4 = !open4;
  }

  // MARK: Lifecycle
  // ------------------------------------------------
</script>

{#snippet header()}
<h2>Menus</h2>
{/snippet}

{#snippet supportingText()}
<div>
  <p>Menus display a list of choices on a temporary surface.</p>
  <p>They appear when users interact with a button, action, or other control.</p>
</div>
{/snippet}

<Section bind:expand bind:debug {header} {supportingText}>
  {#if expand}
  <div class="hero">
    <IconButton>
      <Icon>arrow_back</Icon>
    </IconButton>
      <span>
        <IconButton toggle>
          <Icon>star</Icon>
        </IconButton>
        <span style="position: relative;">
          <IconButton id="anchor-1" onClick={toggle1}>
            <Icon>more_vert</Icon>
          </IconButton>
          <Menu bind:open={open1} anchor="anchor-1" id="menu-1" menuCorner="start-end" anchorCorner="end-end" yOffset={-1}>
            <MenuItem>
              <div data-slot="headline">Revert</div>
            </MenuItem>
            <MenuItem>
              <div data-slot="headline">Settings</div>
            </MenuItem>
            <MenuItem>
              <div data-slot="headline" style="white-space: nowrap;">Send Feedback</div>
            </MenuItem>
            <MenuItem>
              <div data-slot="headline">Help</div>
            </MenuItem>
          </Menu> 
        </span> 
      </span> 
    </div>
    <h3>Usage</h3>  
  {/if}

  <span style="position: relative;">
    <Button id="anchor-2" variant="filled" onClick={toggle2}>Menu</Button>
    <Menu bind:open={open2} anchor="anchor-2" id="menu-2">
      <MenuItem>
        <div data-slot="headline">Apple</div>
      </MenuItem>
      <MenuItem>
        <div data-slot="headline">Banana</div>
      </MenuItem>
      <MenuItem>
        <div data-slot="headline">Cucumber</div>
      </MenuItem>
    </Menu>
  </span> 

  {#if expand}
    <h3>Submenus</h3>
    <span style="position: relative;">
      <Button id="anchor-3" variant="filled" onClick={toggle3}>Menu with Submenus</Button>
       <Menu bind:open={open3} hasOverflow anchor="anchor-3" id="menu-3">
        <SubMenu>
          <MenuItem data-slot="item">
            <div data-slot="headline">Fruits with A</div>
            <Icon data-slot="end">arrow_right</Icon>
          </MenuItem>
          <Menu data-slot="menu">
            <MenuItem>
              <div data-slot="headline">Apricot</div>
            </MenuItem>
            <MenuItem>
              <div data-slot="headline">Avocado</div>
            </MenuItem>
            <SubMenu menuCorner="start-end" anchorCorner="start-start">
              <MenuItem data-slot="item">
                <div data-slot="headline">Apples</div>
                <Icon data-slot="start">arrow_left</Icon>
              </MenuItem>
              <Menu data-slot="menu">
                <MenuItem>
                  <div data-slot="headline">Fuji</div>
                </MenuItem>
                <MenuItem>
                  <div data-slot="headline" style="white-space: nowrap;">Granny Smith</div>
                </MenuItem>
                <MenuItem>
                  <div data-slot="headline" style="white-space: nowrap;">Red Delicious</div>
                </MenuItem>
              </Menu>
            </SubMenu>
          </Menu>
        </SubMenu>
        <MenuItem>
          <div data-slot="headline">Banana</div>
        </MenuItem>
        <MenuItem>
          <div data-slot="headline">Cucumber</div>
        </MenuItem>
      </Menu> 
    </span> 

    <h3>Fixed menus</h3>
    <Button variant="filled" onClick={toggle4} id="anchor-4">Open fixed menu</Button>
    <Menu bind:open={open4} positioning="fixed" id="menu-4" anchor="anchor-4">
      <MenuItem>
        <div data-slot="headline">Apple</div>
      </MenuItem>
      <MenuItem>
        <div data-slot="headline">Banana</div>
      </MenuItem>
      <MenuItem>
        <div data-slot="headline">Cucumber</div>
      </MenuItem>
    </Menu>

    <!-- <h3>Autocomplete</h3>
    <span style="position: relative;">
      <TextField label="State" name="state" list="browsers" on:focus={focusIn} on:change={focusOut} id="anchor-5" />
      <Menu bind:open={auto} id="menu-5" anchor="anchor-5" yOffset="-1" defaultFocus="none">
        <MenuItem>
          <div slot="headline">Apple</div>
        </MenuItem>
        <MenuItem>
          <div slot="headline">Banana</div>
        </MenuItem>
        <MenuItem>
          <div slot="headline">Cucumber</div>
        </MenuItem>
      </Menu>
    </span> -->
  {/if}
</Section>

<style>
  .hero {
    display: flex;
    justify-content: space-between;
  }
</style>
