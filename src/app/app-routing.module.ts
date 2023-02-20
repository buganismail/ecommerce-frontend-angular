import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./custom/layouts/navbar/navbar.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppComponent,
                children: [
                    { path: '', loadChildren: () => import('./custom/login/login.module').then(m => m.LoginModule) },
                    { path: 'adminpanel', loadChildren: () => import('./custom/admin-panel/admin-panel.module').then(m => m.AdminPanelModule) },
                    { path: 'products', loadChildren: () => import('./custom/products/products.module').then(m => m.ProductsModule) },
                    { path: 'product/:id', loadChildren: () => import('./custom/product/product.module').then(m => m.ProductModule) },
                    { path: 'shopping', loadChildren: () => import('./custom/shopping/shopping.module').then(m => m.ShoppingModule) },
                    { path: 'cart', loadChildren: () => import('./custom/cart/cart.module').then(m => m.CartModule) },

                    { path: 'deneme/home', loadChildren: () => import('./custom/deneme/home/home.module').then(m => m.HomeModule) },
                    { path: 'deneme/header', loadChildren: () => import('./custom/deneme/header/header.module').then(m => m.HeaderModule) },
                    { path: 'deneme/cart', loadChildren: () => import('./custom/deneme/cart/cart.module').then(m => m.CartModule) },

                    { path: 'dashboard2', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            {path: '**', redirectTo: '/notfound'},
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
