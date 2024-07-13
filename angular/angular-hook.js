
/***
ngOnChanges: Called when input properties of a component change.
ngOnInit: Called once after the component is initialized.
ngDoCheck: Called after ngOnChanges and ngOnInit, and whenever Angular thinks that the data might have changed.
ngAfterContentInit: Called after the first content projection has been initialized.
ngAfterContentChecked: Called after every check of the component's content.
ngAfterViewInit: Called after the component's view and child views have been initialized.
ngAfterViewChecked: Called after every check of the component's view and child views.
ngOnDestroy: Called just before a component is destroyed.


When to Use Which Hook
ngOnChanges: For handling changes in input properties.
ngOnInit: For initial setup tasks like fetching data or subscribing to observables.
ngDoCheck: For custom change detection logic (use with caution due to performance implications).
ngAfterContentInit: For accessing projected content after it's initialized.
ngAfterContentChecked: For handling changes in projected content.
ngAfterViewInit: For accessing the component's view after it's initialized.
ngAfterViewChecked: For handling changes in the component's view.
ngOnDestroy: For cleanup tasks like unsubscribing from observables or releasing resources.



 */
