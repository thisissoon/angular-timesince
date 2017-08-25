# Angular TimeSince
[![Build Status][travis-badge]][travis-badge-url]
[![Coverage Status][coveralls-badge]][coveralls-badge-url]

A simple lightweight library for [Angular (2/4+)][angular] which removes excess text and add timesince symbol to end of text before text overflows container.

This is a simple library for [Angular][angular], implemented in the [Angular Package Format v4.0](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx).


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

`app.component.ts`

Use any `Date` object or `Date` parsable value

```ts
export class AppComponent {
  date = new Date("2010-08-24T16:16:09.540Z");
  // or
  // date = "2010-08-24T16:16:09.540Z"
}
```

[travis-badge]: https://travis-ci.org/thisissoon/angular-timesince.svg?branch=master
[travis-badge-url]: https://travis-ci.org/thisissoon/angular-timesince
[coveralls-badge]: https://coveralls.io/repos/github/thisissoon/angular-timesince/badge.svg?branch=master
[coveralls-badge-url]: https://coveralls.io/github/thisissoon/angular-timesince?branch=master
[angular]: https://angular.io/
