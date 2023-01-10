import { NestedTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { PortalService } from '@awg-core/page/page-services/portal.service';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface EditionComplexNode {
    name: string;
    children?: EditionComplexNode[];
}

const TREE_DATA: EditionComplexNode[] = [
    {
        name: 'Serie I (Werke mit Opuszahlen)',
        children: [
            { name: 'Abteilung 1 (Orchestermusik)', children: [{ name: 'Konzert für Klavier und Orchester Nr. 1' }] },
            {
                name: 'Abteilung 2 (Kammer- und Klaviermusik)',
                children: [{ name: 'Konzert für Klavier und Orchester Nr. 1' }],
            },
            { name: 'Abteilung 3 (Chormusik) ', children: [{ name: 'Konzert für Klavier und Orchester Nr. 1' }] },
            {
                name: 'Abteilung 4 (Vokalmusik mit Ensemblebegleitung)',
                children: [{ name: 'Konzert für Klavier und Orchester Nr. 1' }],
            },
            {
                name: 'Abteilung 5 (Klavierlieder)',
                children: [
                    { name: 'Einleitung' },
                    { name: 'George-Lieder (op. 3 und 4)' },
                    { name: 'Vier Lieder op. 12' },
                    { name: 'Drei Gesänge aus Viae Inviae von Hildegard Jone op. 23' },
                    {
                        name: 'Drei Lieder nach Gedichten von Hildegard Jone op. 25',
                        children: [
                            { name: 'Einleitung' },
                            {
                                name: 'Drei Lieder nach Gedichten von Hildegard Jone op. 25',
                                children: [
                                    { name: 'I [„Wie bin ich froh!“ M 317: Textfassung 2]' },
                                    { name: 'II [„Des Herzens Purpurvogel“ M 322: einzige Textfassung]' },
                                    { name: 'III [„Sterne, ihr silbernen Bienen“ M 321: einzige Textfassung]' },
                                ],
                            },
                            {
                                name: 'Textfassungen und nachgelassene Lieder',
                                children: [{ name: '[„Wie bin ich froh!“ M 317: Textfassung 1]' }],
                            },
                            { name: 'Skizzen', children: [{ name: 'Beispieledition ausgewählter Skizzen zu op. 25' }] },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Serie II (Nachgelassene Kompositionen und Fragmente)',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
    {
        name: 'Serie III (Bearbeitungen von Werken anderer Komponisten)',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
];

@Component({
    selector: 'awg-edition-outline',
    templateUrl: './edition-outline.component.html',
    styleUrls: ['./edition-outline.component.css'],
})
export class EditionOutlineComponent implements AfterViewInit, OnDestroy {
    @ViewChild('rightPanelPortal') rightPanelPortal: TemplateRef<unknown>;

    treeControl = new NestedTreeControl<EditionComplexNode>(node => node.children);
    dataSource = new MatTreeNestedDataSource<EditionComplexNode>();

    constructor(private _portalService: PortalService) {
        this.dataSource.data = TREE_DATA;
        this.treeControl.dataNodes = TREE_DATA;
    }

    hasChild = (_: number, node: EditionComplexNode) => !!node.children && node.children.length > 0;

    ngAfterViewInit() {
        this._portalService.updateRightPanelPortalData(this.rightPanelPortal);
    }

    ngOnDestroy() {
        this._portalService.clearRightPanelPortalData();
    }
}
