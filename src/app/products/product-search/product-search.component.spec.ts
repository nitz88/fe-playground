import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductHttpService } from '../product-http.service';
import { ProductSearchComponent } from './product-search.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe(ProductSearchComponent.name, () => {
  let component: ProductSearchComponent;
  let fixture: ComponentFixture<ProductSearchComponent>;
  let service: ProductHttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        HttpClientModule,
      ],
      declarations: [ProductSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchComponent);
    service = TestBed.inject(ProductHttpService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call searchMethod when adding search term', fakeAsync(() => {
    const searchMethodSpy = jest.spyOn(service, 'search').mockReturnValue(of());
    component.search.setValue('phone');
    tick(2500);
    expect(searchMethodSpy).toBeCalled();
  }));

  it('should call getAll method when we remove search term', fakeAsync(() => {
    const getAllMethodSpy = jest.spyOn(service, 'getAll').mockReturnValue(of());
    component.search.setValue('');
    tick(2000);
    expect(getAllMethodSpy).toBeCalled();
  }));
});
