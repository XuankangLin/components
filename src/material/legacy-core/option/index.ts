/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatRippleModule, MatPseudoCheckboxModule, MatCommonModule} from '@angular/material/core';
import {MatLegacyOption} from './option';
import {MatLegacyOptgroup} from './optgroup';

/**
 * @deprecated Use `MatOptionModule` from `@angular/material/core` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
@NgModule({
  imports: [MatRippleModule, CommonModule, MatCommonModule, MatPseudoCheckboxModule],
  exports: [MatLegacyOption, MatLegacyOptgroup],
  declarations: [MatLegacyOption, MatLegacyOptgroup],
})
export class MatLegacyOptionModule {}

export * from './option';
export * from './optgroup';

export {
  /**
   * @deprecated Use `MAT_OPTGROUP` from `@angular/material/core` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
   * @breaking-change 17.0.0
   */
  MAT_OPTGROUP,

  /**
   * @deprecated Use `MatOptionSelectionChange` from `@angular/material/core` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
   * @breaking-change 17.0.0
   */
  MatOptionSelectionChange,

  /**
   * @deprecated Use `MatOptionParentComponent` from `@angular/material/core` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
   * @breaking-change 17.0.0
   */
  MatOptionParentComponent,

  /**
   * @deprecated Use `MAT_OPTION_PARENT_COMPONENT` from `@angular/material/core` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
   * @breaking-change 17.0.0
   */
  MAT_OPTION_PARENT_COMPONENT,

  /**
   * @deprecated Use `_countGroupLabelsBeforeOption` from `@angular/material/core` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
   * @breaking-change 17.0.0
   */
  _countGroupLabelsBeforeOption,

  /**
   * @deprecated Use `_getOptionScrollPosition` from `@angular/material/core` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
   * @breaking-change 17.0.0
   */
  _getOptionScrollPosition,

  /**
   * @deprecated Use `_MatOptionBase` from `@angular/material/core` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
   * @breaking-change 17.0.0
   */
  _MatOptionBase,

  /**
   * @deprecated Use `_MatOptgroupBase` from `@angular/material/core` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
   * @breaking-change 17.0.0
   */
  _MatOptgroupBase,
} from '@angular/material/core';
