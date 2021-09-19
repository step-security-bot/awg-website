import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '@awg-shared/app-material.module';

import { ExternalLinkDirective } from './external-link/external-link.directive';

@NgModule({
    imports: [AppMaterialModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
    declarations: [ExternalLinkDirective],
    exports: [AppMaterialModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ExternalLinkDirective],
})
export class SharedModule {}
