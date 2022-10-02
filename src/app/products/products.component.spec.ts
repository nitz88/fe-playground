import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent, MockProvider } from 'ng-mocks';
import { ProductHttpService } from './product-http.service';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductsComponent } from './products.component';

describe(ProductsComponent.name, () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let service: ProductHttpService;
  let matBottomSheet: MatBottomSheet;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        NoopAnimationsModule,
        CommonModule
      ],
      declarations: [ProductsComponent, MockComponent(ProductSearchComponent)],
      providers: [MockProvider(ProductHttpService)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductHttpService);
    matBottomSheet = TestBed.inject(MatBottomSheet);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
    expect(matBottomSheet).toBeTruthy();
  });

  it('should call addProduct method when button click happens', () => {
    let button = fixture.debugElement.nativeElement.querySelector('#addButton');
    let addButtonEvent = jest.spyOn(component, 'addProduct');
    button.click();
    expect(addButtonEvent).toBeCalled();
  });

  it('should open matBottomSheet when addButton clicked', ()=> {
    let button = fixture.debugElement.nativeElement.querySelector('#addButton');
    let matBottomSheetSpy = jest.spyOn(matBottomSheet, 'open');
    button.click();
    expect(matBottomSheetSpy).toBeCalled();
  });
});
