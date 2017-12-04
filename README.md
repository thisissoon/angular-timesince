# Angular TimeSince
[![Build Status][travis-badge]][travis-badge-url]
[![Coverage Status][coveralls-badge]][coveralls-badge-url]

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

A simple lightweight library for [Angular (2/4+)][angular] which removes excess text and add timesince symbol to end of text before text overflows container.

This is a simple library for [Angular][angular], implemented in the [Angular Package Format v5.0](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx).


## Install

`npm i @thisissoon/angular-timesince --save`

`app.module.ts`
```ts
import { TimeSinceModule } from '@thisissoon/angular-timesince';

@NgModule({
  imports: [
    TimeSinceModule
  ]
})
export class AppModule { }
```


## Example

`app.component.html`

```html
<p>{{ date | timeSince }} ago</p>
```

Result:

```html
<p>7 years ago</p>
```

`app.component.ts`

Use any `Date` object or `Date` parsable value

```ts
export class AppComponent {
  date = new Date("2010-08-24T16:16:09.540Z");
  // or
  // date = "2010-08-24T16:16:09.540Z"
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


[travis-badge]: https://travis-ci.org/thisissoon/angular-timesince.svg?branch=master
[travis-badge-url]: https://travis-ci.org/thisissoon/angular-timesince
[coveralls-badge]: https://coveralls.io/repos/github/thisissoon/angular-timesince/badge.svg?branch=master
[coveralls-badge-url]: https://coveralls.io/github/thisissoon/angular-timesince?branch=master
[angular]: https://angular.io/
