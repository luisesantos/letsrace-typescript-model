/// <reference path="../../typings/angularjs/angular.d.ts" />

module LetsRace.ModelModule {

  export interface IModel {
    save(): ng.IPromise<IModel>;
    update(): ng.IPromise<IModel>;
    list(params:any): ng.IPromise<IModel>;
    get(): ng.IPromise<IModel>;
    destroy(): ng.IPromise<IModel>;
  }

  export interface IRace extends IModel{
    name: string;
    description: string;
  }

  export interface IAddress extends IModel{
    address: string;
    city: string;
    state: string;
    zip: string;
  }

  export interface IPerson extends IModel{
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;
    address: IAddress;
  }

  export interface ITeam extends IModel{
    name: string;
    description: string;
  }

  export interface IParticipant extends IModel{
    team: ITeam;
    person: IPerson;
    race: IRace;
  }

  export interface ISection extends IModel{
    name: string;
    distance: string;
    description: string;
    race: IRace;
  }

  export interface IDivision extends IModel{
    name: string;
    gender: string;
    maximumAge: number;
    minimumAge: number;
    race: IRace
  }
}
