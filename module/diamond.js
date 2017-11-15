(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', ['$http', function($http) {
        var store = this;
        store.products = [];
        $http.get('./data.json').then(function(response) {

            var data = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;

            console.log(status);
            store.products = data;
            console.log(data);
        });
    }]);

    app.controller('PanelController', function() {
        //set the tab value to 1
        this.tab = 1;
        //this function reassign tab value to the value user pass in
        this.selectTab = function(tabSet) {
            this.tab = tabSet;
        };
        //this function accept a value and return true of false if the value matches current tab value
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });


    app.controller('ReviewController', function() {
        this.review = [];
        this.addView = function(product) {
            product.reviews.push(this.review);
            this.review = [];
        };
    });
    app.controller('GallerController', function() {
        this.current = 0;
        this.setCurrent = function(imageNumber) {
            this.current = imageNumber || 0;
        };
    });
})();