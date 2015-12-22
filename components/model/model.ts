/// <reference path="../../typings/angularjs/angular.d.ts" />

module LetsRace.ModelModule {
  export interface IModel {
    save();
    update();
    list();
    get();
    destroy();
  }

  export interface IRace extends IModel{
    name: string;
    description: string;
  }

  export class Race implements IModel {
    save() {
      console.log('save');
    }

    update() {
      console.log('save');
    }

    list() {
      console.log('save');
    }

    get() {
      console.log('save');
    }

    destroy() {
      console.log('save');
    }
  }

}
