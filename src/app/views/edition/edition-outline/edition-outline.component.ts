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
    link?: string;
    children?: EditionComplexNode[];
}

const TREE_DATA: EditionComplexNode[] = [
    {
        name: 'Serie I (Werke mit Opuszahlen)',
        children: [
            { name: 'Abteilung 1 (Orchestermusik)' },
            { name: 'Abteilung 2 (Kammer- und Klaviermusik)' },
            { name: 'Abteilung 3 (Chormusik) ' },
            { name: 'Abteilung 4 (Vokalmusik mit Ensemblebegleitung)' },
            {
                name: 'Abteilung 5 (Klavierlieder)',
                children: [
                    { name: 'Einleitung' },
                    {
                        name: 'George-Lieder (op. 3 und 4)',
                        children: [
                            { name: 'Einleitung' },
                            {
                                name: 'Fünf Lieder aus Der siebente Ring von Stefan George op. 3',
                                children: [
                                    { name: 'I [„Dies ist ein Lied“ M 133: Textfassung 4]' },
                                    { name: 'II [„Im Windesweben“ M 134: Textfassung 3]' },
                                    { name: 'III [„An Bachesranft“ M 135: Textfassung 3]' },
                                    { name: 'IV [„Im Morgentaun“ M 136: Textfassung 3]' },
                                    { name: 'V [„Kahl reckt der Baum“ M 137: Textfassung 5]' },
                                ],
                            },
                            {
                                name: 'Fünf Lieder nach Gedichten von Stefan George op. 4',
                                children: [
                                    { name: 'I [Eingang („Welt der Gestalten“) M 138: Textfassung 3]' },
                                    { name: 'II [„Noch zwingt mich Treue“ M 139: Textfassung 3]' },
                                    { name: 'III [„Ja Heil und Dank dir“ M 140: Textfassung 2]' },
                                    { name: 'IV [„So ich traurig bin“ M 141: Textfassung 2]' },
                                    { name: 'V [„Ihr tratet zu dem Herde“ M 142: Textfassung 3]' },
                                ],
                            },
                            {
                                name: 'Texteditionen',
                                children: [
                                    { name: '[„An Bachesranft“ M 135: Textfassung 1]' },
                                    { name: '[„An Bachesranft“ M 135: Textfassung 2]' },
                                    { name: '[„Das lockere Saatgefilde“ M 146: einzige Textfassung]' },
                                    { name: '[„Dies ist ein Lied“ M 133: Textfassung 1]' },
                                    { name: '[„Dies ist ein Lied“ M 133: Textfassung 2]' },
                                    { name: '[„Dies ist ein Lied“ M 133: Textfassung 3]' },
                                    { name: '[Eingang („Welt der Gestalten“) M 138: Textfassung 1]' },
                                    { name: '[Eingang („Welt der Gestalten“) M 138: Textfassung 2]' },
                                    { name: '[„Erwachen aus dem tiefsten Traumesschoße“ M 143: einzige Textfassung]' },
                                    { name: '[„Ihr tratet zu dem Herde“ M 142: Textfassung 1]' },
                                    { name: '[„Ihr tratet zu dem Herde“ M 142: Textfassung 2]' },
                                    { name: '[„Im Morgentaun“ M 136: Textfassung 1]' },
                                    { name: '[„Im Morgentaun“ M 136: Textfassung 2]' },
                                    { name: '[„Im Windesweben“ M 134: Textfassung 1]' },
                                    { name: '[„Im Windesweben“ M 134: Textfassung 2]' },
                                    { name: '[„Ja Heil und Dank dir“ M 140: Textfassung 1]' },
                                    { name: '[„Kahl reckt der Baum“ M 137: Textfassung 1]' },
                                    { name: '[„Kahl reckt der Baum“ M 137: Textfassung 2]' },
                                    { name: '[„Kahl reckt der Baum“ M 137: Textfassung 3]' },
                                    { name: '[„Kahl reckt der Baum“ M 137: Textfassung 4]' },
                                    { name: '[Kunfttag I („Dem bist du Kind“) M 144: einzige Textfassung]' },
                                    { name: '[„Noch zwingt mich Treue“ M 139: Textfassung 1]' },
                                    { name: '[„Noch zwingt mich Treue“ M 139: Textfassung 2]' },
                                    { name: '[„So ich traurig bin“ M 141: Textfassung 1]' },
                                    {
                                        name: '[Trauer I („So wart bis ich dies dir noch künde“) M 145: einzige Textfassung] ',
                                    },
                                ],
                            },
                            { name: 'Skizzen' },
                        ],
                    },
                    {
                        name: 'Vier Lieder op. 12',
                        children: [
                            { name: 'Einleitung' },
                            {
                                name: 'Vier Lieder op. 12',
                                children: [
                                    { name: 'I [„Der Tag ist vergangen“ M 212: Textfassung 3]' },
                                    {
                                        name: 'II [Die geheimnisvolle Flöte („An einem Abend“) M 217: einzige Textfassung] ',
                                    },
                                    { name: 'III [„Schien mir’s, als ich sah die Sonne“ M 213: einzige Textfassung]' },
                                    { name: 'IV [Gleich und Gleich („Ein Blumenglöckchen“) M 216: Textfassung 2]' },
                                ],
                            },
                            {
                                name: 'Texteditionen',
                                children: [
                                    { name: '[„Der Tag ist vergangen“ M 212: Textfassung 1]' },
                                    { name: '[„Der Tag ist vergangen“ M 212: Textfassung 2]' },
                                    { name: '[Gleich und Gleich („Ein Blumenglöckchen“) M 216: Textfassung 1]' },
                                ],
                            },
                            {
                                name: 'Skizzen',
                                children: [
                                    {
                                        name: 'Beispieledition ausgewählter Skizzen zu op. 12',
                                        link: 'https://edition.anton-webern.ch/edition/complex/op12/',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Drei Gesänge aus Viae Inviae von Hildegard Jone op. 23',
                        children: [
                            { name: 'Einleitung' },
                            {
                                name: 'Drei Gesänge aus Viae Inviae von Hildegard Jone op. 23',
                                children: [
                                    { name: 'I [„Das dunkle Herz“ M 314: einzige Textfassung]' },
                                    { name: 'II [„Es stürzt aus Höhen Frische“ M 313: einzige Textfassung]' },
                                    { name: 'III [„Herr Jesus mein“ M 312: einzige Textfassung]' },
                                ],
                            },
                            {
                                name: 'Skizzen',
                            },
                        ],
                    },
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
                                name: 'Texteditionen',
                                children: [{ name: '[„Wie bin ich froh!“ M 317: Textfassung 1]' }],
                            },
                            {
                                name: 'Skizzen',
                                children: [
                                    {
                                        name: 'Beispieledition ausgewählter Skizzen zu op. 25',
                                        link: 'https://edition.anton-webern.ch/edition/complex/op25/',
                                    },
                                ],
                            },
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
                name: 'Abteilung 1 (Orchestermusik)',
            },
            {
                name: 'Abteilung 2a (Klaviermusik)',
            },
            {
                name: 'Abteilung 2b (Kammermusik)',
            },
            {
                name: 'Abteilung 3 (Chormusik)',
            },
            {
                name: 'Abteilung 4 (Vokalmusik mit Ensemblebegleitung)',
            },
            {
                name: 'Abteilung 5 (Klavierlieder)',
            },
        ],
    },
    {
        name: 'Serie III (Bearbeitungen von Werken anderer Komponisten)',
        children: [
            {
                name: 'Abteilung 1 (Orchestermusik)',
            },
            {
                name: 'Abteilung 2 (Kammer- und Klaviermusik)',
            },
            {
                name: 'Abteilung 3 (Chormusik)',
            },
            {
                name: 'Abteilung 4 (Vokalmusik mit Ensemblebegleitung)',
            },
            {
                name: 'Abteilung 5 (Klavierauszüge)',
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

    isAllCollapsed = true;
    treeControl = new NestedTreeControl<EditionComplexNode>(node => node.children);
    dataSource = new MatTreeNestedDataSource<EditionComplexNode>();

    constructor(private _portalService: PortalService) {
        this.dataSource.data = TREE_DATA;
        this.treeControl.dataNodes = TREE_DATA;
    }

    hasChild = (_: number, node: EditionComplexNode) => !!node.children && node.children.length > 0;

    hasLink = (node: EditionComplexNode) => !!node.link && node.link.length > 0;

    hasChildLinkRecursive = (node: EditionComplexNode) => {
        if (node.children) {
            for (const child of node.children) {
                if (this.hasLink(child)) {
                    return true;
                } else if (child.children) {
                    if (this.hasChildLinkRecursive(child)) {
                        return true;
                    }
                }
            }
        }
        return false;
    };

    ngAfterViewInit() {
        this._portalService.updateRightPanelPortalData(this.rightPanelPortal);
    }

    collapseAll() {
        this.treeControl.collapseAll();
        this.isAllCollapsed = true;
    }

    expandAll() {
        this.treeControl.expandAll();
        this.isAllCollapsed = false;
    }

    ngOnDestroy() {
        this._portalService.clearRightPanelPortalData();
    }
}
