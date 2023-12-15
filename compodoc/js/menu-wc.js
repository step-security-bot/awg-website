'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">awg-website documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppMaterialModule.html" data-type="entity-link" >AppMaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-c5b136ce7e4c6020fad1b4df3f5e4ca89ff5d11a099c20bf154428820ee8f74ff8d0648b983874ccc28bebdf0d8e4cff169e4b1c91da9cda9ded15eead7cca67"' : 'data-bs-target="#xs-components-links-module-AppModule-c5b136ce7e4c6020fad1b4df3f5e4ca89ff5d11a099c20bf154428820ee8f74ff8d0648b983874ccc28bebdf0d8e4cff169e4b1c91da9cda9ded15eead7cca67"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c5b136ce7e4c6020fad1b4df3f5e4ca89ff5d11a099c20bf154428820ee8f74ff8d0648b983874ccc28bebdf0d8e4cff169e4b1c91da9cda9ded15eead7cca67"' :
                                            'id="xs-components-links-module-AppModule-c5b136ce7e4c6020fad1b4df3f5e4ca89ff5d11a099c20bf154428820ee8f74ff8d0648b983874ccc28bebdf0d8e4cff169e4b1c91da9cda9ded15eead7cca67"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link" >ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ContactModule-12b2e4d402e0bd4aa0ce1bdebff76bf29d3b6ba417a763d795e454eb8c8f72c067091c183e6089dbdd34e544e11ec362d03d5b40b18df78aac352cec3dddbba1"' : 'data-bs-target="#xs-components-links-module-ContactModule-12b2e4d402e0bd4aa0ce1bdebff76bf29d3b6ba417a763d795e454eb8c8f72c067091c183e6089dbdd34e544e11ec362d03d5b40b18df78aac352cec3dddbba1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactModule-12b2e4d402e0bd4aa0ce1bdebff76bf29d3b6ba417a763d795e454eb8c8f72c067091c183e6089dbdd34e544e11ec362d03d5b40b18df78aac352cec3dddbba1"' :
                                            'id="xs-components-links-module-ContactModule-12b2e4d402e0bd4aa0ce1bdebff76bf29d3b6ba417a763d795e454eb8c8f72c067091c183e6089dbdd34e544e11ec362d03d5b40b18df78aac352cec3dddbba1"' }>
                                            <li class="link">
                                                <a href="components/ContactAddressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactAddressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactCitationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactCitationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactImprintComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactImprintComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactRoutingModule.html" data-type="entity-link" >ContactRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-3584d2b2f07fdce0764f3daaf1c1c22e6f9b7aad1e44b4487b1f9b26d9dc16c64c496d2a266b392bb72427308b18d7203f256976947d04e7d6e50af818e76adf"' : 'data-bs-target="#xs-components-links-module-CoreModule-3584d2b2f07fdce0764f3daaf1c1c22e6f9b7aad1e44b4487b1f9b26d9dc16c64c496d2a266b392bb72427308b18d7203f256976947d04e7d6e50af818e76adf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-3584d2b2f07fdce0764f3daaf1c1c22e6f9b7aad1e44b4487b1f9b26d9dc16c64c496d2a266b392bb72427308b18d7203f256976947d04e7d6e50af818e76adf"' :
                                            'id="xs-components-links-module-CoreModule-3584d2b2f07fdce0764f3daaf1c1c22e6f9b7aad1e44b4487b1f9b26d9dc16c64c496d2a266b392bb72427308b18d7203f256976947d04e7d6e50af818e76adf"' }>
                                            <li class="link">
                                                <a href="components/CornerRibbonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CornerRibbonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LocaleSwitcherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocaleSwitcherComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditionModule.html" data-type="entity-link" >EditionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-EditionModule-991996ed3d7e97572415071e5b0dcf994813f2ad5a2fdc9525082ba938b69f6b8077ce93511889b5f972719a27eabdc285911d319ab3a6d056fca294d7942801"' : 'data-bs-target="#xs-components-links-module-EditionModule-991996ed3d7e97572415071e5b0dcf994813f2ad5a2fdc9525082ba938b69f6b8077ce93511889b5f972719a27eabdc285911d319ab3a6d056fca294d7942801"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditionModule-991996ed3d7e97572415071e5b0dcf994813f2ad5a2fdc9525082ba938b69f6b8077ce93511889b5f972719a27eabdc285911d319ab3a6d056fca294d7942801"' :
                                            'id="xs-components-links-module-EditionModule-991996ed3d7e97572415071e5b0dcf994813f2ad5a2fdc9525082ba938b69f6b8077ce93511889b5f972719a27eabdc285911d319ab3a6d056fca294d7942801"' }>
                                            <li class="link">
                                                <a href="components/EditionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditionOnlineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditionOnlineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditionOutlineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditionOutlineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditionOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditionOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditionPrintComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditionPrintComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditionRoutingModule.html" data-type="entity-link" >EditionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageModule.html" data-type="entity-link" >PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PageModule-3c06e5096b79b78f826134e85bd4cf0a0e9d653679c105ee7db0d940fd44660a6cadef53dae7bd293388429429a45b1fc2903deb53f0a6e0e080a488c5f3a724"' : 'data-bs-target="#xs-components-links-module-PageModule-3c06e5096b79b78f826134e85bd4cf0a0e9d653679c105ee7db0d940fd44660a6cadef53dae7bd293388429429a45b1fc2903deb53f0a6e0e080a488c5f3a724"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageModule-3c06e5096b79b78f826134e85bd4cf0a0e9d653679c105ee7db0d940fd44660a6cadef53dae7bd293388429429a45b1fc2903deb53f0a6e0e080a488c5f3a724"' :
                                            'id="xs-components-links-module-PageModule-3c06e5096b79b78f826134e85bd4cf0a0e9d653679c105ee7db0d940fd44660a6cadef53dae7bd293388429429a45b1fc2903deb53f0a6e0e080a488c5f3a724"' }>
                                            <li class="link">
                                                <a href="components/MainTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RightTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RightTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectModule.html" data-type="entity-link" >ProjectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProjectModule-5f42d79e8ed9ebae674814e19cce909013eea7fe64ec33d8bb2eaa7c1ddd8ecda16a07183bd227c51c266f0fd2e104abe58bf39b0638c3a16bc1866412763d06"' : 'data-bs-target="#xs-components-links-module-ProjectModule-5f42d79e8ed9ebae674814e19cce909013eea7fe64ec33d8bb2eaa7c1ddd8ecda16a07183bd227c51c266f0fd2e104abe58bf39b0638c3a16bc1866412763d06"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectModule-5f42d79e8ed9ebae674814e19cce909013eea7fe64ec33d8bb2eaa7c1ddd8ecda16a07183bd227c51c266f0fd2e104abe58bf39b0638c3a16bc1866412763d06"' :
                                            'id="xs-components-links-module-ProjectModule-5f42d79e8ed9ebae674814e19cce909013eea7fe64ec33d8bb2eaa7c1ddd8ecda16a07183bd227c51c266f0fd2e104abe58bf39b0638c3a16bc1866412763d06"' }>
                                            <li class="link">
                                                <a href="components/ProjectBoardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectBoardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectCooperationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectCooperationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectNewsArchiveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectNewsArchiveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectTeamComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectTeamComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectRoutingModule.html" data-type="entity-link" >ProjectRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ResearchModule.html" data-type="entity-link" >ResearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ResearchModule-e74abf44f91d23286d1a8de4900748ef2427631f10f4f3915a74e02578021f2f553c45544b322aafa41bdf5dee9c74c02b2761ef12ff9aeccc22eba31ad9c4b0"' : 'data-bs-target="#xs-components-links-module-ResearchModule-e74abf44f91d23286d1a8de4900748ef2427631f10f4f3915a74e02578021f2f553c45544b322aafa41bdf5dee9c74c02b2761ef12ff9aeccc22eba31ad9c4b0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResearchModule-e74abf44f91d23286d1a8de4900748ef2427631f10f4f3915a74e02578021f2f553c45544b322aafa41bdf5dee9c74c02b2761ef12ff9aeccc22eba31ad9c4b0"' :
                                            'id="xs-components-links-module-ResearchModule-e74abf44f91d23286d1a8de4900748ef2427631f10f4f3915a74e02578021f2f553c45544b322aafa41bdf5dee9c74c02b2761ef12ff9aeccc22eba31ad9c4b0"' }>
                                            <li class="link">
                                                <a href="components/ResearchActivitiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResearchActivitiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResearchArchivesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResearchArchivesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResearchConferencesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResearchConferencesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResearchOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResearchOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResearchPublicationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResearchPublicationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResearchWebernLecturesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResearchWebernLecturesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResearchWebernStudiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResearchWebernStudiesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResearchRoutingModule.html" data-type="entity-link" >ResearchRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SharedModule-41294648e84244de6a6bed4b323f3e209c860124c1607cedd5b3a32ac01f8b746acd2fe646cb7645b25650e5fafee4ae5e5f60e9730c161a27b6946645b02240"' : 'data-bs-target="#xs-directives-links-module-SharedModule-41294648e84244de6a6bed4b323f3e209c860124c1607cedd5b3a32ac01f8b746acd2fe646cb7645b25650e5fafee4ae5e5f60e9730c161a27b6946645b02240"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-41294648e84244de6a6bed4b323f3e209c860124c1607cedd5b3a32ac01f8b746acd2fe646cb7645b25650e5fafee4ae5e5f60e9730c161a27b6946645b02240"' :
                                        'id="xs-directives-links-module-SharedModule-41294648e84244de6a6bed4b323f3e209c860124c1607cedd5b3a32ac01f8b746acd2fe646cb7645b25650e5fafee4ae5e5f60e9730c161a27b6946645b02240"' }>
                                        <li class="link">
                                            <a href="directives/ExternalLinkDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExternalLinkDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WebernModule.html" data-type="entity-link" >WebernModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-WebernModule-871dbe70a4d4b3bdea753d79381fc7fa2e166acadd6d96fc18ccf1cdd025e57a8ee04ff14de791819e4d9b138292bc0d133066b92ff00711165b289bcaff4a1a"' : 'data-bs-target="#xs-components-links-module-WebernModule-871dbe70a4d4b3bdea753d79381fc7fa2e166acadd6d96fc18ccf1cdd025e57a8ee04ff14de791819e4d9b138292bc0d133066b92ff00711165b289bcaff4a1a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WebernModule-871dbe70a4d4b3bdea753d79381fc7fa2e166acadd6d96fc18ccf1cdd025e57a8ee04ff14de791819e4d9b138292bc0d133066b92ff00711165b289bcaff4a1a"' :
                                            'id="xs-components-links-module-WebernModule-871dbe70a4d4b3bdea753d79381fc7fa2e166acadd6d96fc18ccf1cdd025e57a8ee04ff14de791819e4d9b138292bc0d133066b92ff00711165b289bcaff4a1a"' }>
                                            <li class="link">
                                                <a href="components/WebernBibliographyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WebernBibliographyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WebernChronologyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WebernChronologyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WebernComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WebernComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WebernLettersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WebernLettersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WebernOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WebernOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WebernPersonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WebernPersonsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WebernRoutingModule.html" data-type="entity-link" >WebernRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WorksModule.html" data-type="entity-link" >WorksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-WorksModule-911aaec31cbad883a246f43d4ae57dd5873356fde250b42eb0d4edf27eb2c20e843e119a86ca0d8b508961b037f3da253d7e924e03827da15b8926071ca1510b"' : 'data-bs-target="#xs-components-links-module-WorksModule-911aaec31cbad883a246f43d4ae57dd5873356fde250b42eb0d4edf27eb2c20e843e119a86ca0d8b508961b037f3da253d7e924e03827da15b8926071ca1510b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorksModule-911aaec31cbad883a246f43d4ae57dd5873356fde250b42eb0d4edf27eb2c20e843e119a86ca0d8b508961b037f3da253d7e924e03827da15b8926071ca1510b"' :
                                            'id="xs-components-links-module-WorksModule-911aaec31cbad883a246f43d4ae57dd5873356fde250b42eb0d4edf27eb2c20e843e119a86ca0d8b508961b037f3da253d7e924e03827da15b8926071ca1510b"' }>
                                            <li class="link">
                                                <a href="components/WorksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorksMoldenhauerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorksMoldenhauerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorksOpusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorksOpusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorksOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorksOverviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorksRoutingModule.html" data-type="entity-link" >WorksRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CornerRibbonComponent.html" data-type="entity-link" >CornerRibbonComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Menu.html" data-type="entity-link" >Menu</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link" >MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PortalService.html" data-type="entity-link" >PortalService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/EditionComplexNode.html" data-type="entity-link" >EditionComplexNode</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});