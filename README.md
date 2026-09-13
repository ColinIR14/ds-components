# ds-components

Enterprise design-system component library for Angular 14, layered on Angular Material 14.

## Requirements

- Node 18.20.x (pinned via `volta` in `package.json`)
- Angular 14 / Angular Material 14

## Build

```
npm ci
ng build ds-components
```

Output is written to `dist/ds-components`.

## Usage

```ts
import { DsComponentsModule } from 'ds-components';

@NgModule({ imports: [DsComponentsModule] })
export class AppModule {}
```

Include the theme in your global styles:

```scss
@use 'ds-components/src/lib/theme/ds-theme';
```

## Components

| Selector          | Wraps                        |
| ----------------- | ---------------------------- |
| `ds-button`       | `mat-raised-button`          |
| `ds-card`         | `mat-card`                   |
| `ds-form-field`   | `mat-form-field` + `matInput`|
| `ds-data-table`   | `mat-table`                  |
| `ds-alert`        | `mat-card` + `mat-icon`      |
| `ds-nav-header`   | `mat-toolbar`                |
