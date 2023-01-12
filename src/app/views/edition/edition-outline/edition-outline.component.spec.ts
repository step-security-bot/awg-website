import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatTreeHarness } from '@angular/material/tree/testing';

import { EditionOutlineComponent } from './edition-outline.component';

describe('EditionOutlineComponent', () => {
    let component: EditionOutlineComponent;
    let fixture: ComponentFixture<EditionOutlineComponent>;
    let loader: HarnessLoader;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [MatTreeModule, MatIconModule],
            declarations: [EditionOutlineComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditionOutlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        loader = TestbedHarnessEnvironment.loader(fixture);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get correct number of children and descendants', async () => {
        const tree = await loader.getHarness(MatTreeHarness);
        const treeDescendants = await tree.getNodes();

        expect(treeDescendants.length).toBe(109);
    });

    it('should correctly get series nodes with text', async () => {
        const tree = await loader.getHarness(MatTreeHarness);
        const treeNodes = await tree.getNodes({ text: /Serie/ });

        expect(treeNodes.length).toBe(3);

        const series1 = treeNodes[0];
        const series2 = treeNodes[1];
        const series3 = treeNodes[2];

        expect(await series1.getText()).toBe('Serie I (Werke mit Opuszahlen)');
        expect(await series1.getLevel()).toBe(0);
        expect(await series1.isDisabled()).toBe(false);
        expect(await series1.isExpanded()).toBe(false);

        expect(await series2.getText()).toBe('Serie II (Nachgelassene Kompositionen und Fragmente)');
        expect(await series2.getLevel()).toBe(0);
        expect(await series2.isDisabled()).toBe(false);
        expect(await series2.isExpanded()).toBe(false);

        expect(await series3.getText()).toBe('Serie III (Bearbeitungen von Werken anderer Komponisten)');
        expect(await series3.getLevel()).toBe(0);
        expect(await series3.isDisabled()).toBe(false);
        expect(await series3.isExpanded()).toBe(false);
    });

    xit('should correctly get tree structure', async () => {
        const tree = await loader.getHarness(MatTreeHarness);

        // TODO: There seems to be an issue with getTreeStructure() and nested nodes,
        // Cf. https://github.com/angular/components/issues/23881
        expect(await tree.getTreeStructure()).toEqual({
            children: [
                { text: 'Serie I (Werke mit Opuszahlen)' },
                { text: 'Serie II (Nachgelassene Kompositionen und Fragmente)' },
                { text: 'Serie III (Bearbeitungen von Werken anderer Komponisten)' },
            ],
        });

        const firstGroup = (await tree.getNodes({ text: /Flat Group 1/ }))[0];
        await firstGroup.expand();

        expect(await tree.getTreeStructure()).toEqual({
            children: [
                {
                    text: 'Flat Group 1',
                    children: [{ text: 'Flat Leaf 1.1' }, { text: 'Flat Leaf 1.2' }, { text: 'Flat Leaf 1.3' }],
                },
                { text: 'Flat Group 2' },
            ],
        });
    });
});
