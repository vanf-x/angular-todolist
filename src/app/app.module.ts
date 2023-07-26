import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { TasksInputBarComponent } from './tasks-input-bar/tasks-input-bar.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { PercentageBarComponent } from './percentage-bar/percentage-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListContainerComponent,
    TasksInputBarComponent,
    TasksListComponent,
    PercentageBarComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
