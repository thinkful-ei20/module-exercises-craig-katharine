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
      return items.find(e => e === id);
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
      this.findById(id).checked = this.findById(id).checked === true ? this.findById(id).checked = false : this.findById(id).checked = true;
    },
    findAndUpdateName: function(id, newName) {
      try {
        Item.validateName(name);
        Item.findById(id).name = newName;
      } catch (e) {
        console.log('Cannot update name:', e);
      }
    },
    findAndDelete: function(id) {
      const index = items.findIndex(e => e.id === id);
      items.splice(index, 1);
    }
  };
  
  const localSearchTerm = store.searchTerm;
  const localHideCheckedItems = store.hideCheckedItems;
  const items = store.items;

  const findById = store.findById;
  const addItem = store.addItem;
  const findAndToggleChecked = store.findAndToggleChecked;
  const findAndUpdateName = store.findAndUpdateName;
  const findAndDelete = store.findAndDelete;

  return {
    localSearchTerm,
    localHideCheckedItems,
    items,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };

}());