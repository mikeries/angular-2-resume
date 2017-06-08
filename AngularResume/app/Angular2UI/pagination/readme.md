### Pagination properties
  - `rotate` (`?boolean=true`) - if `true` current page will in the middle of pages list
  - `disabled` (`?boolean=false`) - if `true` pagination component will be disabled
  - `totalItems` (`number`) - total number of items in all pages
  - `itemsPerPage` (`?number=10`) - maximum number of items per page. If value less than 1 will display all items on one page
  - `maxSize` (`?number=undefined`) - limit number for page links in pager
  - `boundaryLinks` (`?boolean=true`) - if `false` first and last buttons will be hidden
  - `directionLinks` (`?boolean=true`) - if `false` previous and next buttons will be hidden
  - `previousText` (`?string='Previous'`) - previous button text
  - `nextText` (`?string='Next'`) - next button text
  - `firstText` (`?string='First'`) - first button text
  - `lastText` (`?string='Last'`) - last button text

### Pagination events
  - `numPages` - fired when total pages count changes, `$event:number` equals to total pages count
  - `pageChanged` - fired when page was changed, `$event:{page, itemsPerPage}` equals to object with current page index and number of items per page

### Pager properties
  - `align` (`?boolean=true`) - if `true` aligns each link to the sides of pager
  - `disabled` (`?boolean=false`) - if `true` pagination component will be disabled
  - `totalItems` (`number`) - total number of items in all pages
  - `itemsPerPage` (`?number=10`) - maximum number of items per page. If value less than 1 will display all items on one page
  - `previousText` (`?string='Previous'`) - previous button text
  - `nextText` (`?string='Next'`) - next button text

### Pager events
  - `numPages` - fired when total pages count changes, `$event:number` equals to total pages count
  - `pageChanged` - fired when page was changed, `$event:{page, itemsPerPage}` equals to object with current page index and number of items per page
