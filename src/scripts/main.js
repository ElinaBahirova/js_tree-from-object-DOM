'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  const list = document.createElement('ul');

  for (const key in data) {
    if (Object.keys(data[key]).length !== 0) {
      const listItem = document.createElement('li');

      listItem.innerText = key;
      list.append(listItem);
      element.append(list);
      createTree(listItem, data[key]);
    } else {
      const listItem = document.createElement('li');

      listItem.innerText = key;
      list.append(listItem);
      element.append(list);
      createTree(listItem, data[key]);
    }
  }
}

createTree(tree, food);
