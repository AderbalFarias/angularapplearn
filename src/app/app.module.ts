import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { UsersTestComponent } from './components/userstest/userstest.component';
import { ExampleComponent } from './components/example/example.component';
import { CliexamplesComponent } from './components/cliexamples/cliexamples.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataService } from './services/data.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UsersComponent,
        UsersTestComponent,
        ExampleComponent,
        CliexamplesComponent,
        NavbarComponent,
        PostsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [DataService, PostsService],
    bootstrap: [AppComponent]
})

export class AppModule { }
