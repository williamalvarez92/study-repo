# Handle State in React Apps

### Different ways

- URL

Useful to current app location/settings (current items, filters, pagination sorting...). E.g `www.web.com/pagination1`

Can use react router

- Web storage

Persist state btw reloads. (cookies, localstorage, indexedDB...).

This is only tied to browser, so if browser is changed it will lose all this states. (avoid sensitive data)

E.g Items in shopping cart or form data

- Local state

Useful when one component needs it. E.g form, toggles, local lists

- Lifted state

This is a parent component state, so that you can use it in different components.

- Derived state

Sometimes no need to store it and can use the state and derived it for each render. Things like `.length`

- Refs

Dom reference (values that are not controlled by react)

- Context

States that are global. E.g User, theme, etc.

- Third party library

Popular options: `Redux`, `Mobx` and `Recoil`.
