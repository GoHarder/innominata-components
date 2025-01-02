# Checkbox <!-- omit in toc -->

## Table of contents <!-- omit in toc -->

- [Material Documentation](#material-documentation)
- [Usage](#usage)
    - [Label](#label)

## Material Documentation

[Material Web](https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md)

## Usage

```svelte
<script>
  import { Checkbox } from '@innominata/comp';
</script>

<!-- The three states of a checkbox -->
<Checkbox />
<Checkbox checked />
<Checkbox indeterminate />
```

#### Label

```svelte
<script>
  import { Checkbox } from '@innominata/comp';

  let checked = $state(false)
</script>

<Checkbox bind:checked id="normal-checkbox" />
<label for="normal-checkbox">Normal</label>

<Checkbox id="checked-checkbox" checked />
<label for="checked-checkbox">Checked</label>

<Checkbox id="indeterminate-checkbox" indeterminate />
<label for="indeterminate-checkbox">Indeterminate</label>
```
