const INITIAL_STATE = {
    sections: [
        {
          title: 'sacs',
          imageUrl: 'https://i.ibb.co/SQt9HF7/section-bags.jpg',
          size: 'large',
          id: 1,
          linkUrl: 'shop/sacs'
        },
        {
          title: 'mugs',
          imageUrl: 'https://i.ibb.co/z4jYMBk/dom-nok-mug-006.jpg',
          size: 'large',
          id: 2,
          linkUrl: 'shop/mugs'
        },
        {
          title: 'femmes',
          imageUrl: 'https://i.ibb.co/HpxV0gB/section-woman-002.jpg',
          size: 'large',
          id: 3,
          linkUrl: 'shop/femmes'
        },
        {
          title: 'hommes',
          imageUrl: 'https://i.ibb.co/Km6Mzzq/section-mens.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/hommes'
        }
      ]
};

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
  };