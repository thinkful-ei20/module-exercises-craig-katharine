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
    findById: function(id) {
      let objectOfId = items.find(e => e['id'] === id);
      // console.log(objectOfId);
      return objectOfId;
    },
    addItem: function(name) {
      try {
        Item.validateName(name);        
        this.items.push(Item.create(name));
      } catch (e) {
        console.log('Cannot add item', e);
      }      
    },
    findAndToggleChecked: function(id) {
      findById(id).checked = !findById(id).checked;
    },
    findAndUpdateName: function(id, newName) {
      try {
        Item.validateName(newName);
        findById(id).name = newName;
      } catch (e) {
        console.log('Cannot update name:', e);
      }
    },
    findAndDelete: function(id) {
      const index = items.findIndex(e => e.id === id);
      items.splice(index, 1);
    },
    toggleCheckedFilter: function() {
      this.hideCheckedItems = !this.hideCheckedItems;
    },
    setSearchTerm: function(searchTerm) {
      this.searchTerm = searchTerm;
    },
  };
    
  const localSearchTerm = store.searchTerm;
  const localHideCheckedItems = store.hideCheckedItems;
  const items = store.items;

  const findById = store.findById;
  const addItem = store.addItem;
  const findAndToggleChecked = store.findAndToggleChecked;
  const findAndUpdateName = store.findAndUpdateName;
  const findAndDelete = store.findAndDelete;
  const toggleCheckedFilter = store.toggleCheckedFilter;
  const setSearchTerm = store.setSearchTerm;

  return {
    localSearchTerm,
    localHideCheckedItems,
    items,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
  };

}());