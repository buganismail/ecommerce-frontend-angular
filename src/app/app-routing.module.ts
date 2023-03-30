import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {AppComponent} from "./app.component";
import {AuthGuard} from "./custom/guards/auth.guard";
import {AdminGuard} from "./custom/guards/admin.guard";
import {UserGuard} from "./custom/guards/user.guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppComponent,
                children: [
                    { path: 'login', loadChildren: () => import('./custom/login/loginpage.module').then(m => m.LoginpageModule) },

                    { path: 'register', loadChildren: () => import('./custom/user/register/register.module').then(m => m.RegisterModule) },
                    { path: '', redirectTo:'login', pathMatch:'full'},
                    { path: 'adminpanel', loadChildren: () => import('./custom/admin/admin-panel/admin-panel.module').then(m => m.AdminPanelModule),canActivate: [AdminGuard],},
                    { path: 'products', loadChildren: () => import('./custom/user/products/products.module').then(m => m.ProductsModule),canActivate: [UserGuard], },
                    { path: 'product-detail/:product_id', loadChildren: () => import('./custom/user/product-detail/product-detail.module').then(m => m.ProductDetailModule),canActivate: [UserGuard], },
                    { path: 'search/:searchTerm', loadChildren: () => import('./custom/user/products/products.module').then(m => m.ProductsModule),canActivate: [UserGuard], },
                    { path: 'basket', loadChildren: () => import('./custom/user/cart/cart.module').then(m => m.CartModule),canActivate: [UserGuard], },

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
