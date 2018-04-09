'use strict';

const store = (function() {
  const foo = 'bar!';
  let bigObject = {
    secretStuff: 'no one should see this',
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false },
    ],
    hideCheckedItems: false,
    searchTerm: '',
  };
  
  const localSearchTerm = bigObject.searchTerm;
  const localHideCheckedItems = bigObject.hideCheckedItems;
  const localItems = bigObject.items;

  return {
    localSearchTerm,
    localHideCheckedItems,
    localItems,
  };

}());