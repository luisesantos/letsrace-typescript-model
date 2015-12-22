/// <reference path="../../typings/angularjs/angular.d.ts" />
var LetsRace;
(function (LetsRace) {
    var ModelModule;
    (function (ModelModule) {
        var Race = (function () {
            function Race() {
            }
            Race.prototype.save = function () {
                console.log('save');
            };
            Race.prototype.update = function () {
                console.log('save');
            };
            Race.prototype.list = function () {
                console.log('save');
            };
            Race.prototype.get = function () {
                console.log('save');
            };
            Race.prototype.destroy = function () {
                console.log('save');
            };
            return Race;
        })();
        ModelModule.Race = Race;
    })(ModelModule = LetsRace.ModelModule || (LetsRace.ModelModule = {}));
})(LetsRace || (LetsRace = {}));
//# sourceMappingURL=model.js.map