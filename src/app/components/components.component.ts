import { Component, OnInit, Renderer, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }

    .presentation-title {
        font-size: 50px;
    }

    .description,.title {
        text-align: center;
    }

    .align-icon {
        text-align: center;
        margin-top:  20px;
    }

    .welcome {
        text-align: center;
        font-weight: bold;
        margin-top: 0;
        font-family: serif;
    }

    .welcome-par {
        font-color: white;
        text-align: center;
        font-weight: 400;
        font-family: serif;
        font-size: 18px;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: { year: number, month: number };
    model: NgbDateStruct;
    @ViewChild('gmap') gmapElement: any;
    // map: google.maps.Map;

    constructor(private renderer: Renderer) { }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        }
        // const mapProp = {
        //     center: new google.maps.LatLng(18.5793, 73.8143),
        //     zoom: 15,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
        // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    }

}
