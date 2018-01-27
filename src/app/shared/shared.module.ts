import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component'
import {SnackbarComponent} from './messages/snackbar/snackbar.component'


import {OrderService} from '../order/order.service'
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {RestaurantService} from '../restaurants/restaurants.service';
import {NotificationService} from './messages/notification.service'

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, RatingComponent,
            CommonModule, FormsModule, ReactiveFormsModule, SnackbarComponent]
})

export class SharedModule{

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ShoppingCartService, RestaurantService, OrderService, NotificationService]
    }
  }
}
