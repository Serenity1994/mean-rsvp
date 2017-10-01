import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Subscription} from 'rxjs/Subscription';
import {EventModel} from '../../core/models/event.model';
import {UtilsService} from '../../core/utils.service';
import {ApiService} from '../../core/api.service';
import {FilterSortService} from '../../core/filter-sort.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  pageTitle = 'home works';
  eventListSub: Subscription;
  eventList: EventModel[];
  filteredEvents: EventModel[];
  loading: boolean;
  error: boolean;
  query: '';

  constructor(private title: Title,
              public utils: UtilsService,
              private api: ApiService,
              public fs: FilterSortService) {
  }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getEventList();
  }

  private _getEventList() {
    this.loading = true;
    // Get future, public events
    this.eventListSub = this.api
      .getEvents$()
      .subscribe(
        res => {
          console.log(res);
          this.eventList = res;
          this.filteredEvents = res;
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        },
      );
  }

  searchEvents() {
    this.filteredEvents = this.fs.search(this.eventList, this.query, '_id', 'mediumDate');
  }

  resetQuery() {
    this.query = '';
    this.filteredEvents = this.eventList;
  }

  ngOnDestroy() {
    this.eventListSub.unsubscribe();
  }

}
