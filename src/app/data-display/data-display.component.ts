import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit, OnDestroy {
  filterControl = new FormControl('');  // Declare and initialize first
  // Now declare data$ after filterControl has been initialized
  data$: Observable<any[]> = this.filterControl.valueChanges.pipe(
    startWith(''),
    debounceTime(300), // Delays data fetching while typing in the filter
    switchMap(value => 
      this.dataService.fetchData().pipe(
        map(data => data.filter((item: any) => item.name.includes(value)))
      )
    )
  );

  private subscription: Subscription | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Initialization of data$ is handled at declaration, nothing needed here specifically for it.
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
