# Angular Style Guide

---

**[Angular concepts & CLI](#markdown-header-angular-concepts-cli)**

* [Create a module](#markdown-header-create-a-module)
* [Create a component](#markdown-header-create-a-component)
* [Create a service](#markdown-header-create-a-service)

**[Project structure](#markdown-header-project-structure)**

* [Application](#markdown-header-application)
    1. [Modules](#markdown-header-1-modules)
    2. [Components](#markdown-header-2-components)
    3. [Services](#markdown-header-3-services)
    4. [Guards](#markdown-header-4-guards)
    5. [Pipes](#markdown-header-5-pipes)
    6. [Types](#markdown-header-6-types)
    7. [Validators](#markdown-header-7-validators)
    8. [Directives](#markdown-header-8-directives)
    9. [Submodules](#markdown-header-9-submodules)
* [Assets](#markdown-header-assets)
* [Environments](#markdown-header-environments)
* [Styles](#markdown-header-styles)

**[Using Angular concepts](#markdown-header-using-angular-concepts)**

* [Using modules](#markdown-header-using-modules)
    1. [Routing](#markdown-header-1-routing)
    2. [Nested routes](#markdown-header-2-nested-routes)
    3. [Lazy loading](#markdown-header-3-lazy-loading)
* [Using components](#markdown-header-using-components)
    1. [Template layout](#markdown-header-1-template-layout)
    2. [Data binding](#markdown-header-2-data-binding)
    3. [Reactive forms](#markdown-header-3-reactive-forms)
    4. [Dynamic components](#markdown-header-4-dynamic-components)
* [Using services](#markdown-header-using-services)
    1. [Dependency injection](#markdown-header-1-dependency-injection)
    2. [HttpClient](#markdown-header-2-httpclient)
* [Using guards](#markdown-header-using-guards)
* [Using pipes](#markdown-header-using-pipes)
* [Using directives](#markdown-header-using-directives)


**[Observable & RxJS](#markdown-header-observables-rxjs)**

**[Styling](#markdown-header-styling)**

* [7-1 pattern](#markdown-header-7-1-pattern)
* [BEM](#markdown-header-bem)
* [Mixins](#markdown-header-mixins)
* [Media queries](#markdown-header-media-queries)
* [Typography](#markdown-header-typography)
* [Theme](#markdown-header-theme)

**[Tools](#markdown-header-tools)**

* [Prettier](#markdown-header-prettier)
* [Husky](#markdown-header-husky)
* [Angular Material](#markdown-header-angular-material)
* [Flex Layout](#markdown-header-flex-layout)

**[Interceptors](#markdown-header-interceptors)**
 
---

## Angular concepts & CLI

If you are not yet familiar with Angular and the concepts it uses, start by looking over this [introduction](https://angular.io/guide/architecture).

Now that you know about modules, components, services and other concepts, let's see how easy it is to develop an Angular project by using [Angular CLI](https://angular.io/cli).

The CLI provides commands that help you speed up the development process and you should make use of them as much as possible. 
You should also take the short way and use the **command aliases** when entering the command lines.

You must always use **dash-case** (or "kebab-case") for **naming** the files/conceptual elements that you include in your project.

You can got through the [command overview](https://angular.io/cli#command-overview) and find more about each individual command by consulting the [Angular CLI documentation](https://angular.io/cli) subsections.

Below are mentioned the most common use cases of the [ng new](https://angular.io/cli/new) and [ng generate](https://angular.io/cli/generate) command.

### Create a module

A module corresponds to a specific feature in the application and should have a suggestive name (e.g. auth, home, products).

To include a new module in your application, use the following command line:

    ng g m my-module --routing
    
The `--routing` flag will automatically generate a routing module within the newly created module.

This command will generate the **my-module** directory containing the following files:

* **my-module.module.ts**
* **my-module-routing.module.ts**

### Create a component

A component can correspond either to an entire rendered page or to a specific section/element in that page and should have a suggestive name (e.g. login, login-form, password-field).

To include a new component in your application, use the following command line:

    ng g c my-component

This command will generate the **my-component** directory containing the following files:

* **my-component.component.ts**
* **my-component.component.scss**

### Create a service

A service processes different tasks for one or more components, increasing modularity and reusability, and should have a suggestive name (e.g. auth, users).

To include a new service in your application, use the following command line:

    ng g s my-service

This command will generate the **my-service.service.ts** file.

---

## Project structure

> :file_folder: [app](#markdown-header-application)

> :file_folder: [assets](#markdown-header-assets)

> :file_folder: [environments](#markdown-header-environments)

> :file_folder: [styles](#markdown-header-styles)

These should be the main directories in the **src** of your project's workspace.

### Application

The **app** represents the root module of the application.

> :open_file_folder: app

>> :file_folder: [core](#markdown-header-11-core-module)

>> :file_folder: [shared](#markdown-header-12-shared-module)

>> :file_folder: [my-module](#markdown-header-1-modules)

>> ...

>> **app.component.ts**

>> **app.module.ts**

>> **app-routing.module.ts**

> ...

Your Angular application's architecture should be **modular**.
That is why each directory within the root module corresponds to another individual module.

#### 1. Modules

An [Angular module](https://angular.io/guide/architecture-modules) includes the conceptual elements necessary for developing a specific feature in your application.
These should be well organised and categorized by their conceptual type.

> :open_file_folder: my-module

>> :file_folder: [components](#markdown-header-2-components)

>> :file_folder: [containers](#markdown-header-2-components)

>> :file_folder: [directives](#markdown-header-8-directives)

>> :file_folder: [guards](#markdown-header-4-guards)

>> :file_folder: [modules](#markdown-header-9-submodules)

>> :file_folder: [pipes](#markdown-header-5-pipes)

>> :file_folder: [services](#markdown-header-3-services)

>> :file_folder: [types](#markdown-header-6-types)

>> :file_folder: [validators](#markdown-header-7-validators)

>> **my-module.model.ts**

>> **my-module-routing.model.ts**

As you can see, your application should be not only modular, but well structured in what concerns the conceptual elements used.

This means that you will frequently make use of **imports** in your code.
Of course, you will do this in a way that is as elegant as how you structured your project.

How do you clean up your imports?

* declare & use path aliases for the modules' paths
* index each set of conceptual elements

The **src** directory should be set as base URL and every module should have a path declared at the compiler options in **tsconfig.json**, so you can use absolute imports instead of relative imports.
The paths should be prefixed with the project's prefix - **@app**. For instance, for the my-module module, the path should be **@app/my-module**.

    {
        ...
        "compilerOptions": {
            "baseUrl": "src",
            ...
            "paths": {
                "@app/core/*": ["app/core/*],
                "@app/shared/*": ["app/shared/*],
                "@app/my-module/*": ["app/my-module/*"],
                ...
                "@app/environments/*": ["environments/*"]
            }
        }
    }

Let's say you want to import a service in one of your component. 
Because the services are indexed, you can easily import it from **@app/my-module/services**.

All of this helps you have a clean, maintainable and extendable architecture.

##### 1.1. Core module

The core module contains conceptual elements that need to be instantiated only once, but used in multiple modules within the application, especially **services**.

In order to provide only singleton instances, you should import it in the root module - the **app** module. 
Afterwards, you can use everything you need from it, anywhere in your application.

Avoid importing the core module in other modules. This can create unwanted additional instances.

##### 1.2. Shared module

The shared module contains conceptual elements that will be used in multiple modules, but for which a new instance can be created in each module.

[Sharing a module](https://angular.io/guide/sharing-ngmodules) helps you setup the commonly used concepts in one module and use anything you need, anywhere in your application, by only importing it in the other modules.

#### 2. Components

An [Angular component](https://angular.io/guide/architecture-components) defines the view for either an individual UI element or an entire rendered page.
The component's class can contain computational logic, which makes the component smarter.

Therefore, within an Angular application you can include:

* dump components (called **components**)
* smart components (called **containers**)

> :open_file_folder: my-module

>> :open_file_folder: components

>>> :open_file_folder: my-component

>>>> **my-component.component.ts**

>>>> **my-component.component.css**

>>> ...

>>> ***index.ts***

>> :open_file_folder: containers

>>> :open_file_folder: my-container

>>>> **my-container.component.ts**

>>>> **my-container.component.css**

>>> ...

>>> ***index.ts***

>> ...

The distinction between components and containers is not technical, they are both Angular components in concept.
However, they have different purposes. Look into [how to use components](#markdown-header-using-components) for more details.

As you can see, they are categorized and indexed separately within the module.

Indexing **components**:

```typescript
import { MyComponentComponent } from './my-component/my-component.component';
...

export const components = [ MyComponentComponent, ... ];

export * from './my-component/my-component.component';
...
```

Indexing **containers**:

```typescript
import { MyContainerComponent } from './my-container/my-container.component';
...

export const containers = [ MyContainerComponent, ... ];

export * from './my-container/my-container.component';
...
```


#### 3. Services

An [Angular service](https://angular.io/guide/architecture-services) provides the application's computational logic.
Because in a components you should include only view-related functionality, you will delegate different processing tasks to the services.

> :open_file_folder: my-module

>> ...

>> :open_file_folder: services

>>> **my-service.service.ts**

>>> ...

>>> ***index.ts***

>> ...

Services are made available to components through [dependency injection](https://angular.io/guide/architecture-services#dependency-injection-di).

Any service that you use should be registered as a **provider**. You can provide services at the root level or to a specific module, through its 'providers' property. 

Indexing **services**:

```typescript
import { MyServiceService } from './my-service.service';
...
    
export const services = [ MyServiceService, ... ];

export * from './my-service.service';
export * from './my-provided-in-root-service.service';
...
```

The services provided in root should only be exported to be made available from the services section of the module.

#### 4. Guards

An [Angular guard](https://angular.io/guide/router#preventing-unauthorized-access) is a security provider, which prevents unauthorized navigation.

> :open_file_folder: my-module

>> ...

>> :open_file_folder: guards

>>> **my-guard.guard.ts**

>>> ...

>>> ***index.ts***

>> ...

Any guard that you use should be registered as a **provider**, same as for the services.

Indexing **guards**:

```typescript
import { MyGuardGuard } from './my-guard.guard';
...
    
export const guards = [ MyGuardGuard, ... ];

export * from './my-guard.guard';
...
```

#### 5. Pipes

An [Angular pipe](https://angular.io/guide/pipes) is used in a component's template to handle data transformation.

There is a set of **built-in pipes** that you can use, but you can also create [custom pipes](https://angular.io/guide/pipes#creating-pipes-for-custom-data-transformations) within your application.

> :open_file_folder: my-module

>> ...

>> :open_file_folder: pipes

>>> **my-pipe.pipe.ts**

>>> ...

>>> ***index.ts***

>> ...

Any pipe that you use should be registered as a **provider**, same as for the services.

Indexing **pipes**:

```typescript
import { MyPipePipe } from './my-pipe.pipe';
...
    
export const pipes = [ MyPipePipe, ... ];

export * from './my-pipe.pipe';
...
```

#### 6. Types

Any **data type** that you use (e.g. class, enum, interface) should be included in the application, categorized and indexed.

> :open_file_folder: my-module

>> ...

>> :open_file_folder: types

>>> :open_file_folder: classes

>>>> **my-class.class.ts**

>>>> ...

>>>> ***index.ts***

>>> :open_file_folder: enums

>>>> **my-enum.enum.ts**

>>>> ...

>>>> ***index.ts***

>>> :open_file_folder: interfaces

>>>> **my-interface.interface.ts**

>>>> ...

>>>> ***index.ts***

>> ...

You should declare any data type independently in one file, using the associated file extension:

* **.class** for the class files
* **.enum** fot the enum files
* **.interface** for the interface files

Indexing **classes**:

```typescript
export * from './my-class.class';
...
```

Indexing **enums**:

```typescript
export * from './my-enum.enum';
...
```

Indexing **interfaces**:

```typescript
export * from './my-interface.interface';
...
```

#### 7. Validators

An [Angular validator](https://angular.io/api/forms/Validators) is added to a form field to check the data filled in by the user.

There is a set of **built-in validators** that you can use, but you can also create **custom validators** within your application.
A custom validator represent nothing more than a simple TypeScript function that processes the data in the form field, providing the validation's result.

> :open_file_folder: my-module

>> ...

>> :open_file_folder: validators

>>> **my-validator.validator.ts**

>>> ...

>>> ***index.ts***

Indexing **validators**:

```typescript
export * from './my-validator.validator';
...
```

#### 8. Directives

An [Angular directive](https://angular.io/guide/architecture-components#directives) provide instructions based on which the templates are dynamically rendered (e.g. _*ngIf_, _*ngFor_). 

There is a set of [built-in directives](https://angular.io/guide/built-in-directives) that you can use, but you can also create **custom directives** within your application.

> :open_file_folder: my-module

>> ...

>> :open_file_folder: directives

>>> **my-directive.directive.ts**

>>> ...

>>> ***index.ts***

>> ...

Indexing **directives**:

```typescript
import { MyDirectiveDirective } from './my-directive.directive';
...
    
export const directives = [ MyDirectiveDirective, ... ];

export * from './my-directive.directive';
...
```

#### 9. Submodules

The submodules are modules that do not depend on the root module, but on one module in particular.
You should include them in the **modules** section of that respective "parent" module.

One main module is associated to an application feature.
One submodule should be associated to a specific task regarding that main feature, including the conceptual elements necessary for developing it.

If one submodule's implementation does not depend on its parent module, you could move it in the root module.
The task may be related to the parent's associated feature, but the logic underneath says there can be no bound between these two and moving the module will not make any difference.
However, this is not necessary a rule.
It can be a submodule if you consider it is not that important for the application so to declare it the root module.

The main idea is to have the features well structured in modules, and to have the modules well structured in submodules if there are plenty of conceptual elements (usually containers and components) required for implementing those features.

Let's say that your web platform includes a *customers* module, within which are included: 

* a *customers* page
* a *customer profile* page
* a *customer cars* page
* a *customer insurances* page
* ...

If these pages are complex and implementing them would result in a large number of conceptual elements, you should create a submodule for each individual page, except for the main page.
For the customers general info and common UI elements, the application logic will be included in the parent module.
Any other info and logic regarding individual tasks, will be included in the submodules.

For instance, you will retrieve the the customer's id and name using the main customers service in the module, while retrieving any additional profile info using the customer-profile service in the submodule.

Because it is still a module in concept, you should follow the [module's structure](#markdown-header-1-modules) when implementing it.
You should also declare and use **path aliases** for the submodules' paths, the same way you did for the modules:

    {
        ...
        "compilerOptions": {
            "baseUrl": "src",
            ...
            "paths": {
                ...
                "@app/customers/*": ["app/customers/*],
                "@app/customer-profile/*": ["app/customers/modules/customer-profile]
                ...
            }
        }
    }


### Assets

Here you can store any asset required in the project, categorized by type.
Therefore, within the assets directory you can have:

* **fonts**
* **icons**
* **i18n** (for the translation files)
* **logos**
* **images**
* ...

### Environments

Here you will include the necessary from the following environment files:

* **environment.ts**
* **environment.dev.ts**
* **environment.stage.ts**
* **environment.prod.ts**

Each file exports an **environment** constant with the environment variables declared within as key-value data structures.

You will store the local configuration environment variables in the **environment.ts** file.
For the other environments, you should add the associated **configuration extension** to the file's naming.

```typescript
export const environment = {
  production: false,
  API: 'http://localhost:8000',
  WEB_HOST: 'http://localhost:4200',
  ...
}
```

Some environments may require enabling the production mode.
You can do this by changing the value to *true*.

Within the application, the **environment.ts** file is used.
In order to adapt the variables to the required environment, you have to mention which file will be used for each configuration of your project within the ***angular.json*** file:

```
...
"projects": {
    "my-project": {
        ...
        "architect": {
            "build": {
                "configurations": {
                    "prod": {
                        "fileReplacements": [
                            {
                              "replace": "src/environments/environment.ts",
                              "with": "src/environments/environment.prod.ts"
                            }
                          ],
                    },
                    "stage": {
                        "fileReplacements": [
                            {
                              "replace": "src/environments/environment.ts",
                              "with": "src/environments/environment.stage.ts"
                            }
                          ],
                    },
                    "dev": {
                        "fileReplacements": [
                            {
                              "replace": "src/environments/environment.ts",
                              "with": "src/environments/environment.dev.ts"
                            }
                          ],
                    }
                }
                ...
            }
            "server": {
                "configurations": {
                    "prod": {
                        "fileReplacements": [
                            {
                              "replace": "src/environments/environment.ts",
                              "with": "src/environments/environment.prod.ts"
                            }
                          ],
                    },
                    "stage": {
                        "fileReplacements": [
                            {
                              "replace": "src/environments/environment.ts",
                              "with": "src/environments/environment.stage.ts"
                            }
                          ],
                    },
                    "dev": {
                        "fileReplacements": [
                            {
                              "replace": "src/environments/environment.ts",
                              "with": "src/environments/environment.dev.ts"
                            }
                          ],
                    }
                }
                ...
            }
            ...
        }
        ...
    }
}
...
```

You should include and configure only the environments required by the project you are working on.

When building the application, you should specify the configuration to be used within the `--configuration` flag.

### Styles

Here you will setup your project's common [styling](#markdown-header-styling), structuring it based on the SASS [7-1 pattern](#markdown-header-7-1-pattern).

---

## Using Angular Concepts

Besides including and structuring the conceptual Angular elements within your application, you should also be careful at how you implement and make use of them.

Here are some good practices, tips & tricks that any Linnifian web developer should keep in mind when developing an Angular application.

### Using modules

The class in the **module file** of each [Angular module](https://angular.io/guide/architecture-modules) is associated the **[@NgModule()](https://angular.io/api/core/NgModule)** decorator.

Within the decorator you should pass a metadata object including the module's properties:

* `declarations` of your *containers*, *components* and *directives*
* `providers` which will be your *services*, *guards* and *pipes*
* `imports` of necessary conceptual elements
* `exports` of necessary conceptual elements
* `bootstrap` of the main application view (usually the *AppComponent*) - set only in the **root module**

Keep your code and your imports clean by following the next structure for the module metadata setup:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyModuleRoutingModule } from './services-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import * as fromGuards from './guards';
import * as fromPipes from './pipes';
import * as fromDirectives from './directives';

@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
    ...fromDirectives.directives
  ],
  imports: [
    CommonModule,
    MyModuleRoutingModule,
    SharedModule
    // other modules or conceptual elements that need to be imported for use
  ],
  exports: [
    // the conceptual elements that need to be exported for use
  ],
  providers: [
    ...fromServices.services,
    ...fromGuards.guards,
    ...fromPipes.pipes
  ]
})
export class MyModuleModule { }
```

#### 1. Routing

The class in the **routing module file** of each module is also associated the **[@NgModule()](https://angular.io/api/core/NgModule)** decorator.

Within this you only configure imports and exports, [defining your routes](https://angular.io/guide/router#defining-a-basic-route) in a Routes type object.

***app-routing.module.ts***

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from '@app/core/containers';

const routes: Routes = [
  {
    path: 'first-module-path',
    loadChildren: () => import('./first/first.module').then(m => m.FirstModule)
  },
  {
    path: 'second-module-path',
    loadChildren: () => import('./second/second.module').then(m => m.SecondModule)
  },
  {
    path: '**', // for any other mismatching route
    component: NotFoundComponent // the user is redirected to the NotFoundComponent view
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
```

***first-routing.module.ts***

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: fromContainers.FirstComponent,
    canActivate: [ fromGuards.FirstGuard ]
  },
  {
    path: '',
    component: fromContainers.MainLayoutComponent,
    children: [
      {
        path: 'one-nested-path',
        pathMatch: 'full',
        component: fromContainers.OneNestedComponent
      },
      {
        path: 'another-nested-path',
        pathMatch: 'full',
        component: fromContainers.AnotherNestedComponent,
        canActivate: [ fromGuards.NestedGuard ]
      }
    ]
  }, 
  {
    path: '**', // for any other mismatching route
    redirectTo: 'one-nested-path' // the user is redirected to a specific path
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class FirstRoutingModule { }
```

***second-routing.module.ts***

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: fromContainers.SecondComponent,
    canActivate: [ fromGuards.SecondGuard ]
  },
  {
    path: 'second-dependent-module-path',
    loadChildren: () => import('./modules/second-dependent/second-dependent.module').then(m => m.SecondDependentModule)
  },
  {
    path: '**', // for any other mismatching route
    redirectTo: '' // the user is redirected to the root path of the module
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class SecondRoutingModule { }
```

By including these configurations in your root and child modules, different containers will now be rendered within the **index.html** when accessing specific route paths:

* **NotFoundComponent** as a *wild card route* for any not found route path starting from the `{{WEB_HOST}}/` root.
* **FirstComponent** for the `{{WEB_HOST}}/first-module-path` route path
* **OneNestedComponent** within the **MainLayoutComponent** for the `{{WEB_HOST}}/first-module-path/one-nested-path` route path
* **AnotherNestedComponent** within the **MainLayoutComponent** for the `{{WEB_HOST}}/first-module-path/another-nested-path` route path
* **SecondComponent** for the `{{WEB_HOST}}/second-module-path` route path

The routes included in the **SecondDependentRoutingModule** will have as root the `{{WEB_HOST}}/second-module-path/second-dependent-module-path/` route path.

The route's component should be a **container**.
This is, after all, the main wrapper of a page/section, which includes components defining the rendered template elements.

#### 2. Nested routes

[Nested routes](https://angular.io/guide/router#nesting-routes) are declared within a route using the **children** property.
In a module you can declare routes relative to one other route, which is associated a path and component.

Let's say you have a main-layout component, which defines a template within which you want different content to be rendered, according to the path you access.

Firstly, you must mark the content section in your layout using the `<router-outlet>` tag.
That section's content will be replaced with the declared child component's template, depending on the path you access.

Secondly, define the route and its children routes just like in the ***first-routing.module.ts*** file above.

#### 3. Lazy loading

An Angular application's modular architecture allows you to make use of modules [lazy loading](https://angular.io/guide/lazy-loading-ngmodules) design pattern.

Instead of declaring the children of one route, use the **loadChildren** property, within which you will declare a *dynamic import* for a specific child module/submodule.
This will make the routes in the child module nested routes for the route declared in the parent module.
 
For ordinary nested routes, the module implying every used conceptual element is already loaded.
Lazy loaded modules will be imported and loaded only when accessing a path with the parent route's path as root.

Let's take a look at the routing examples above.
As you can see in the ***app-routing.module.ts*** file, the FirstModule is lazy loaded and will be imported, respectively made visible to the application only when accessing a nested route's path with `{{WEB_HOST}}/first-module-path/` as root.
Same for the SecondModule, when accessing a nested route's path with `{{WEB_HOST}}/second-module-path/` as root.

In the ***second-routing.module.ts*** you can see that the SecondDependentModule is lazy loaded on the `{{WEB_HOST}}/second-module-path/second-dependent-module-path/` route path.
This means that the submodule will be imported and made visible from that module only when accessing a nested path with the mentioned route path as root.

The modular architecture, together with the lazy loading design pattern help decrease load times for large applications with lots of routes and conceptual elements.

### Using components

The class in the **component file** of each [Angular component](https://angular.io/guide/architecture-components) is associated the **[@Component()](https://angular.io/api/core/Component)** decorator.

Within the decorator you should pass a metadata object including at least the following component properties:

* **selector** of the component (the *tag name* defining your component)
* **template** within the component - inline **HTML** 
* **styleUrls** of the component - array of separate **.scss** files

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <span> my-component works! </span>

    <!-- Here comes the HTML view of your component, as inline template -->
  `,
  styleUrls: [ './my-component.component.scss' ]
})
export class MyComponentComponent { }
```

These properties in the component's metadata are automatically filled in when generating a component using the `ng g c my-component` command, after setting the schematics when [creating your project](#markdown-header-create-a-project).
Any [component property](https://angular.io/api/core/Component) can be included afterwards, depending on what you need.

For instance, if you want your dumb components to *re-render only on inputs change*, you must include the **changeDetection** property, with the **ChangeDetectionStrategy.OnPush** value.

Within your application your will include both smart & dumb components (**containers** and **components**).
Besides including the necessary metadata, you should follow the next general structures when defining them:

***my-container.component.ts***

```typescript
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyClass } from '@app/my-module/types/classes';
import { MyService } from '@app/my-module/services';

@Component({
  selector: 'app-my-container',
  template: `
    <app-my-component
      [data]="myData$ | async"
      (selectAction)="onSelectAction($event)"
    >
    </app-my-component>
  `,
  styleUrls: [ './my-container.component.scss' ]
})
export class MyContainerComponent implements OnInit { 

  myData$: Observable<MyClass>;

  constructor(private myService: MyService) {}
  
  ngOnInit(): void {
    this.myData$ = this.myService.data;
    // or initialize your data using a function that returns the respective value
    this.myData$ = this.getMyData();
  }

  onSelectAction(name: string): void {
    this.myService.displaySelected(name);
  }

  // when the retrieval is not that straight-forward (not only a method call from the service)
  // use a method like this, which returns the value of your data
  private getMyData(): Observable<MyClass> {
    return this.myService.data
      .pipe(
        // apply pipeable operators to transform the initially emitted value
      );
  }

}
```

***my-component.component.ts***

```typescript
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { MyClass } from '@app/my-module/types/classes';

@Component({
  selector: 'app-my-component',
  template: `
    <span> {{ data.name }} </span>

    <button (click)="selectAction.emit(data.name)">
      emit event
    </button>

    <button (click)="onSelectAction()">
      call function to emit event
    </button>
  `,
  styleUrls: [ './my-component.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponentComponent implements OnInit {
  
  @Input() data: MyClass;
  @Output() selectAction = new EventEmitter<string>();  // always declare the event type you intend to emit

  constructor() {}
  
  ngOnInit(): void {
  
  }
  
  onSelectAction(): void {
    this.selectAction.emit(this.data.name);
  }
}
```

[OnInit](https://angular.io/api/core/OnInit) interface implementation is added automatically to the class when generating the component using the CLI command.
[ngOnInit()](https://angular.io/api/core/OnInit#methods) method is invoked once the component is instantiated.
Therefore, here you should make every setup or initialization required within your component.

Fell free to check the others [Angular Core structures](https://angular.io/api/core#structures).
You never know when this will come in handy, just knowing that they exist.

In the container you should **inject your services**, instantiating them within the constructor.
You will make use of them, delegating different tasks, such as requesting data retrieval from the API.

You should declare the UI customized view in your components, which you will include in your container's template.
Make use of [data binding](https://angular.io/guide/binding-syntax) to make your components communicate with one another.

As you can see in the example above, *myData$* is an [Observable](https://angular.io/guide/observables-in-angular) that delivers values of MyClass type.
You can subscribe to an Observable from within the template, using the **[async pipe](https://angular.io/api/common/AsyncPipe)** to pass the value as input to the component.

Every method and property that you use **exclusively in your current class** should be ***private***.
You will place these methods at the end of the class, below the public ones.

You should leave as ***public*** only the methods that are **called from with in the component's template or from other classes**.

#### 1. Template layout

Writing HTML code in order to define your UI views is a common task for a frontend developer.
You just place the desired elements within your template, the way you want them or the way they should be, according to a mock-up.
However, the [styling](#markdown-header-styling) part can be more challenging than expected. It is the little details that may bring about unexpected problems.

Angular helps you develop **single-page applications**.
This means that a single HTML file is rendered (the ***index.html*** file), but its **content is dynamically changed based on the route accessed**.

What you must be careful at is making your pages and elements **fit the main wrapper** and, recursively, the other wrappers that you define within your templates.
If you do not pay that much attention on this, you may find yourself in a situation where the layout does not look as you would have expected or certain events that you want to handle within the page do not work properly.

That is the moment that you wish to avoid.
You will have to go through the template, from the element on which the problem occurred all the way to the main wrapper, and find out what causes the problem.
At some point, it will become frustrating, **debugging your application** over and over just because of a single CSS property.

Think ahead and make sure everything is in place starting from the big boxes.
Before you start implementing any page in your application, study the mock-up or picture the layout within your mind.
Take into consideration not only where everything is placed, but **how it is placed**.

Although everything looks alright from the beginning, you should not forget to **set at least the following properties** on your elements:

* **width**
* **height**
* **overflow**
* **display**

In some cases, this may seem useless and you omit setting them.
Then, you open your web application using a different browser and you notice that everything is messed up.
No, unfortunately they do not work the same way when it comes to rendering customized HTML pages.

Angular is a framework developed by Google.
As expected, when using **Google Chrome** as your browser, you will encounter less issues.
But try opening your application on a Safari browser and see how it looks.
Other browsers (such as *Opera*, *Mozilla Firefox*) may behave similarly to Google Chrome, but **Safari** is the most 'dramatic' of them all.

You should frequently **test your web platform in different browsers** from the beginning.
You do not have to do this obsessively while developing, but you may find it useful to do it after implementing one page or a complex page section.

#### 2. Data binding

[Data binding](https://angular.io/guide/binding-syntax) provides you the possibility to customize your components and make them communicate. 
There are 2 data binding types that are commonly and most frequently used:

* **[property binding](https://angular.io/guide/property-binding)** - setting values on elements and passing data as **input** to one component
* **[event binding](https://angular.io/guide/event-binding)** - listening for certain events and emitting an event as **output** from one component

Although Angular already provides a syntax for implementing [two-way binding](https://angular.io/guide/two-way-binding), you should establish a bidirectional communication between components by using both the **property** and **event** binding separately on the component.
This keeps the code clean, easy to read and understand.

If you want to make use of a certain HTML element, look into its **built-in properties**.

If you want to pass data between two different components, you can make use of the [@Input() and @Output() properties](https://angular.io/guide/inputs-outputs).

The **[@Input()](https://angular.io/api/core/Input)** decorator allows one class variable to become a **component property**, which would be set within the template of a wrapping component.

The **[@Output()](https://angular.io/api/core/Output)** decorator allows a class variable to become an **event emitter**.
When triggered, this will emit an **$event** value, data which can be used when handling the event within the template of a wrapping component.
If the output event calls on a method from the class, not only should that method be ***public***, but its name should include the **'on' suffix**, so you know that it is meant to be invoked from within the template, on an event trigger.

In the examples above you can see how a container communicates with a child component, making use of one input and one output.

#### 3. Reactive forms

You must keep in mind that any form you will be implementing within your Angular application will be a [reactive form](https://angular.io/guide/reactive-forms).

Keep your code clean by following the next structure when implementing reactive forms:

***my-form.component.ts***

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyFormService } from '@app/my-module/services';
import { MyClass } from '@app/my-module/types/class';

@Component({
  selector: 'my-form',
  template: `
    <form [formGroup]="form">
      <mat-form-field>
        <mat-label> {{ 'required field' | sentancecase }} </mat-label>
        <input
          matInput 
          [formControl]="requiredFormFieldKeyControl"
        />
      </mat-form-field>

      <mat-form-field>
        <mat-label> {{ 'disabled field' | sentancecase }} </mat-label>
        <input
          matInput 
          [formControl]="disabledFormFieldKeyControl"
        />
      </mat-form-field>

      <mat-form-field>
        <mat-label> {{ 'pattern validation field' | sentancecase }} </mat-label>
        <input
          matInput 
          [formControl]="patternValidationFormFieldKeyControl"
        />
      </mat-form-field>

      <mat-form-field>
        <mat-label> {{ 'required email field' | sentancecase }} </mat-label>
        <input
          matInput 
          [formControl]="requiredEmailFormFieldKeyControl"
        />
      </mat-form-field>
    </form>
  `,
  styleUrls: [ './my-form.component.scss' ]
})
export class MyFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private myFormService: MyFormService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  get requiredFormFieldKeyControl(): FormControl {
    return this.form.get('requiredFormFieldKey') as FormControl;
  }

  get disabledFormFieldKeyControl(): FormControl {
    return this.form.get('disabledFormFieldKey') as FormControl;
  }

  get patternValidationFormFieldKeyControl(): FormControl {
    return this.form.get('patternValidationFormFieldKey') as FormControl;
  }

  get requiredEmailFormFieldKeyControl(): FormControl {
    return this.form.get('requiredEmailFormFieldKey') as FormControl;
  }

  onSubmitForm(): void {
    const myData = new MyClass();

    myData.requiredValue = this.requiredFormFieldKeyControl.value;
    myData.disabledValue = this.disabledFormFieldKeyControl.value;
    myData.patternValidationValue = this.patternValidationFormFieldKeyControl.value;
    myData.requiredEmailValue = this.requiredEmailFormFieldKeyControl.value;

    this.myFormService.saveData(myData);
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      requiredFormFieldKey: ['', Validators.required],
      disabledFormFieldKey: [{ value: 'preset value', disabled: true}],
      patternValidationFormFieldKey: ['', Validators.pattern('\\+([-() ]?\\d[-() ]?){11,13}')], // RegEx structure defining the pattern
      requiredEmailFormFieldKey: ['', [ Validators.required, Validators.email ]]
    });
  }
}
```

Any **FormGroup** and **FormArray** should be instantiated and initialized using **[FormBuilder](https://angular.io/api/forms/FormBuilder)**. 

Within a **[FormGroup](https://angular.io/api/forms/FormGroup)** structure, **each control is identified by key**.
To have access to every control independently, you should declare a **getter for each one of them**.
In the example above, the controls in the FormGroup have FormControls as values.
But the values may be other nested FormGroups or FormArrays, depending on the form structure that you want to implement.

As you can see, the control getters are named after the control's key:

* `${controlKey}Control` if the value is a FormControl
* `${controlKey}Group` if the value is a FormGroup
* `${controlKey}Array` if the value is a FormArray

The built-in *getByKey* on a FormGroup returns an **[AbstractControl](https://angular.io/api/forms/AbstractControl)**, which is the base class for the three form classes mentioned above.
You will make use of **Type Assertion** to specify the exact structure type retrieved, which you should know better because you are the one who instantiated and initialized the form.

A **[FormArray](https://angular.io/api/forms/FormArray)** structure usually includes **multiple identical form structures, identified by index**.

Below is an example of a FormArray implementation, including one FormGroup, which is multiplied by the user on a certain event.

***my-form-array.component.ts***

```typescript
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { MyFormService } from '@app/my-module/services';
import { MyClass } from '@app/my-module/types/classes';
import { MyFormGroupComponent }  from '@app/my-module/components';

@Component({
  ...
})
export class MyFormArrayComponent implements OnInit {
  formArray: FormArray;

  @ViewChildren(MyFormGroupComponent) formGroupComponents: QueryList<MyFormGroupComponent>;

  constructor(
    private formBuilder: FormBuilder,
    private myFormService: MyFormService
  ) { }

  ngOnInit(): void {
    this.initFormArray();
  }

  get formGroups(): FormGroup[] {
    return this.formArray.controls as FormGroup[]; // each formGroup should be passed as input to the child form component
  }

  onAddAnotherFormSection() {
    this.formArray.push(this.formGroup);
  }

  onSubmitFormArray() {
    const myDataSet: MyClass[] = [];

    this.formGroupComponents.toArray().forEach((formGroupComponent: MyFormGroupComponent) =>
      myDataSet.push(formGroupComponent.myData) // you should declare a getter within the child form component to retrieve the values in the form group
    );

    this.myFormService.saveDataSet(myDataSet);
  }

  private initFormArray() {
    this.formArray = this.formBuilder.array([
      this.formGroup
    ]);
  }

  private get formGroup(): FormGroup {
    return this.formBuilder.group({
        firstFormFieldKey: [''],
        secondFieldFieldKey: ['']
    });
  }
}
```

If you want to build a form that includes multiple FormGroups, but which are different, this should be a FormGroup of nested FormGroups.

Let's say you want to build a form that will include other 2 different forms.
You will have a wrapping FormGroup and each control in this will have another FormGroup as value and only the nested groups will have FormControls as control values.

How do you handle such forms?

* generate a component for each FormGroup (1 for the main group, 2 for the nested groups)
* within ***the wrapping group's component class*** you declare the getters for its 2 controls, which **initially are empty FormGroups**
* pass each FormGroups retrieved through the getters as input to the corresponding component
* within ***each nested group's component class*** you **add the respective group's controls** and declare the getters for them
* now that you have access to the FormControls, you can start implementing the form's template
* within ***the wrapping group's component class*** you access the nested groups' components instantiated within the template, making use of the **[@ViewChildren()](https://angular.io/api/core/ViewChildren)** or the **[@ViewChild()](https://angular.io/api/core/ViewChild)** decorator
* within ***each nested group's component class*** you declare **public getters that retrieve the values in each nested group**
* on **submit**, within the wrapping group's component class you will make use of the nested groups' components and the declared getters to gather all the form data

Do not forget to **declare a type for each data structure used within a FormGroup**, should it be a wrapping group or a nested one.

Following the implementation above, the nested forms will be both initialized and managed within their components.
The wrapping form has no responsibility over them, it can only access and use them.
Therefore, if any modification is required within a nested form, you will affect only its specific component individually.

***my-nested-form.component.ts***

```typescript
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyClass } from '@app/my-module/types/classes';

@Component({
  ...
})
export class MyFormArrayComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  get firstFormFieldKeyControl(): FormControl {
    return this.form.get('firstFormFieldKey') as FormControl;
  }

  get secondFormFieldKeyControl(): FormControl {
    return this.form.get('secondFormFieldKey') as FormControl;
  }

  get myData(): MyClass {
    const myData = new MyClass();

    myData.firstFormFieldKey = this.firstFormFieldKeyControl.value;
    myData.secondFormFieldKey = this.secondFormFieldKeyControl.value;

    return myData;
  }

  private initForm() {
    this.form.addControl('firstFormFieldKey', new FormControl('', Validators.required));
    this.form.addControl('secondFormFieldKey', new FormControl('', Validators.required));
  }
}
```

#### 4. Dynamic components

So far you know that the templates rendered within the ***index.html*** file are chosen based on the [routes](#markdown-header-1-routing), respectively the [nested routes](#markdown-header-2-nested-routes) configured in the routing modules.

You should know that Angular provides an API for **[loading components dynamically](https://angular.io/guide/dynamic-component-loader)** within a template.
This allows you to change the rendered view **based on certain states**, regardless of the routing configuration.
Is this rocket science? Nah, not at all.

Instead of defining a fixed reference to the component in the template, you must define an **[anchor point](https://angular.io/guide/dynamic-component-loader#the-anchor-directive)**, to mark the place where the components will be rendered.
To do this, you will make use of the `<ng-template>` element, accessing its view container and loading the required components within this template reference.

Within the ***shared*** module you will include the following directive, which will allow you to access an element's view container:

***dynamic-template.directive.ts***

```typescript
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicTemplate]',
})
export class DynamicTemplateDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }
}
```

The **[ViewContainerRef](https://angular.io/api/core/ViewContainerRef)** class gives you access to the element's view container and allows you to **dynamically attach views to a component**. 

***my-component.component.ts***

```typescript
import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DynamicTemplateDirective } from '@app/shared/directives';

@Component({
  selector: 'app-my-component',
  template: `
    <div>
      <h1> {{ 'The component below is dynamically loaded' }} </h1>
      <ng-template dynamicTemplate></ng-template>
    </div>
  `,
  styleUrls: [ 'my-component.component.scss' ]
})
export class MyComponentComponent implements OnInit {
  @Input('component') set _component(component: any) {
    if ( component ) {
      this.loadComponent(component);
    }
  }

  @ViewChild(DynamicTemplateDirective) dynamicTemplateHost: DynamicTemplateDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
  
  }

  private loadComponent(component: any): void {
    const componentFactory: ComponentFactory = this.componentFactoryResolver.resolveComponentFactory(component); // instantiate a factory for the given component

    const hostViewContainerRef: ViewContainerRef = this.dynamicTemplateHost.viewContainerRef; // access the view container of the anchor point
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(componentFactory); // create & attach a component's instance to the view container
    // you can use the reference to the loaded component to access the created instance -> componentRef.instance
  }
}
```

In order to **create components instances**, you need the **[ComponentFactory](https://angular.io/api/core/ComponentFactory)** classes of the respective components.
These are generated using the provided **[ComponentFactoryResolver](https://angular.io/api/core/ComponentFactoryResolver)** class.

As you can see in the example above, when **dynamically loading components** you need to:

* instantiate a factory for the given component
* access the view container of the component's future host (the previously defined anchor point)
* use the component's factory to create & attach the component's instance to the host

**[@ViewChild](https://angular.io/api/core/ViewChild)** && **[@ViewChildren](https://angular.io/api/core/ViewChildren)** decorators configure **observable view queries**, which allow you to access **instances of template elements/nested components** based on their selectors.
You can either retrieve one specific instance or a list ([QueryList](https://angular.io/api/core/QueryList)) of instances identified by a given selector.

These allows you to **access a child component's instance from a parent component**.
You can make use of this in your leverage, to better structure your code within the components.
Everything that a child component can do must be defined within its own class.
A parent component should not be responsible of any process regarding its children.
I should only know what they can do, to call on it when necessary.

### Using services

The class of each [Angular service](https://angular.io/guide/architecture-services) is associated the **[@Injectable()](https://angular.io/api/core/Injectable)** decorator.

#### 1. Dependency injection

External sources, such as services, guards and pipes are made available for use within other application classes through [dependency injection](https://angular.io/guide/dependency-injection).

To make services available to be injected as dependency, you must specify in which injector each of them will be provided:

* in a **specific NgModule** in the application - by importing the indexed services in that module and mentioning them as `providers` within its metadata
* at application-level, in the root **app** module - by passing within the service's ***@Injectable()*** decorator a metadata object including the 'providedIn' property together with the ***'root'*** value

#### 2. HttpClient

You will establish the **communication between your Angular application and your API server** over the [HTTP protocol](https://angular.io/guide/http), using the **[HttpClient](https://angular.io/api/common/http/HttpClient)** service provided by the framework.

Within your root **app** module you have to [setup the server communication](https://angular.io/guide/http#setup-for-server-communication), importing the **[HttpClientModule](https://angular.io/api/common/http/HttpClientModule)**.

When using HttpClient to handle HTTP transactions you have no choice but to make use of [RxJS observables and operators](#markdown-header-observables-rxjs). 
That is because the **methods to perform HTTP requests** provided by the client service have an **[Observable](https://angular.io/guide/observables)** return type.


### Using guards

The class of each [Angular guard](https://angular.io/guide/router#preventing-unauthorized-access) is associated the **[@Injectable()](https://angular.io/api/core/Injectable)** decorator.

To make guards available to be injected as dependency, you must specify in which injector each of them will be provided:

* in a **specific NgModule** in the application - by importing the indexed guards in that module and mentioning them as `providers` within its metadata
* at application-level, in the root **app** module - by passing within the guard's ***@Injectable()*** decorator a metadata object including the 'providedIn' property together with the ***'root'*** value

There are different types of guards that you can include in your application.
Angular provides the following **interfaces** that your guard classes can implement to customize and configure your routing options:

* **[CanActivate](https://angular.io/api/router/CanActivate)**
* **[CanActivateChild](https://angular.io/api/router/CanActivateChild)**
* **[CanDeactivate](https://angular.io/api/router/CanDeactivate)**
* **[Resolve](https://angular.io/api/router/Resolve)**
* **[CanLoad](https://angular.io/api/router/CanLoad)**

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyService } from '@app/my-module/services';
import { MyClass } from '@app/my-module/types/classes';

@Injectable()
export class MyDataGuard implements CanActivate {
  constructor(
    private myService: MyService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id: number = +next.paramMap.get('id');

      return this.myService
        .get(id)
        .pipe(
          map((data: MyClass) => {
              if ( data ) {
                return true; // this allows to access the guarded page
              }
              this.router.navigate(['not-found']); // the user is redirected to the 'not-found' path
              return false; // not being allowed to access the guarded page
          })
        );
  }
}
```

The guard class in the example above implements the **CanActivate** interface.
By implementing the ***canActivate()*** method, you tell the router when to let the user access a certain route and when not to. 
In order to associate this kind of guards to a specific route, you just mention them as values for the `canActivate` property of that route within the [routing module](#markdown-header-1-routing).

### Using pipes

The class of each [Angular pipe](https://angular.io/guide/pipes) is associated the **[@Pipe()](https://angular.io/api/core/Pipe)** decorator.

Within the decorator you should pass a metadata object including the pipe's `name` property.
When you want to transform certain data values **within the template** using a pipe, you will invoke it using its preset name.

One custom pipe class should implement the provided **[PipeTransform](https://angular.io/api/core/PipeTransform)** interface.
When implementing the ***transform()*** method you should declare the parameter's type and provide the computational logic for the transformation.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentancecase'
})
export class SentanceCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return;
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

```

If you apply this custom pipe on a string value **within the template**, the rendered view will embed the necessary transformations.
For instance, `{{ 'my string' | sentancecase }}` will display the provided string as `My string`.

You can use both built-in and custom pipes even **in your classes**, by instantiating them within the constructor and calling the ***transform()*** method wherever needed.

### Using directives

The class of each [Angular directive](https://angular.io/guide/architecture-components#directives) is associated the **[@Directive()](https://angular.io/api/core/Directive)** decorator.

Within the decorator you should pass a metadata object including the directive's `selector` property.
When you want to instantiate a directive within the template, you will make use of its identifier, which is its preset selector.

Both built-in and custom directives can be:

* **[Attribute directives](https://angular.io/guide/attribute-directives)** - may change the **appearance and behaviour of DOM elements**
* **[Structural directives](https://angular.io/guide/structural-directives)** - may change the **structure of the DOM**

Look into the Angular documentation on [Attribute directives](https://angular.io/guide/attribute-directives) and [Structural directives](https://angular.io/guide/structural-directives) to find more about each type, how you can make use of them and how you can **implement custom directives** to use within your template. 

If the information there seems overwhelming for the start, check this article on **[how to create custom directives in Angular](https://www.freecodecamp.org/news/angular-directives-learn-how-to-use-or-create-custom-directives-in-angular-c9b133c24442/)** first.
It includes a brief introduction on what directives are and one example of custom implementation for each directive type.

By including directives within your template, you can enhance the capability of your HTML elements, attaching custom behavior to the DOM.
It is just like customizing one component, but within a different file, so that you can make use of the implementation on different components, not only the current one.

---

## Observables & RxJS

[RxJS](https://angular.io/guide/rx-library) is the library used for **reactive programming** implementation, which helps you write **asynchronous** and **callback-based** code.
It provides both:

* the **[Observable](https://rxjs.dev/guide/observable)** data type
* **[utility functions/operators](https://rxjs.dev/guide/operators)** for creating & working with Observables

Based on their behaviour, there are 2 types of observables:

* **cold** Observables - data is produced inside and **each subscription owns an independent execution of the Observable**, causing the Observable to **unicast**
* **hot** Observables - data is produced outside and **the value is shared between multiple subscription**, causing the Observable to **multicast**

Observables **unicast** by default.
Regardless of the data it passes at subscription, each subscription implies another execution of the Observable. 

**[Subjects](https://rxjs.dev/guide/subject)** are special types of Observables that **multicast** by default.
Therefore, by **subscribing to a Subject**, you do not invoke a new execution that delivers the value, you just **register as a new observer**.

There are multiple Subject variants:

* **[BehaviorSubject](https://rxjs.dev/guide/subject#behaviorsubject)** - stores the latest emitted value, passing this "current value" at subscription
* **[ReplaySubject](https://rxjs.dev/guide/subject#replaysubject)** - records multiple emitted values, allowing you to mention the number of values you want to keep track of
* **[AsyncSubject](https://rxjs.dev/guide/subject#asyncsubject)** - awaits for the ***complete()*** notification to deliver the last emitted value

Most frequently you will make use of **BehaviorSubjects**.
This type of Observable allows you to subscribe to the asynchronous data emitted, but also to access the **last emitted value** directly from the Subject, at any time, **without subscribing** to it, only by using the ***value*** getter.

To differentiate the Observables from other data types, you should include a `$` prefix when naming your variables.

```typescript
import { Observable, BehaviorSubject } from 'rxjs';
import { MyClass } from '@app/my-module/types/classes';

class MyDeclarationsClass {
    myBoolean$: Observable<boolean>;
    myData$ = new BehaviorSubject<MyClass>(null);

    ...
}
``` 

You already know that you should subscribe to your Observables to have access to the emitted values. You can do this:

* by using the **[async pipe](https://angular.io/api/common/AsyncPipe)** within the template, both when using the data value or passing it to a component
* by calling the ***subscribe()*** method on your Observables within a component's class

If you must subscribe to an Observable within your class, keep in mind to **unsubscribe** from it once the component is destroyed.
Otherwise, when instantiating the component another time, you'll subscribe once more to the Observable. 
Therefore, if the observable was not unsubscribed, you multiply the subscription.

To unsubscribe from an Observable, you must declare and instantiate a private `ngUnsubscribe` Subject, which you will pass as parameter within the pipeable ***takeUntil*** operator called on the Observer.
If you have **multiple subscriptions** within your class, you pass the **same subject to each of them**.
Within the ***ngOnDestroy()*** method, you invoke the ***complete()*** method on the subject, so that when the instantiated component is destroyed, you will also unsubscribe from the observables.

Preferably, you should use the **async pipe**, because it **unsubscribes automatically** when the component is destroyed.

***my-container.component.ts***

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Subject, Observable } from 'rxjs'
import { filter, takeUntil, map, switchMap } from 'rxjs/operators';
import { MyClass } from '@app/my-module/types/classes';
import { MyService } from '@app/my-module/services';

@Component({
  selector: 'app-my-container',
  template: `
    <app-my-component
      [data]="asyncData | async"
    >      
    </app-my-component>
  `,
  styleUrls: ['./my-container.component.scss']
})
export class MyContainerComponent implements OnInit, OnDestroy {

  asyncData$: Observable<MyClass>;

  private ngUnsubscribe = new Subject();

  constructor(
    private myService: MyService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
   this.asyncData$ = this.getData();
  }

  private getParamId$(): Observable<number> {
    return this.router.params
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter((event: Event) => event instanceof NavigationStart),
        map(params => +params.resourceId)
      ) 
    }
    
  private getData(): Observable<MyClass> {
    return this.getParamId$()
      .pipe(
        switchMap((idParam: number) => this.myService.get(idParam)),
        map((data: MyClass) => data.date = this.datePipe.transform(data.date, 'dd.MM.yyyy'))
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
```

**[RxJS operators](https://www.learnrxjs.io/learn-rxjs/operators)** help you work with Observable data types.
Check them out, so that you will be able to say *"Easy peasy! I can use an RxJS operator and solve this in just a few code lines."*.

The ***[switchMap()](https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap)*** operator is a pipeable transformation operator which works as a **switch to a new Observable**.
On each emission, the previous inner Observable is cancelled and the new Observable returned within the operator takes its place.
Therefore, the initial value emitted only triggers the change, but the one passed on (to which you have access by subscribing to the Observable) is the **value emitted by the most recently projected inner Observable**.

When working with an **Observable data** within the template, at **each change** the view section is **re-rendered** - the DOM is torn down and rebuilt.
For **Observable sets of data** which are passed asynchronously within a for loop in the template, a good practice is to make use of the ***trackBy*** option on ***[\*ngFor](https://angular.io/api/common/NgForOf#description)*** directive.
Using this, you can customize the **[change propagation](https://angular.io/api/common/NgForOf#change-propagation)** so that Angular will track changes by the return value of the function.

***my-component.component.ts***

```typescript
import { Component, OnInit, Input } from '@angular/core';
import { MyClass } from '@app/my-module/types/classes';

@Component({
  selector: 'app-my-component',
  template: `
    <div *ngFor="let element of elements; let i=index; trackBy: trackByFn">
      <app-my-element-component
        [element]="element"
      >
      </app-my-element-component>
    </div>
  `,
  styleUrls: [ './my-component.component.scss' ]
})
export class MyComponentComponent implements OnInit{
  @Input() elements: MyClass[]; // Observable<MyClass[]> data passed as input using the 'async' pipe

  constructor() { }
  
  ngOnInit(): void { }

  articleTrackByFn(index: number, element: MyClass) {
    return element.id;
  }
}
```

This helps you **avoid the re-rendering flicker effect** on elements that have suffered **no changes**.
It is most frequently used together with **[infinite scroll](#markdown-header-infinite-scroll)** implementations.

Reactive programming may seem like a special concept that you not commonly make use of when developing an Angular application.
It is actually a **key concept**.

Where exactly are [Observables](https://angular.io/guide/observables-in-angular) most frequently used within an Angular application?

* when [transmitting data between components](https://angular.io/guide/observables-in-angular#transmitting-data-between-components)
* when [implementing reactive forms](https://angular.io/guide/observables-in-angular#reactive-forms).
* when customizing the navigation process based on [events provided by the Router](https://angular.io/guide/observables-in-angular#router)
* when [implementing HTTP transactions](https://angular.io/guide/observables-in-angular#http) required for accessing the API server

---

## Styling

You will customize your HTML elements/Angular components using style sheets with the `.scss` extension, which contain **SASS language**, including **[CSS properties](https://cssreference.io/)**.

If the styling properties are the same for multiple elements/component, you do not have to declare them for each individual one.
You will just declare the styling classes globally, making them available application-wide, and you will use them wherever needed.

The **common global styles** are configured within the `styles` directory, which follows the **[SASS architecture guideline](https://sass-guidelin.es/#architecture)**, more specifically the **7-1 pattern**.

### 7-1 pattern

You will have **7 directories** containing individual style sheets and a single ***main.scss*** which imports them all to be provided within the application.

> :open_file_folder: styles

>> :file_folder: base

>> :file_folder: components

>> :file_folder: layout

>> :file_folder: modules

>> :file_folder: themes

>> :file_folder: utilities

>> :file_folder: vendors

>> **main.scss**

The **base/** directory gathers the **boilerplate styling code** of the application.
Here you may include **standard style declarations**, such the such as: font declarations, typography declarations, styles for commonly used HTML elements and components.

> :open_file_folder: base

>> ***\_base.scss***

>> ***\_font.scss***

>> ***\_typography.scss***

>> ...

The **components/** directory gathers **style sheets for individual specific components** used within the application.
Let's say that the buttons included should have the same shadow customized.
You will not style each button using the same properties repeatedly.
Instead, you will make the necessary styling declarations within the ***\_button.scss*** style sheet, in order to apply it globally.

> :open_file_folder: components

>> ***\_button.scss***

>> ***\_select.scss***

>> ***\_table.scss***

>> ...

The **layout/** directory gathers **style declarations involving the application's main layout**.
Here you may include style sheets for the major components defining the global wireframe.

> :open_file_folder: layout

>> ***\_host.scss***

>> ***\_header.scss***

>> ***\_footer.scss***

>> ***\_layout_utils.scss***

>> ***\_sidenav.scss***

>> ...

The **modules/** directory gathers **module-specific style declarations**.
If you have styling 

> :open_file_folder: modules

>> ***\_auth.scss***

>> ***\_home.scss***

>> ...

The **themes/** directory gathers **declarations of themes** used within the application.

> :open_file_folder: themes

>> ***\_theme.scss***

>> ...

The **utilities/** directory gathers **SASS tools and helpers** used across the application.

> :open_file_folder: utilities

>> ***\_variables.scss***

>> ***\_media-queries.scss***

>> ***\_mixins.scss***

>> ***\_functions.scss***

>> ***\_placeholders.scss***

The **vendors/** directory gathers **CSS files from external libraries and frameworks**.

> :open_file_folder: vendors

>> ***\_bootstrap.scss***

>> ...

For the structure above, the imports in the ***main.scss*** file should look like this:

```scss
@import 'base/base';
@import 'base/font';
@import 'base/typography';
...

@import 'components/button';
@import 'components/select';
@import 'components/table';
...

@import 'layout/host';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/layout-utils';
@import 'layout/sidenav';
...

@import 'modules/auth';
@import 'modules/home';
...

@import 'themes/theme';
...

@import 'utilities/variables';
@import 'utilities/media-queries';
@import 'utilities/mixins';
@import 'utilities/functions';
@import 'utilities/placeholders';

@import 'vendors/bootstrap';
...
```

Besides importing the global stylesheets, you should `@include` the **[mixins](#markdown-header-mixins)** declared, so they are made available through this file.
Here you can also include **global styling declarations** that should be applied by default within the application.

To let the application know that the ***styles*** directory contains the common global stylesheets, respectively the ***main.scss*** gathers them all to be provided, the following configurations need to be included in the ***angular.json*** file:

```
...
"projects": {
    "my-project": {
        ...
        "architect": {
            "build": {
                ...
                "options": {
                    "styles": [
                        "src/styles/main.scss"
                    ]
                    "stylePreprocessorOptions": {
                        "includePaths": [
                            "src/styles"
                        ]
                    }
                }
                ...
            }
            "test": {
                ...
                "options": {
                    "styles": [
                        "src/styles/main.scss"
                    ]
                    "stylePreprocessorOptions": {
                        "includePaths": [
                            "src/styles"
                        ]
                    }
                }
                ...
            }
            ...
        }
        ...
    }
}
...
```

### BEM

**[BEM](http://getbem.com/introduction/)** represents a methodology used to organise and maintain large CSS codebases.
The abbreviation comes from the key elements used:

* **Block** - **standalone entity** that is meaningful on its own
* **Element** - **a part of a block** that has no standalone meaning and is semantically tied to its block
* **Modifier** - **a flag on a block or element**, used to change appearance or behavior

When **[naming](http://getbem.com/naming/)** classes within stylesheets using BEM, you follow the `block__element--modifier` pattern.
You may miss the element or the modifier, depending on your needs.

This methodology is **commonly used within SASS stylesheets**, because they allow **nested [property declarations](https://sass-lang.com/documentation/style-rules/declarations)**.
Therefore, you do not have to declare a separate CSS class entry for each independent BEM named style class.
You will declare your CSS classes for the block classes, nesting the element, respectively the modifier classes.

***my-component.component.scss***

```scss
.my-block {
  // property declarations
  
  &__my-first-element {
    // property declarations
    
    &--one-modifier {
      // property declarations
    }

    &--another-modifier {
      // property declarations
    }
  }

  &__my-second-element {
    // property declarations
  }

  &--my-modifier {
    // property declarations
  }
}
```

The nested class declarations in the example above allow you to make use of 6 style classes within your template:

* *my-block*
* *my-block__my-first-element*
* *my-block__my-first-element--one-modifier*
* *my-block__my-first-element--another-modifier*
* *my-block__my-second-element*
* *my-block--my-modifier*

**BEM and SASS** work so well together.
You might say that they make a ***"perfect match"***.
Actually, somebody already said it in [this friendly-written article](https://medium.com/@andrew_barnes/bem-and-sass-a-perfect-match-5e48d9bc3894).
Take a quick look, it is a pretty nice 5 minutes lecture.

### Mixins

**[Mixins](https://sass-lang.com/documentation/at-rules/mixin)** are some of the most powerful tools provided by the SASS language.

You can think of mixins as **stylesheet functions** that you define in order to make your styling code reusable.

For instance, you may have **style classes that are commonly used within your application**.
You do not have to repeat the same declarations wherever needed.
You can create a **mixin containing the respective classes**, which you `@include` in the ***main.scss*** global stylesheet.
This way, the declarations will be made available application-wide and you can make use of them.

***\_base.scss***

```scss
...

@mixin app-base {
  .my-first-style-class {
    // property declarations
  }

  .my-second-style-class {
    // property declarations
  }
  
  ...
}

...
```

***main.scss***

```scss
@import "base/base";

...

@include app-base();

...
```

Mixins can also **take arguments**.
This feature allows you to make use of style declarations and customize your elements by applying the same properties, but **taking into consideration the values passed as arguments**.

```scss
@mixin my-width-mixin($width) {
  width: $width;
  // other property declarations
}

.full-width {
  @include my-width-mixin(100%);
}

.width-80 {
  @include my-width-mixin(80%);
}

...
```

The style classes in the example above make use of ***my-width-mixin($width)***, meaning that they include the mixin's static declarations, allowing the width property to be set according to the argument's value.

Your mixins do not need to be declared and used within the same stylesheet.
You may declare them within the ***styles*** directory and **import them within individual stylesheets** of the applications to be included where needed.

This frequently happens with the **media-query($breakpoint)** mixin.
You declare it within the utilities directory, specifically the media-queries stylesheet and **import it within any stylesheet where you need to customize any responsive styling**.

You should respect the **[7-1 pattern](#markdown-header-7-1-pattern)** and declare your mixins in their correspondent stylesheets:

* mixins that will be used through the application - declared in within the ***\_mixins.scss*** within the ***utilities*** directory
* common application-wide used styling classes - declared in a *app-base()* mixin within the ***\_base.scss*** stylesheet within the ***base*** directory
* common component/HTML elements styling classes - declared in a *app-common()* mixin within the ***\_common.scss*** stylesheet within the ***components*** directory
* common application layout styling classes - declared in a *app-layout-utils* mixin within the ***\_layout-utils.scss*** stylesheet within the ***layout*** directory
* the *media-query()* mixin  - declared within the ***\_media-queries.scss*** stylesheet within the ***utilities*** directory

### Media queries

When developing web applications you must never forget that they need to be **[responsive](https://sass-guidelin.es/#responsive-web-design-and-breakpoints)**.
This means that the **page content must adapt to different screen/window sizes**.

In order to make an application responsive, you should:

* use **[relative length units](https://www.w3schools.com/cssref/css_units.asp)** when **customizing dimensions/sizes** on elements, respectively components
* use **[Flex Layout](#markdown-header-flex-layout)**, especially the **breakpoint aliases features** provided by its **[responsive API](https://github.com/angular/flex-layout/wiki/Responsive-API)** of 
* include ***media-query($breakpoint)*** mixins within your stylesheets

Some responsive customizations may be more complex than others, depending on the application's requirements/design mockups.

Within the application you will make use of both the **Flex breakpoint aliases** and the ***media-query($breakpoint)*** mixin to make the content responsive and viewport adaptive.
Therefore, the breakpoints values that you declare within the ***media-query.scss*** stylesheet must be the same as those provided by the Flex Layout package.

***media-queries.scss***

```scss
$breakpoints: (
  xs: 0px,
  sm: 600px,
  md: 960px,
  lg: 1280px,
  xl: 1920px
); // same breakpoint values as those provided by Flex Layout

@mixin media-query($breakpoint) {
  // If the breakpoint exists in the map.
  @if map-has-key($breakpoints, $breakpoint) {
    // Get the breakpoint value.
    $breakpoint-value: map-get($breakpoints, $breakpoint);

    // Write the media query.
    @media only screen and (min-width: $breakpoint-value) {
      @content;
    }

    // If the breakpoint doesn't exist in the map.
  } @else {
    // Log a warning.
    @warn 'Invalid breakpoint: #{$breakpoint}.';
  }
}
```

The mixin in the example above allows you to customize the page styling based on a **minimal width value** of the screen/window.
Specifically, in order for the custom declarations within the mixin to be applied, the viewport's width must **surpass the mentioned value**.

```scss
@import "utilities/media_queries";

.my-class {
  display: flex;
  flex-direction: column;
  width: 100%;
}

@include media-query(md) {
  .my-class {
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
  }
}
```

In the example above:

* ***my-class*** is applied on a template element, but **customizes it differently** based on the viewport's width
* `flex-direction` and `width` properties are **overridden** for the viewports larger than 960px in width
* `flex-wrap` is **applied only on** viewports larger than 960px in width
* `display` property is **applied regardless** of the viewport's width

Because the styling in the ***media-query($breakpoint)*** mixin is applied after a limit is surpassed, the **class declared independently within the stylesheet**, which contains the initial property declarations, **corresponds to the smallest viewport adaption**.
If the viewport's dimension is checked and passes the breakpoint condition, the properties are overridden.
You may say that the ***"mobile first"*** concept is applied.

The classes declared within the mixin do not need to already be declared individually within the stylesheet.
There may be classes that you want to be applied only for larger viewports.
In this case, you can declare them only within the mixin. 
Of course, doing this in reverse, to only apply it on smaller viewports in this way is not possible.
It could be, but you would have to modify the logic within the mixin, so that you will declare the specific class within it.

However, these cases are possible.
But do you want to **apply a class on a template element if it will not be found for a specific viewport**?

Here comes in handy the use of ***[ngClass](https://angular.io/api/common/NgClass)*** directive together with the **[Flex breakpoint aliases](https://github.com/angular/flex-layout/wiki/Responsive-API#mediaqueries-and-aliases)**.

```angular2html
<div
  class="my-class"
  [ngClass.gt-sm]="{ 'my-class': false, 'my-other-class': true }"
>
  <!-- HTML content -->
</div>
```

In the implementation above:

* ***my-class*** is applied on the `div` element
* ***my-class*** is not going to be applied on the element for viewports larger that 960px in width
* ***my-other-class*** is applied on the element for viewports larger that 960px in width

Take a look at the **[Flex breakpoint aliases](https://github.com/angular/flex-layout/wiki/Responsive-API#mediaqueries-and-aliases)** implementations.
They are life saviors when it comes to implementing responsive web applications.
Just as BEM and SASS, some might say that Angular and Flex are a *"perfect match"*.

Therefore you should use:

* the ***media-query($breakpoint)*** mixin when you want to **use the same style class** to override property declarations, respectively to differentiate element styling based on the viewport's width
* the ***\[ngClass.$breakpoint-alias\]*** directive when you want to **include/exclude style classes** based on the viewport's width

### Typography

**Typography** is the concept that you refer to when **styling the text content** within your application.
Yes, the text needs to be customized too.
The content must be visually appealing, ensuring an excellent user experience.

Typography optimizes **readability** and **accessibility**, establishing a strong visual hierarchy and providing a **graphic balance** to the application.

**[Angular Material typography](https://material.angular.io/guide/typography)** comes with a **leveled structure**, where each level has:

* `font-size`
* `line-height`
* `font-weight`
* `font-family` - *optional*, but **configured globally** for the levels
* `letter-spacing` - *optional*

The **typography levels declarations**, together with the **font** used, are configured within the ***\_typography.scss*** stylesheet in the ***styles/base*** directory.

***\_typography.scss***

```scss
@import '~@angular/material/theming';

$font-family: 'Open Sans', sans-serif;
$font-family-source: 'Source Sans Pro', sans-serif;

$app-typography: mat-typography-config(
  $font-family:   $font-family,
  $display-4:     mat-typography-level(112px, 112px, 300, $letter-spacing: -0.05em),
  $display-3:     mat-typography-level(56px, 56px, 400, $letter-spacing: -0.02em),
  $display-2:     mat-typography-level(45px, 48px, 400, $letter-spacing: -0.005em),
  $display-1:     mat-typography-level(34px, 40px, 400),
  $headline:      mat-typography-level(24px, 32px, 400),
  $title:         mat-typography-level(20px, 32px, 500),
  $subheading-2:  mat-typography-level(16px, 28px, 400),
  $subheading-1:  mat-typography-level(15px, 24px, 400),
  $body-2:        mat-typography-level(14px, 24px, 500, $font-family-source),
  $body-1:        mat-typography-level(14px, 20px, 400, $font-family-source, 0.05em),
  $button:        mat-typography-level(14px, 14px, 500),
  $caption:       mat-typography-level(12px, 20px, 400)
);

...
```

You will have to include your **fonts** in the ***assets/fonts*** directory, meaning that your application will host the files providing them.

Further, you will make use of the ***[@font-face](https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp)*** rule, which instructs the browser to **download the font from where it is hosted**, then **display it** as specified by the styling declarations.
It allows **custom fonts** to be **loaded dynamically**, together with the ***'truetype'*** **format**, which provides **deep browser support**.

These rules are configured within  ***\_font.scss*** stylesheet in the ***styles/base*** directory.

***\_font.scss***

```scss
/* Open Sans */

@font-face {
  src: url('../assets/fonts/Open_Sans/OpenSans-Regular.ttf') format('truetype');
  font-family: 'Open Sans';
  font-weight: 400;
  font-style: normal;
}

@font-face {
  src: url('../assets/fonts/Open_Sans/OpenSans-SemiBold.ttf') format('truetype');
  font-family: 'Open Sans';
  font-weight: 600;
  font-style: normal;
}

@font-face {
  src: url('../assets/fonts/Open_Sans/OpenSans-Bold.ttf') format('truetype');
  font-family: 'Open Sans';
  font-weight: 700;
  font-style: normal;
}

...
```

***mat-typography-level()*** function takes the properties' values as arguments, returning the properties declarations:

```scss
@function mat-typography-level(
  $font-size,
  $line-height: $font-size,
  $font-weight: 400,
  $font-family: null,
  $letter-spacing: normal) {

  @return (
    font-size: $font-size,
    line-height: $line-height,
    font-weight: $font-weight,
    font-family: $font-family,
    letter-spacing: $letter-spacing
  );
}
```

The **font** used on the typography levels is passed as ***$font-family*** argument:

* within the typography configuration - argument in the ***mat-typography-config()*** function
* within the typography level declaration - argument in the ***mat-typography-level()*** function

The **arguments within the configuration/declaration functions** can be passed:

* **in the declared order** - allowing you to omit the last ones
* **in an order of your choice**, by mentioning the ***$argument-key*** - allowing you to omit any argument that you would not like to set

As you can see in the example above, these 2 methods can be combined.
For instance, you can declare a typography level that **omits setting** passing the `font-family` attribute by:

* passing the `font-size`, `line-height` and `font-weight` in order
* passing `letter-spacing` by using the argument's key

You make your typography **available application-wide** by including it in the global stylesheet, mentioning that the **default Angular Material typography configuration will be replaced by your custom one**.

***main.scss***

```scss
@import '~@angular/material/theming';

@import 'base/typography';

...

@include mat-core($app-typography);

...
```

You will make use of the typography levels by using the **corresponding style classes** made available by the Material package: `mat-{{ typography-level }}` (e.g. *mat-title*, *mat-headline*).

```angular2html
<div class="mat-body-1">
  {{ 'My text content' }}
</div>
```
Of course, within your ***\_typography.scss*** stylesheet you can also customize these classes, **adding/overriding specific properties**.

In case you were wondering, no, a frontend developer should not establish the typography within the application.
That is usually a UI/UX designer's job to do.
Although, you might find yourself in harder situations, when a page/application does not come with any design mockup, but only with requirements and you must make the best of it.

It comes in handy to be aware of the typography rules and usability.
You should take a look at this [typography guide for beginners](https://careerfoundry.com/en/blog/ui-design/beginners-guide-to-typography/).

### Theme

A **theme** defines the **color palette** used within the application.

**[Angular Material theming](https://material.angular.io/guide/theming)** system allows you to configure your applications' colors by making use of multiple palettes.
It provides a set of **[pre-build themes](https://material.angular.io/guide/theming#using-a-pre-built-theme)** that you can make use of, but you can also include your own theme configurations.

Within a color configuration you should include:

* a **primary** palette - colors most widely used
* an **accent** palette - colors used for the floating action button and interactive elements
* a **warn** palette - colors used to convey error state

The **theme declaration** is configured within the ***\theme.scss*** stylesheet in the ***styles/themes*** directory.

***\_theme.scss***

```scss
@import '~@angular/material/theming';

$mat-primary: (
        50 : #e1f5ef,
        100 : #b3e6d7,
        200 : #81d5bc,
        300 : #4ec4a1,
        400 : #28b88d,
        500 : #02ab79,
        600 : #02a471,
        700 : #019a66,
        800 : #01915c,
        900 : #018049,
        A100 : #adffd6,
        A200 : #7affbd,
        A400 : #47ffa3,
        A700 : #2eff96,
        contrast: (
                50 : #000000,
                100 : #000000,
                200 : #000000,
                300 : #000000,
                400 : #000000,
                500 : #ffffff,
                600 : #ffffff,
                700 : #ffffff,
                800 : #ffffff,
                900 : #ffffff,
                A100 : #000000,
                A200 : #000000,
                A400 : #000000,
                A700 : #000000,
        )
);

$mat-accent: (
        // accent colors map
);

$mat-accent: (
        // warn colors map
)

...
```

To **generate a color palette** as the one in the example above, you have to:

* choose the **palette's base color** - in this case it was *#02ab79*
* go [here](http://mcg.mbitson.com/) and follow [this quick tutorial](https://drive.google.com/file/d/1JIr16ZsWxuNCyMB-WKjKrIVDuqXOqAKG/view) to **retrieve your palette**

After defining the color palettes, within the same file, you should declare a **set of variables** in order to:

* access the **custom color palettes**
* access the **base colors** in the custom palettes
* access **different color shades** from each palette
* define **any other colors**, together with their color code

```scss
@import '~@angular/material/theming';

...

// color palettes
$primary: mat-palette($mat-primary);
$accent: mat-palette($mat-accent);
$warn: mat-palette($mat-warn);

// base colors
$primary-color: map_get($mat-primary, 500);
$accent-color: map_get($mat-accent, 500);
$warn-color: map_get($mat-warn, 500);

// different primary color shades
$primary-super-light-color: map_get($mat-primary, 200);
$primary-light-color: map_get($mat-primary, 300);
$primary-dark-color: map_get($mat-primary, 900);

// other colors
$dark-primary-text: #000000;
$light-primary-text: #ffffff;
$gray: #dadce0;

...
```

You make your theme **available application-wide** by including it in the global stylesheet, mentioning that the **default Angular Material theme configuration will be replaced by your custom one**.

***main.scss***

```scss
@import '~@angular/material/theming';

@import 'themes/theme';

...

$app-theme: mat-light-theme($primary, $accent, $warn);
@include angular-material-theme($app-theme);

...
```

You will make use of the theme palettes by using: 

* the **color input** available on Material components, which can be assigned a ThemePalette value: *primary*, *accent*, *warn*
* the **corresponding style classes** declared within the ***\_base.scss*** stylesheet in the ***styles/base*** directory.

```angular2html
<div class="primary-color">
  {{ 'My text content' }}
</div>

<button
  mat-raised-button
  color="primary"
>
  {{ 'Material raised button' }}
</button>
```

***\_base.scss***

```scss
@import 'themes/theme';

...

@mixin app-base {
    .primary-color {
      color: $primary-color;
    }

    .accent-color {
      color: $accent-color;
    }

    .warn-color {
      color: $warn-color;
    }
    
    ...
}

...
```

---

## Tools

Developing a **consistent Angular application** can be done easier than you would have expected.

Besides using **Angular CLI** while following a **well structured modular architecture**, you should integrate:

* **[Git hooks](https://www.daptontechnologies.com/angular-prettier-husky/)**, which help you **protect the quality of your code**
* useful **[Angular packages](https://angular.io/guide/npm-packages)**, such as *components libraries* or *layout styling APIs*

### Prettier

**[Prettier](https://prettier.io/docs/en/index.html)** is an **opinionated code formatter**, which helps you keep the code formatted **consistently**, standardizing and automatizing the process.
It **enforces the configured format rules**, parsing the code and re-printing it in the proper way.

To integrate **[prettier](https://www.npmjs.com/package/prettier)** within your development environment, just run the following shell command:

```
npm install --save-dev prettier
```

To **configure the [code formatting options](https://prettier.io/docs/en/options.html)**, you need to include the following files within *your project's root directory*:

***\.prettierrc.json***

```json5
{
    "singleQuote": true,
    "trailingComma": "none",
    "arrowParens": "avoid",
    "useTabs": true,
    "bracketSpacing": true
}
```

***\.prettierignore***

```
*.yaml
*.json
*.js
*.md
```

Any new Angular project created comes with **[TSLint](https://www.npmjs.com/package/tslint)** as a pre-included tool.
When using both **Prettier and TSLint**, **conflicting formatting** rules may appear.
In order to avoid these situations, you can integrate **[tslint-config-prettier](https://www.npmjs.com/package/tslint-config-prettier)**.

```
npm install --save-dev tslint-config-prettier
```

When **configuring** this, you actually tell TSLint that it should take care of everything it has to, except for the **code formatting**, which will **Prettier's responsibility** from now on.

***tslint.json***

```json5
{
  "extends": [
    "tslint:recommended",
    "tslint-config-prettier"
  ],
  // ...
}
```

If you want Prettier to **run only on your changed files**, and not on your entire project, you should integrate **[pretty-quick](https://www.npmjs.com/package/pretty-quick)**.

```shell
npm install --save-dev pretty-quick
```

To manually **run pretty-quick** using `npm`, add the command as script within the ***package.json*** file, configuring it the way you want and applying the desired **[flags](https://www.npmjs.com/package/pretty-quick#cli-flags)**.

***package.json***

```json5
{
  // ...
  "scripts": {
    // ...
    "prettier": "pretty-quick", // to run the check manually
    "prettier:pre-commit": "pretty-quick --staged", // to be used by the pre-commit hook on the staged files
    // ...
  }
  // ...
}
```

### Husky

**[Husky](https://typicode.github.io/husky/#/)** provides **Git hooks** for *Node.js* based projects, allowing you to quickly manage them from the ***package.json*** file.

To integrate **[husky](https://www.npmjs.com/package/husky)** within your development environment, just run the following shell command:

```
npm install --save-dev husky
```

You will **setup your [Git hooks](https://git-scm.com/docs/githooks)** at the end of the ***package.json*** file, configuring:

* ***pre-commit*** to **run Prettier and TSLint** every time a **[git commit](https://git-scm.com/docs/git-commit)** is about to be made
* ***pre-push*** to **create a build of the application** every time a **[git push](https://git-scm.com/docs/git-push)** is about to be made 

***package.json***

```json5
{
  // ...
  "husky": {
    "hooks": {
      "pre-commit": "npm run prettier:pre-commit",
      "pre-push": "npm run lint"
    }
  }
}
```

If any command configured within a **Git hook fails**, the **process is terminated**.
This **prevents you from publishing bad code**, because:

* a **[git commit](https://git-scm.com/docs/git-commit)** will be performed only if the **code is correctly formatted**
* a **[git push](https://git-scm.com/docs/git-push)** will be performed only if **no functionality error is detected** 

It is recommended to make the Git hooks setup **before stating the application development**.
This way, everything will be **checked step by step**, each time you decide to publish some code that what you have worked on.

### Angular Material

**[Angular Material](https://github.com/angular/material)** is the package that implements **[Material Design](https://material.io/archive/guidelines/#) specification**.
It provides a set of customized, reusable, well-tested and accessible **UI components**.

To **[setup Angular Material](https://material.angular.io/guide/getting-started#install-angular-material)** within your application, you need to run the following shell command:

```
ng add @angular/material
```

You will be asked to:

* *choose a pre-build theme name or "custom" for a custom theme* -> pick the **Custom** option, as you will **[configure your own theme](#markdown-header-theme)**
* *set up global Angular Material typography styles* -> answer with **No**, because you will **[configure a custom typography](#markdown-header-typography)**
* *set up browser animations for Angular Material* -> answer with **Yes** to enable the animation system, of which **material animated components** make use

The package installation will:

* include ***[@angular/material](https://www.npmjs.com/package/@angular/material)*** and ***[@angular/cdk](https://www.npmjs.com/package/@angular/cdk)*** as dependencies
* not include ***[@angular/animations](https://www.npmjs.com/package/@angular/animations)*** as dependency, since it comes **pre-included** with each newly created Angular project
* import **[BrowserAnimationsModule](https://angular.io/api/platform-browser/animations/BrowserAnimationsModule)** within the ***app*** root module

Besides these, some styling configurations are added within the: 

* ***styles.scss*** stylesheet - which you will **exclude** from your project, configuring the global styling within the ***[styles](#markdown-header-styling)*** directory
* ***index.html*** file - *2 font stylesheet references* are included, which you should **remove**, since you will **configure your applications fonts** using the ***[@font-face](https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp)*** rule

To be able to use any of the **[Angular Material Components](https://material.angular.io/components/categories)**, you need to **import its specific module** to make it available.
Because they will be used within multiple modules in the application and you do not want to configure the same imports over and over again, you should create a ***material.modules.ts*** within the ***shared/material*** directory.

***material.module.ts***

```typescript
import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout'; // utility for checking the matching state of @media queries.
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
...

@NgModule({
  declarations: [],
  imports: [
    LayoutModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ...
  ],
  exports: [
    LayoutModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ...
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline'
      }
    }
  ]
})
export class MaterialModule { }
```

This custom **Material module** will:

* *import* and *export* the **needed material components' modules**
* be *imported* and *exported* within the **[SharedModule](#markdown-header-12-shared-module)**
* be *imported* within each module that imports the **SharedModule**, making the material components **available for use within the templates**

Now you can use the **[Angular Material components](https://material.angular.io/components/categories)** within your templates, combining them to create the desired view.
Check them out to see what is available, how each component look and how you can use them.
For every component, Angular provides a **detailed documentation**, together with **implementation examples** on *StackBlitz*.

Besides providing built-in UI components, the package gives you access to **[Angular Material CDK](https://material.angular.io/cdk/categories)**.
The CDK allows you to create **your own custom components**.
Check the list of **behavior primitives** made available for you to use.

### Flex Layout

**[Angular Flex Layout](https://github.com/angular/flex-layout)** makes it easier for you to customize your layout, by **automatizing** the process of:
 
* **applying Flexbox CSS styling**
* **using media-queries** to make your application responsive - provides a **[responsive API](https://github.com/angular/flex-layout/wiki/Responsive-API)**

To integrate ***[@angular/flex-layout](https://www.npmjs.com/package/@angular/flex-layout)***, you need to the following shell command:

```
npm install @angular/flex-layout
```

To be able to use the **Flex Layout features** you must **import the FlexLayoutModule** to make it available.
Because you will need to use this within multiple modules in the application, you should *import* and *export* the **FlexLayoutModule** within the **[SharedModule](#markdown-header-12-shared-module)**.

**[Applying layout attributes](https://github.com/angular/flex-layout/wiki/Declarative-API-Overview)** for flex layout have the `fx` suffix.
They can be:

* **applied on HTML tags** to customize layout related styling
* **associated with breakpoint aliases** to differentiate layout related styling based on the viewport's width 

```angular2html
<div
  fxLayout="column"
  fxLayout.gt-sm="row wrap"
  fxLayoutAlign="center center"
>
  <div> {{ '1st element' }} </div>
  <div> {{ '2nd element' }} </div>
</div>
```

In the implementation above:

* the nested elements are **centrally aligned** within the wrapper `div` element
* by ***default***, the nested elements layout , the nested elements are placed **in column** within the wrapper
* for ***viewports larger than 960px in width***, the nested elements are placed **in row** within the wrapper

---

## Interceptors

An **[interceptor](https://angular.io/guide/http#intercepting-requests-and-responses)** helps you manage the HTTP requests to the server, respectively the HTTP responses from the server.

You may need to access **different API servers**, depending on the application's configuration.
No, you don't need to multiply your services or your HTTP transactions declarations, because within them you only provide the **URL path** and not the entire request URL.

The **interceptor** is the one that should take care of this issue.
When **intercepting an HTTP request** from your application to the server, it should complete the URL by concatenating the **API hosting domain**, specified within the environment, with the **request provided path**: `${environment.API}/${request.url}`.

All you need to do is specify the API base URLs within the corresponding [environment files](#markdown-header-environments) and the variables in the ***environment.ts*** file will be adapted to the current configuration, ready for the interceptor to **make use of them**.

Angular provides the **[HttpInterceptor](https://angular.io/api/common/http/HttpInterceptor)** interface, which allows you to intercept and handle HTTP transactions of both **[HttpRequest](https://angular.io/api/common/http/HttpRequest)** and **[HttpResponse](https://angular.io/api/common/http/HttpResponse)** type.

***requests.interceptor.ts***

```typescript
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsInterceptor implements HttpInterceptor {
  private readonly baseUrl = environment.API;

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let apiReq = request;

    if (this.shouldAddBaseUrl(apiReq.url)) {
      apiReq = request.clone({ url: `${this.baseUrl}/${request.url}` });
    }

    return next.handle(apiReq);
  }

  private shouldAddBaseUrl(url: string) {
    return !/^https?:\/\/(.*)/.test(url) && !/^assets\/(.*)/.test(url);
  }

}
```

The interceptor in the example above implements **HttpInterceptor** interface, together with its ***intercept($httpRequest, $httpHandler)*** method, which **identifies and handles a given HTTP request**.

In order for **every HTTP request** to be intercepted, you need to **inject the interceptor at application-root level**.
You should include it as provider within in the **[CoreModule](#markdown-header-11-core-module)**, making use of the: **[HTTP_INTERCEPTORS](https://angular.io/api/common/http/HTTP_INTERCEPTORS) injection token**.

***core.module.ts***

```typescript
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestsInterceptor } from '@app/core/interceptors/requests.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsInterceptor,
      multi: true
    }
  ],
  exports: [ HttpClientModule ],
  ...
})
export class CoreModule { }
```
