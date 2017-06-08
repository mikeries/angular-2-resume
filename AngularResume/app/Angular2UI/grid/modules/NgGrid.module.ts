import { NgModule, ModuleWithProviders } from '@angular/core';

import {NgGrid} from '../directives/NgGrid';
import {NgGridItem} from '../directives/NgGridItem';
import {NgGridItemEvent, NgGridItemConfig} from '../interfaces/INgGrid';
import {NgGridPlaceholder} from '../components/NgGridPlaceholder';


//import { NgGrid, NgGridItem, NgGridItemConfig, NgGridItemEvent, NgGridPlaceholder } from './NgGrid.module';
  
@NgModule({
  declarations:     [ NgGrid, NgGridItem, NgGridPlaceholder ],
  entryComponents:  [ NgGridPlaceholder ],
  exports:          [ NgGrid, NgGridItem ]
})
export class NgGridModule {}