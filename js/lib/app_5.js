(function(){
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1
    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: '. . .',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'img/dodecahedron-01-full.jpg',
          thumb: 'img/dodecahedron-01-thumb.jpg'
        },
        {
          full: 'img/dodecahedron-02-full.jpg',
          thumb: 'img/dodecahedron-02-thumb.jpg'
        },
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: '. . .',
      canPurchase: false,
      soldOut: false,
      images: [
        {
          full: 'img/pentagonal-01-full.jpg',
          thumb: 'img/pentagonal-01-thumb.jpg'
        },
        {
          full: 'img/pentagonal-02-full.jpg',
          thumb: 'img/pentagonal-02-thumb.jpg'
        },
      ]
    }
  ];
})();
