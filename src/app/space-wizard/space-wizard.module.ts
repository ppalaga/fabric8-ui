import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniqueSpaceNameValidatorDirective, ValidSpaceNameValidatorDirective, Fabric8WitModule } from 'ngx-fabric8-wit';

import { runtimeConsoleImports } from './../shared/runtime-console/runtime-console';
import { LoggerFactory } from './common/logger';
import { ForgeAppGeneratorComponent } from './components/forge-app-generator/forge-app-generator.component';
import { ForgePipelineViewComponent } from './components/forge-pipeline-view/forge-pipeline-view.component';
import { AppGeneratorSingleSelectionListComponent } from './components/app-generator-single-selection-list/app-generator-single-selection-list.component';
import { ForgeStepViewComponent } from './components/forge-step-view/forge-step-view.component';
import { ForgePanelComponent } from './components/forge-panel/forge-panel.component';
import { CreateSpaceComponent } from './components/create-space/create-space.component';
import { WorkflowFactory } from './models/workflow';

import { IForgeServiceProvider } from './services/forge.service';
import { AppGeneratorConfiguratorService, IAppGeneratorServiceProvider } from './services/app-generator.service';
import { SpaceWizardComponent } from './space-wizard.component';
import { SelectedItemsPipe } from './pipes/selected-items.pipe';
import { VisibleItemsPipe } from './pipes/visible-items.pipe';
import { TrustHtmlPipe, TrustStylePipe } from './pipes/safe-html.pipe';
import { CodebasesService } from '../create/codebases/services/codebases.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Fabric8WitModule
  ],
  declarations: [
    SpaceWizardComponent,
    ForgeAppGeneratorComponent,
    ForgePipelineViewComponent,
    ForgeStepViewComponent,
    ForgePanelComponent,
    AppGeneratorSingleSelectionListComponent,
    CreateSpaceComponent,
    UniqueSpaceNameValidatorDirective,
    ValidSpaceNameValidatorDirective,
    SelectedItemsPipe,
    VisibleItemsPipe,
    TrustHtmlPipe,
    TrustStylePipe
  ],
  exports: [
    SpaceWizardComponent,
    UniqueSpaceNameValidatorDirective
  ],
  providers: [
    IForgeServiceProvider.FactoryProvider,
    LoggerFactory,
    WorkflowFactory,
    IAppGeneratorServiceProvider.FactoryProvider,
    AppGeneratorConfiguratorService,
    CodebasesService
  ]
})

export class SpaceWizardModule {

}

