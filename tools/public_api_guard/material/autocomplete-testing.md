## API Report File for "components-srcs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { ComponentHarnessConstructor } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';
import { MatOptgroupHarness } from '@angular/material/core/testing';
import { MatOptionHarness } from '@angular/material/core/testing';
import { OptgroupHarnessFilters } from '@angular/material/core/testing';
import { OptionHarnessFilters } from '@angular/material/core/testing';

// @public
export interface AutocompleteHarnessFilters extends BaseHarnessFilters {
    value?: string | RegExp;
}

// @public
export class MatAutocompleteHarness extends _MatAutocompleteHarnessBase<typeof MatOptionHarness, MatOptionHarness, OptionHarnessFilters, typeof MatOptgroupHarness, MatOptgroupHarness, OptgroupHarnessFilters> {
    static hostSelector: string;
    // (undocumented)
    protected _optionClass: typeof MatOptionHarness;
    // (undocumented)
    protected _optionGroupClass: typeof MatOptgroupHarness;
    // (undocumented)
    protected _prefix: string;
    static with<T extends MatAutocompleteHarness>(this: ComponentHarnessConstructor<T>, options?: AutocompleteHarnessFilters): HarnessPredicate<T>;
}

// @public (undocumented)
export abstract class _MatAutocompleteHarnessBase<OptionType extends ComponentHarnessConstructor<Option> & {
    with: (options?: OptionFilters) => HarnessPredicate<Option>;
}, Option extends ComponentHarness & {
    click(): Promise<void>;
}, OptionFilters extends BaseHarnessFilters, OptionGroupType extends ComponentHarnessConstructor<OptionGroup> & {
    with: (options?: OptionGroupFilters) => HarnessPredicate<OptionGroup>;
}, OptionGroup extends ComponentHarness, OptionGroupFilters extends BaseHarnessFilters> extends ComponentHarness {
    blur(): Promise<void>;
    clear(): Promise<void>;
    enterText(value: string): Promise<void>;
    focus(): Promise<void>;
    getOptionGroups(filters?: Omit<OptionGroupFilters, 'ancestor'>): Promise<OptionGroup[]>;
    getOptions(filters?: Omit<OptionFilters, 'ancestor'>): Promise<Option[]>;
    getValue(): Promise<string>;
    isDisabled(): Promise<boolean>;
    isFocused(): Promise<boolean>;
    isOpen(): Promise<boolean>;
    // (undocumented)
    protected abstract _optionClass: OptionType;
    // (undocumented)
    protected abstract _optionGroupClass: OptionGroupType;
    // (undocumented)
    protected abstract _prefix: string;
    selectOption(filters: OptionFilters): Promise<void>;
}

// (No @packageDocumentation comment for this package)

```
