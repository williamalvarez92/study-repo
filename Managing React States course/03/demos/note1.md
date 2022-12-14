### Things to notice:

- hooks need to start with word use
- need to be declared before a function.

You can write `debugger` in the code and get inspect in browser so that the code breaks where you write debugger.

### When does react render?

When:

- State change (useState)
- Prop change
- Parent renders
- Context change

### Handle API calls

- (not recommended) Inline => Inside function, using fetch axois, etc in component.
- Make a folder with main API calls. Example folder called `services`
- Custom hooks
- Use library

### Error handeling

`ErrorBoundary` handles production errors, example is using it on `index.js`

React catch error (normal catch(e) {}) can be use for development.

### Loading status for slow APIs

you can use `.finally()` after `.then()` and `.catch(e)` so that it first tries to get the API or even throw and error before it stops the loading page/item(spinner) or can even do it in blocks
``try{} catch(e){} finally{}`
