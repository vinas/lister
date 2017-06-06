app.factory('listsService', listsService);

function listsService($http) {

    var vm = this;

    vm.getListsByTypeId = getListsByTypeId;
    vm.getListById = getListById;
    vm.removeFromList = removeFromList;

    return vm;

    function getListsByTypeId(typeId) {
        return $http.get('api/Lists/byTypeId/'+typeId);
    }

    function getListById(listId) {
        return $http.get('api/Lists/getListById/'+listId);
    }

    function removeFromList(itemId) {
        return $http.get('api/Lists/removeItem/'+itemId);
    }
};
