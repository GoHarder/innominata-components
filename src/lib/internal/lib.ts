/**
 * @file Lib
 * @description A set of functions commonly used by most components.
 */

import { MdMenu } from '@material/web/menu/menu.js';
import { MdMenuItem } from '@material/web/menu/menu-item.js';

// MARK: Types
// ------------------------------------------------
type MdTagNameMap = {
  [Key in keyof HTMLElementTagNameMap as Key extends `md-${string}` ? Key : never]: HTMLElementTagNameMap[Key];
};

type MdComp = MdTagNameMap[keyof MdTagNameMap];

type SlotElement = HTMLOrSVGElement | MdMenu;

export type StyleContext = {
  // numberInput?: {
  //   noAsterisk?: boolean;
  //   noSpinner?: boolean;
  //   variant?: 'filled' | 'outlined';
  // };
  select?: {
    noAsterisk?: boolean;
    variant?: 'filled' | 'outlined';
  };
  // switch?: {
  //   icons?: boolean;
  //   showOnlySelectedIcon?: boolean;
  // };
  textField?: {
    noAsterisk?: boolean;
    variant?: 'filled' | 'outlined';
  };
};

export type Context = {
  reducedMotion: boolean;
  style: StyleContext;
};

// MARK: Helpers
// ------------------------------------------------
/**
 * Validates that the child is a valid slot element.
 * @param child The child to validate.
 * @returns Whether or not the child is a valid slot element.
 */
function validateChild(child: unknown): child is SlotElement {
  if (child instanceof HTMLElement) return true;
  if (child instanceof SVGElement) return true;
  if (child instanceof MdMenu) return true;
  if (child instanceof MdMenuItem) return true;
  return false;
}

// MARK: Library
// ------------------------------------------------
/**
 * Sets the slot attribute on all child elements of a component.
 * This is because slots are not supported by Svelte.
 * The work around takes the `data-slot` attribute and sets the slot attribute on the child element.
 * @param component The component to set the slots on.
 */
export function setSlots(component: MdComp | undefined) {
  if (!component) return;

  for (const child of component.children) {
    if (validateChild(child) === false) continue;
    if (child.dataset.slot === undefined) continue;
    child.slot = child.dataset.slot;
    delete child.dataset.slot;
  }
}

/**
 * Creates an id for items that need to be unique.
 * @param prefix The prefix to use for the id.
 */
export function genId(prefix: string) {
  const id = Math.random().toString(36).slice(2);
  return `${prefix}-${id}`;
}
