import { Injectable } from '@angular/core';
import { StorageKeys } from 'src/enums/storage-keys.enum';
import { StorageUtil } from 'src/utils/storage.util';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _trainer?: Trainer; 

  get trainer(): Trainer | undefined {
    return this._trainer;
  }

  set trainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!);
    this._trainer = trainer;
  }

  constructor() {
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer);
  }

  public inCatched(pokemonName: string): boolean {
    if (this._trainer) {
      //console.log(this.trainer?.pokemon.includes(pokemonName))
      if(!this.trainer?.pokemon.includes(pokemonName)){
        return false;
      }
    }
    return true; 
  }
}
