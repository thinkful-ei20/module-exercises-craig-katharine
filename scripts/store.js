'use strict';

const store = (function() {
  
  let store = {
    secretStuff: 'no one should see this',
    items: [
      // { id: cuid(), name: 'apples', checked: false },
      // { id: cuid(), name: 'oranges', checked: false },
      // { id: cuid(), name: 'milk', checked: true },
      // { id: cuid(), name: 'bread', checked: false },
    ],
    hideCheckedItems: false,
    searchTerm: '',
  };
  
  const localSearchTerm = store.searchTerm;
  const localHideCheckedItems = store.hideCheckedItems;
  const items = store.items;

  return {
    localSearchTerm,
    localHideCheckedItems,
    items,
  };

}());